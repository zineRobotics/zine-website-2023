import React, { useEffect, useState } from 'react'
import ProtectedRoute from "./ProtectedRoute";
import SideNav from '../sidenav';
import { useAuth } from "../../../context/authContext";
import { db } from '../../../firebase';
import { collection, addDoc, getDocs, query, where, doc, getDoc , DocumentReference, orderBy} from "firebase/firestore";
import { getMessages } from '../../../apis/room';
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
const timestampToHuman = (timeStamp: ITimestamp) => {
  const date = new Date(timeStamp.seconds * 1000)
  return {
      date: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
      time: date.toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })
  }
}

const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
function RenderMessageWithLinks({ message, user }: {message: string, user: boolean}) {
  return (
    <div className={`bg-blue-600 py-1 px-1 w-4/5`}
    style={{backgroundColor: `${user ? "#95C5E2":"#0C72B0"}`,
    borderRadius: 
    `${user ? "1.5rem 1.5rem 0.75rem 1.5rem": "1.5rem 1.5rem 1.5rem 0.75rem" }`,
    marginLeft: `${user? "50px":"0px"}`
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

const Channels = () => {
  type KeyValueArray = Array<{ id: string; data: IMessageData }>;

    const {authUser} = useAuth();
    const [rooms, setRooms] = useState<any[]>([]);
    const [currRoom, setCurrRoom] = useState<string>("");
    const [messages, setMessages] = useState<KeyValueArray>();
    const [currMsg, setCurrMsg] = useState("");
    
    // const [roomIDs, setRoomIDs] = useState<string[]>([]);
    // const roomsCollection = collection(db, "rooms")

    useEffect(()=>{
        console.log(messages);
        console.log("users", authUser.name);
        
        
    },[messages])
    const fetchSubCollectionDocuments = async (roomID: string) => {
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
    const getRoomByID = async (documentId: string) => {
        const docRef = doc(db, "rooms", documentId);
        try {
            const docSnapshot = await getDoc(docRef);
        
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              //console.log(data);
              return data; // Returning the data from the asynchronous function
            } else {
              console.log('Document does not exist');
              return null; // Returning null if the document doesn't exist
            }
          } catch (error) {
            console.error('Error getting document:', error);
            throw error; // Propagate the error up
          }
    }
  return (
    <ProtectedRoute>
    <div className="flex flex-col md:grid grid-cols-12 h-screen w-100 font-poppins" style={{background: "#EFEFEF"}}>
        <SideNav />
        <div className='flex h-screen md:col-span-9' >
          <div className="w-80 bg-white shrink-0 px-3 pt-10 flex justify-center">
            <div className='w-full'>
                <p onClick={()=>{
                  setCurrRoom("Announcements")
                }}
                className={`w-11/12 font-extrabold rounded-2xl mb-1 py-2 pl-8 ${currRoom === "Announcements" ? "bg-white" : "bg-gray-200"}`}
                style={{color: "#003d63", border: `${currRoom === "Announcements" ? "1px solid #003d63" :"" }` } }
                >
                  {"Announcements"}
                  </p>
              
            
            <div className="font-normal ml-2" style={{color: "#8D989F"}}>Groups</div>
            {
              rooms.map((ele) =>{
                return  (
                <p onClick={()=>{
                  console.log(ele[0]);
                  fetchSubCollectionDocuments(ele[0]);
                  setCurrRoom(ele[1].name)
                }}
                className={`w-11/12 font-extrabold rounded-2xl mb-1 py-2 pl-8 ${currRoom === ele[1].name ? "bg-white" : "bg-gray-200"}`}
                style={{color: "#003d63", border: `${currRoom === ele[1].name ? "1px solid #003d63" :"" }` } }
                >
                  {ele[1].name}
                  </p>)
              })
            }
            </div>
          </div>
          <div className='flex-1 bg-gray-100 flex flex-col'>
          <div className="bg-white text-blue-500 p-2 flex font-bold align-middle">
            <div className="w-8 h-8 bg-blue-600 mr-2 rounded-xl align"></div>
              {currRoom}
            </div>
          <div className='overflow-auto h-screen'>
              {/* {JSON.stringify(messages)} */}
              {
                      messages?.map(msg => {
                                const date = timestampToHuman(msg.data.timeStamp)
                                return (
                                    <div className="pl-7 mt-2" key={msg.data.timeStamp.seconds}>
                                        <p className="text-gray-500 text-sm pl-10"
                                        style={{marginLeft: `${msg.data.from === authUser.name ? "50px":"0px"}`}}
                                        >{msg.data.from} | {date.time} {date.date}</p>
                                        {/* <p className="whitespace-pre-wrap">
                                            {msg.message.split(/\s+/g).map(word => word.match(URL_REGEX) ? <><a href={word} className="text-blue-500 underline" target="_blank">{word}</a>{" "}</> : word + " ")}
                                        </p> */}
                                        <div className='flex'>
                                        {msg.data.from !== authUser.name && <div className="w-6 h-6 bg-white mr-2 bottom-0 mt-auto rounded"></div>}
                                        <RenderMessageWithLinks message={msg.data.message} user={msg.data.from === authUser.name}></RenderMessageWithLinks>
                                        </div>
                                    </div>
                                )
                            })
                        }
          </div>
          </div>
          

        </div>
    </div>
    </ProtectedRoute>
  )
}

export default Channels
