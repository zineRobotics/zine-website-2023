import React, { useEffect, useState, useRef } from 'react'
import ProtectedRoute from "./ProtectedRoute";
import SideNav from '../sidenav';
import { useAuth } from "../../../context/authContext";
import { db } from '../../../firebase';
import { collection, addDoc, getDocs, query, where, doc, getDoc , DocumentReference, orderBy} from "firebase/firestore";
import { sendMessage } from '../../../apis/room';
import Image from 'next/image';
import Send from "../../../images/icons/Send.png"
interface ITimestamp {
  seconds: number;
  nanoseconds: number;
}
interface IMessageData {
  from: string;
  group: string;
  message: string;
  replyTo: string;
  timeStamp: ITimestamp;
  sender_id: string;
}

const Channels = () => {
  type KeyValueArray = Array<{ id: string; data: IMessageData }>;

    const {authUser} = useAuth();
    const [rooms, setRooms] = useState<any[]>([]);
    const [currRoomID, setCurrRoomID] = useState<string>("");
    const [currRoom, setCurrRoom] = useState<string>("");
    const [messages, setMessages] = useState<KeyValueArray>();
    const [currMsg, setCurrMsg] = useState("");
    const [replyText, setReplyText] = useState<string>("");
    const [replyingName, setReplyingName] = useState<string>("");
    const [replyingMessageID, setReplyingMessageID] = useState<string>("");
    const lastMessageRef = useRef<HTMLDivElement | null>(null)
    
    // const [roomIDs, setRoomIDs] = useState<string[]>([]);
    // const roomsCollection = collection(db, "rooms")

    useEffect(()=>{
        console.log(rooms);
        
        
        
    },[rooms])
    const fetchSubCollectionMessages = async (roomID: string) => {
      try {
        const roomRef = doc(db, "rooms", roomID);
        const messagesRef = collection(roomRef, "messages");
        const messagesSnapshot = await getDocs(query(messagesRef, orderBy("timeStamp", "asc")));
        
        const documents = messagesSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as IMessageData,
        }));
        setMessages(documents);
        console.log('Subcollection Documents:', documents);
      } catch (error) {
        console.error('Error fetching subcollection documents:', error);
      }
    };
    useEffect(()=>{
        const fetchRooms = async () => {
          const promises = authUser?.roomids.map(async (roomID: string)=>{
            const roomRef = doc(db, "rooms", roomID);
            const roomSnapshot = await getDoc(roomRef);
            if(roomSnapshot.exists()){
              return [roomID, roomSnapshot.data()];
            } else{
              return [roomID, null];
            }
        })
        const final = await Promise.all(promises);
        // const IDValuePairs = Object.assign({}, ...final);
          setRooms(final);
        }
        fetchRooms();
    },[]) 
    useEffect(()=>{
      if(lastMessageRef.current){
        lastMessageRef.current!.scrollIntoView()
      }
    },[messages])
  //   export const sendMessage = async (room: DocumentReference, message: string, user: any, replyTo: any) => {
  //     const msgData = {
  //         from: user.name,
  //         group: room.id,
  //         message,
  //         sender_id: user.id,
  //         timeStamp: Timestamp.fromDate(new Date()),
  //         replyTo: replyTo //repyTo: message id 
  //     }
  
  //     await addDoc(collection(room, 'messages'), msgData)
  //     return msgData
  // }
    const handleSend = async () => {
      if(!currMsg) return
      const roomCollection = collection(db, "rooms");
      const roomDoc = doc(roomCollection, currRoomID);
      const user = {
        name: authUser?.name,
        id: authUser?.uid
      }
      //console.log(user, currMsg,roomRef);
      //console.log("user data", user);
      const res = await sendMessage(roomDoc, currMsg, user, replyingMessageID);
      //console.log(res);
      fetchSubCollectionMessages(roomDoc.id);
      setCurrMsg("")
      setReplyText("")
      setReplyingName("")
      setReplyingMessageID("");
      //console.log("message sent",res);
    }
    // useEffect(()=>{
    //   console.log(currMsg);
      
    // },[currMsg])
    const timestampToHuman = (timeStamp: ITimestamp) => {
      const date = new Date(timeStamp.seconds * 1000)
      return {
          date: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
          time: date.toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })
      }
    }
    
    const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    function RenderMessageWithLinks({ message, user, space}: {message: string, user: boolean, space: boolean}) {
      return (
        <div className={`bg-blue-600 py-1 px-1 w-fit`}
        style={{backgroundColor: `${user ? "#95C5E2":"#0C72B0"}`,
        borderRadius: 
        `${user ? "1.5rem 1.5rem 0.75rem 1.5rem": "1.5rem 1.5rem 1.5rem 0.75rem" }`,
        marginLeft: `${user? "auto": space ? "2rem": "0rem"}`,
        maxWidth: "calc(100% - 2.5rem)"
      }}
        >
        <div className="whitespace-pre-wrap break-words pl-3 text-white">
          
          {message.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line.split(/\s+/g).map((word, wordIndex) =>
                word.match(URL_REGEX) ? (
                  <a
                    key={wordIndex}
                    href={word}
                    className="text-blue-500 underline"
                    target="_blank"
                  >
                    {word}{" "}
                  </a>
                ) : (
                  <React.Fragment key={wordIndex}>{word} </React.Fragment>
                )
              )}
              <br />
            </React.Fragment>
          ))}
        </div>
        </div>
      );
    }
    const GetRepliedText = ({msgID}: {msgID: string}) => {
      const msg = messages?.find(item=> item.id === msgID )
      return (
        <div className='flex flex-col w-4/5 ml-auto'>
          <div className='text-sm ml-auto' style={{color: "#8D989F"}}>Replying to {msg?.data.from.split(" ")[0]}</div>
          <div className='flex'>
          <div className='bg-white w-fit text-sm px-6 py-3 ml-auto'
                style={{borderRadius: "20px 10px 10px 20px"}} 
          >
            {msg?.data.message}
          </div>
          <div className="w-1 h-fit" style={{backgroundColor:"#95C5E2"}}></div>
          </div>
        </div>
        )
    }
    // useEffect(()=>{
    //   const f = async () => {
    //     const roomRef = doc(db, "rooms", currRoomID);
    //     const msgRef = doc(roomRef, "messages","Kc8lGOEdRMmtmXre9HZr")
    //   const msgSnap = await getDoc(msgRef)
    //   if(msgSnap.exists()){
    //     console.log(msgSnap.data());
        
    //   } else{
    //     console.log("message doesnt exist");
        
    //   }
    //   }
    //   f()
      
    // },[currRoomID])
  return (
    <ProtectedRoute>
    <div className="flex flex-col md:grid grid-cols-12 h-screen w-screen font-poppins" style={{background: "#EFEFEF"}}>
        <SideNav />
        <div className='flex h-screen md:col-span-9' >
          <div className="w-60 bg-white shrink-0 px-3 pt-10 flex justify-center">
            <div className='w-full'>
                <p onClick={()=>{
                  setCurrRoom("Announcements")
                }}
                className={`w-11/12 font-extrabold text-sm rounded-2xl mb-1 py-2 pl-4 ${currRoom === "Announcements" ? "bg-white" : "bg-gray-200"}`}
                style={{color: "#003d63", border: `${currRoom === "Announcements" ? "1px solid #003d63" :"" }`, cursor: 'pointer' } }
                >
                  {"Announcements"}
                  </p>
              
            
            <div className="font-normal ml-2 mt-5" style={{color: "#8D989F"}}>Groups</div>
            {
              rooms.map((ele) =>{
                return  (
                ele[1].type==="group" && <p onClick={()=>{
                  console.log(ele[0]);
                  setMessages([])
                  setCurrRoomID(ele[0])
                  fetchSubCollectionMessages(ele[0]);
                  setCurrRoom(ele[1].name)
                }}
                className={`w-11/12 font-extrabold rounded-2xl mb-1 py-2 pl-4 text-sm ${currRoom === ele[1].name ? "bg-white" : "bg-gray-200"}`}
                style={{color: "#003d63", border: `${currRoom === ele[1].name ? "1px solid #003d63" :"" }` ,cursor: 'pointer'} }
                >
                  {ele[1].name}
                  </p>)
              })
            }
            <div className="font-normal ml-2 mt-5" style={{color: "#8D989F"}}>Channels</div>
            {
              rooms.map((ele) =>{
                return  (
                ele[1].type==="project" && <p onClick={()=>{
                  console.log(ele[0]);
                  setMessages([])
                  setCurrRoomID(ele[0])
                  fetchSubCollectionMessages(ele[0]);
                  setCurrRoom(ele[1].name)
                }}
                className={`w-11/12 font-extrabold rounded-2xl mb-1 py-2 pl-4 text-sm ${currRoom === ele[1].name ? "bg-white" : "bg-gray-200"}`}
                style={{color: "#003d63", border: `${currRoom === ele[1].name ? "1px solid #003d63" :"" }` ,cursor: 'pointer'} }
                >
                  {ele[1].name}
                  </p>)
              })
            }
            </div>
          </div>
          <div className='flex-1 bg-gray-100 flex flex-col'>
          <div className="bg-white flex align-center py-3">
            <div className="w-8 h-8 mr-2 ml-6 rounded-xl align" style={{backgroundColor: "#0C72B0"}}></div>
            <div className='font-bold h-full py-auto' style={{color: "#0C72B0"}}>{currRoom}</div>            
          </div>
          <div className='overflow-auto h-screen'> 
              {
                      messages?.map((msg, idx, array )=> {
                                const date = timestampToHuman(msg.data.timeStamp)
                                const whiteRect = ((idx+1)<array.length && array[idx+1].data.from !== msg.data.from) || idx==array.length-1
                                const user = msg.data.from === authUser?.name
                                const reply = msg.data.replyTo
                                return (
                                    <div className="pl-7 mt-2" key={msg.data.timeStamp.seconds}>
                                        {((idx>0 && array[idx-1].data.from !== msg.data.from) || (idx==0)) &&
                                        <p className="text-gray-500 text-sm pl-10 w-full"
                                        style={{textAlign: `${user ? "right":"left"}`}}
                                        onClick={()=>
                                          {
                                            setReplyText(msg.data.message)
                                            setReplyingMessageID(msg.id)
                                            setReplyingName(msg.data.from)
                                          }
                                        }
                                        >{msg.data.from} | {date.time} {date.date}</p>}
                                        {/* <p className="whitespace-pre-wrap">
                                            {msg.message.split(/\s+/g).map(word => word.match(URL_REGEX) ? <><a href={word} className="text-blue-500 underline" target="_blank">{word}</a>{" "}</> : word + " ")}
                                        </p> */}
                                        <div className={`flex ${reply? "flex-col" : ""}`}>
                                        { ( whiteRect) && msg.data.from !== authUser?.name && <div className="w-6 h-6 bg-white mr-2 bottom-0 mt-auto rounded"></div>}
                                        
                                        {reply && 
                                        <div className='flex w-fit'>
                                          <GetRepliedText msgID={reply}/>
                                          </div>}
                                        <RenderMessageWithLinks message={msg.data.message} user={user} space={!whiteRect}/>
                                        </div>
                                       
                                    </div>
                                )
                            })
                        }
                        <div ref={lastMessageRef}></div>
                      
                </div>
                <div className='flex flex-col bg-white px-8 rounded-2xl mx-6 w-100' onClick={()=>{
                  setReplyText("")
                  setReplyingName("")
                  setReplyingMessageID("");
                }}>
                {replyingName && <div className='w-fit text-sm' style={{color: "#8D989F"}}>Replying to {replyingName.split(" ")[0]}</div>}
                {replyText && <div className='block w-fit'>{replyText}</div>}
                </div>
                <div className="flex rounded-xl overflow-hidden border-2 -mb-4 md:mb-2 mt-2 md:mx-4 bg-white" 
                >
                    <input className="py-2 px-4 w-full outline-none bg-white" placeholder="Send message" value={currMsg} onChange={(e)=>{setCurrMsg(e.target.value)}}/>
                    <div className="bg-white pt-1 px-2 ml-1 mr-2 cursor-pointer" onClick={()=>{handleSend()}}>
                     
                        <Image src={Send} height={30} width={30}/>
                        
                    </div>
                </div>
          </div>
          

        </div>
    </div>
    </ProtectedRoute>
  )
}

export default Channels
