import React, { useEffect, useState, useRef } from "react";
import ProtectedRoute from "./ProtectedRoute";
import SideNav from "../sidenav";
import { useAuth } from "../../../context/authContext";
import { db } from "../../../firebase";
import { collection, addDoc, getDocs, query, where, doc, limit, getDoc, DocumentReference, orderBy, onSnapshot } from "firebase/firestore";
import { sendMessage, getMessages, announcementRoom } from "../../../apis/room";
import sendFCMMessage from "../../../apis/sendFcm";
import Image from "next/image";
import Send from "../../../images/icons/Send.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faLeftLong, faReply } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
interface ITimestamp {
  seconds: number;
  nanoseconds: number;
}
import ChatDP from "../../../images/zine2.png";
interface IMessageData {
  from: string;
  group: string;
  message: string;
  replyTo: string;
  timeStamp: ITimestamp;
  sender_id: string;
}
const ImageWrap = styled.span`
  margin-top: 5px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  & > div {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Channels = () => {
  type KeyValueArray = Array<{
    id: string;
    data: IMessageData;
  }>;

  const { authUser } = useAuth();
  const [rooms, setRooms] = useState<any[]>([]);
  const [currRoomID, setCurrRoomID] = useState<string>("");
  const [currRoom, setCurrRoom] = useState<string>("");
  const [messages, setMessages] = useState<KeyValueArray>([]);
  const [currMsg, setCurrMsg] = useState("");
  const [replyText, setReplyText] = useState<string>("");
  const [replyingName, setReplyingName] = useState<string>("");
  const [replyingMessageID, setReplyingMessageID] = useState<string | null>(null);
  const [currRoomImage, setCurrRoomImage] = useState<string>("");
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hide, setHide] = useState(false);
  const [announcements, setAnnouncements] = useState<IMessageData[]>([]);
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);
  useEffect(() => {
    getMessages(announcementRoom, true, 10).then((msgSnapshot) => {
      setAnnouncements(msgSnapshot.docs.map((d) => d.data() as IMessageData));
    });
  }, []);
  useEffect(() => {
    if (currRoomID) {
      const roomRef = doc(db, "rooms", currRoomID);
      const messagesRef = collection(roomRef, "messages");
      const q = query(messagesRef, orderBy("timeStamp", "asc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newMsg: KeyValueArray = [];
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // console.log(change.doc.data());
            // console.log(change.doc.id);
            newMsg.push({ id: change.doc.id, data: change.doc.data() as IMessageData });
          }
          // if (change.type === "modified") {
          //   console.log("Modified", change.doc.data());
          // }
          // if (change.type === "removed") {
          //   console.log("Removed", change.doc.data());
          // }
        });
        console.log("new docs", newMsg);

        console.log("new docs length", newMsg.length);

        setMessages((oldMsg) => [...oldMsg, ...newMsg]);
      });
      return () => {
        unsubscribe();
      };
    }
  }, [currRoomID]);
  const fetchSubCollectionMessages = async (roomID: string) => {
    try {
      const roomRef = doc(db, "rooms", roomID);
      const messagesRef = collection(roomRef, "messages");
      const q = query(messagesRef, orderBy("timeStamp", "asc"));
      const unsubscribe = () =>
        onSnapshot(q, (snapshot) => {
          const newMsg: KeyValueArray = [];
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              // console.log(change.doc.data());
              // console.log(change.doc.id);
              newMsg.push({ id: change.doc.id, data: change.doc.data() as IMessageData });
            }
            // if (change.type === "modified") {
            //   console.log("Modified", change.doc.data());
            // }
            // if (change.type === "removed") {
            //   console.log("Removed", change.doc.data());
            // }
          });
          console.log("new docs", newMsg);

          console.log("new docs length", newMsg.length);

          setMessages((oldMsg) => [...oldMsg, ...newMsg]);
        });

      // const roomRef = doc(db, "rooms", roomID);
      // const messagesRef = collection(roomRef, "messages");
      // const messagesSnapshot = await getDocs(query(messagesRef, orderBy("timeStamp", "asc")));

      // const documents = messagesSnapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   data: doc.data() as IMessageData,
      // }));
      // setMessages(documents);
      // // console.log(
      // //   "Subcollection Documents:",
      // //   documents
      // // );
    } catch (error) {
      console.error("Error fetching subcollection documents:", error);
    }
  };
  useEffect(() => {
    console.log("all messages", messages);
  }, [messages]);
  const fetchRooms = async () => {
    const promises = authUser?.roomids.map(async (roomID: string) => {
      const roomRef = doc(db, "rooms", roomID);
      const roomSnapshot = await getDoc(roomRef);
      if (roomSnapshot.exists()) {
        return [roomID, roomSnapshot.data()];
      } else {
        return [roomID, null];
      }
    });
    const final = await Promise.all(promises);
    // console.log("rooms", final);

    // const IDValuePairs = Object.assign({}, ...final);
    setRooms(final);
  };
  useEffect(() => {
    fetchRooms();
  }, []);
  // useEffect(() => {
  //   if (currRoomID) {
  //     try {
  //       const roomRef = doc(db, "rooms", currRoomID);
  //       const messagesRef = collection(roomRef, "messages");
  //       const queryMessages = query(messagesRef, orderBy("timeStamp", "asc"));
  //       onSnapshot(queryMessages, (snapshot) => {
  //         fetchSubCollectionMessages(currRoomID);
  //       });
  //     } catch (err) {
  //       console.log("snap error", err);
  //     }
  //   }
  // }, []);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current!.scrollIntoView();
    }
  }, [messages]);
  const handleSend = async () => {
    if (!currMsg) return;
    const roomCollection = collection(db, "rooms");
    const roomDoc = doc(roomCollection, currRoomID);
    const user = {
      name: authUser?.name,
      id: authUser?.uid,
    };
    //console.log(user, currMsg,roomRef);
    //console.log("user data", user);
    //console.log("id", replyingMessageID);
    const res = await sendMessage(roomDoc, currMsg, user, replyingMessageID);
    await sendFCMMessage(currRoom, currRoom, currMsg);

    //console.log(res);
    //fetchSubCollectionMessages(roomDoc.id);
    setCurrMsg("");
    setReplyText("");
    setReplyingName("");
    setReplyingMessageID(null);
    //console.log("message sent",res);
  };
  const timestampToHuman = (timeStamp: ITimestamp) => {
    const date = new Date(timeStamp.seconds * 1000);
    return {
      date: date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      }),
    };
  };

  const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
  function RenderMessageWithLinks({
    message,
    user,
    space,
    name,
    id,
    text,
    disableStatus,
    mobile,
  }: {
    message: string;
    user: boolean;
    space: boolean;
    name: string;
    id: string;
    text: string;
    disableStatus: boolean;
    mobile: boolean;
  }) {
    return (
      <div
        className={`bg-blue-600 py-3 px-1 pr-3`}
        style={{
          backgroundColor: `${user ? "#95C5E2" : "#0C72B0"}`,
          borderRadius: `${user ? "1.5rem 1.5rem 0.75rem 1.5rem" : "1.5rem 1.5rem 1.5rem 0.75rem"}`,
          marginLeft: `${user ? "auto" : space ? "2rem" : "0rem"}`,
          maxWidth: `${mobile ? "calc(95% - 2.5rem)" : "calc(60% - 2.5rem)"}`,
        }}
      >
        <div className="whitespace-pre-wrap break-words pl-3 text-white text-sm w-fit">
          {message.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line.split(/\s+/g).map((word, wordIndex) =>
                word.match(URL_REGEX) ? (
                  <a key={wordIndex} href={word} className={`${user ? "text-blue-500" : "text-blue-100"} underline`} target="_blank">
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
  const GetRepliedText = ({ msgID, user, space }: { msgID: string; user: boolean; space: boolean }) => {
    const msg = messages?.find((item) => item.id === msgID);
    return (
      <div
        className={`flex flex-col ${user ? "ml-auto" : "mr-auto"}`}
        style={{
          marginLeft: `${user ? "auto" : space ? "2rem" : "0rem"}`,
        }}
      >
        <div className={`text-sm ${user ? "ml-auto" : ""}`} style={{ color: "#8D989F" }}>{`Replying to ${msg?.data.from.split(" ")[0]}`}</div>
        <div className={`flex ${!user ? "flex" : ""}`}>
          {!user && (
            <div
              className={`w-1 h-fit`}
              style={{
                backgroundColor: "#95C5E2",
              }}
            ></div>
          )}
          <div className={`bg-white w-4/5 text-sm px-6 py-3 ${user ? "ml-auto" : ""}`} style={{ borderRadius: `${user ? "20px 10px 10px 20px" : "10px 20px 20px 10px"}` }}>
            {truncateString(msg?.data.message || "")}
          </div>
          {user && (
            <div
              className={`w-1 h-fit`}
              style={{
                backgroundColor: "#95C5E2",
              }}
            ></div>
          )}
        </div>
      </div>
    );
  };
  const truncateString = (str: string) => {
    let end = "";
    if (str.length > 50) {
      end = "...";
    }
    return str?.substring(0, 50) + end;
  };
  const displayReply = (id: string, name: string, text: string) => {
    setReplyingMessageID(id);
    setReplyingName(name);
    setReplyText(text);
  };
  return (
    <ProtectedRoute>
      <div className="flex flex-col md:grid grid-cols-12 h-screen w-screen font-poppins" style={{ background: "#EFEFEF" }}>
        <SideNav />

        {/* rooms/ channels */}

        <div className="flex h-screen md:col-span-9">
          {screenWidth >= 768 ? (
            <div className="w-60 bg-white shrink-0 px-3 pt-10 flex justify-center">
              <div className="w-full">
                <p
                  onClick={() => {
                    setCurrRoom("Announcements");
                    currRoom !== "Announcements" && setMessages([]);
                    // fetchSubCollectionMessages("Hn9GSQnvi5zh9wabLGuT");
                    setCurrRoomID("Hn9GSQnvi5zh9wabLGuT");
                    setReplyText("");
                    setReplyingName("");
                    setReplyingMessageID(null);
                  }}
                  className={`w-11/12 flex font-extrabold text-sm rounded-2xl mb-1 py-2 pl-4 ${currRoom === "Announcements" ? "bg-white" : "bg-gray-200"}`}
                  style={{
                    color: "#003d63",
                    border: `${currRoom === "Announcements" ? "1px solid #003d63" : ""}`,
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="w-6 h-6 mr-2"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  >
                    <div className="h-full w-full flex flex-col justify-center">
                      <Image layout="responsive" src={ChatDP} />
                    </div>
                  </div>
                  {"Announcements"}
                </p>

                <div className="font-normal ml-2 mt-5" style={{ color: "#8D989F" }}>
                  Groups
                </div>
                {rooms.map((ele) => {
                  return (
                    ele[1].type === "group" && (
                      <p
                        onClick={() => {
                          // console.log(ele[0]);
                          currRoomID !== ele[0] && setMessages([]);
                          setCurrRoomID(ele[0]);
                          // fetchSubCollectionMessages(ele[0]);
                          setCurrRoom(ele[1].name);
                          setCurrRoomImage(ele[1].image);
                          setReplyText("");
                          setReplyingName("");
                          setReplyingMessageID(null);
                        }}
                        key={ele}
                        className={`w-11/12 flex font-extrabold rounded-2xl mb-1 py-2 pl-4 text-sm ${currRoom === ele[1].name ? "bg-white" : "bg-gray-200"}`}
                        style={{
                          color: "#003d63",
                          border: `${currRoom === ele[1].name ? "1px solid #003d63" : ""}`,
                          cursor: "pointer",
                        }}
                      >
                        <div
                          className="w-6 h-6 mr-2 rounded-full"
                          style={{
                            backgroundColor: "white",
                          }}
                        >
                          {ele[1].image ? (
                            <Image
                              width={50}
                              height={50}
                              src={ele[1].image}
                              className="rounded-full"
                              style={{
                                backgroundColor: "#0C72B0",
                              }}
                            />
                          ) : (
                            <div className="h-full w-full flex flex-col justify-center">
                              <Image layout="responsive" src={ChatDP} />
                            </div>
                          )}
                        </div>
                        {ele[1].name}
                      </p>
                    )
                  );
                })}
                <div className="font-normal ml-2 mt-5" style={{ color: "#8D989F" }}>
                  Rooms
                </div>
                {rooms.map((ele) => {
                  return (
                    ele[1].type === "project" && (
                      <p
                        key={ele}
                        onClick={() => {
                          // console.log(ele[0]);
                          currRoomID !== ele[0] && setMessages([]);
                          setCurrRoomID(ele[0]);
                          // fetchSubCollectionMessages(ele[0]);
                          setCurrRoom(ele[1].name);
                          setCurrRoomImage(ele[1].image);
                          setReplyText("");
                          setReplyingName("");
                          setReplyingMessageID(null);
                        }}
                        className={`w-11/12 flex font-extrabold rounded-2xl mb-1 py-2 pl-4 text-sm ${currRoom === ele[1].name ? "bg-white" : "bg-gray-200"}`}
                        style={{
                          color: "#003d63",
                          border: `${currRoom === ele[1].name ? "1px solid #003d63" : ""}`,
                          cursor: "pointer",
                        }}
                      >
                        <div
                          className="w-6 h-6 z-4 mr-2"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                          }}
                        >
                          {ele[1].image ? (
                            <div
                              className="h-full w-full flex flex-col justify-center relative"
                              style={{
                                overflow: "hidden",
                                borderRadius: "50%",
                              }}
                            >
                              <Image
                                width={50}
                                height={50}
                                src={ele[1].image}
                                className="rounded-full"
                                style={{
                                  backgroundColor: "#0C72B0",
                                }}
                              />
                            </div>
                          ) : (
                            <div className="h-full w-full flex flex-col justify-center relative">
                              <Image layout="responsive" objectFit="cover" src={ChatDP} />
                            </div>
                          )}
                        </div>
                        {ele[1].name}
                      </p>
                    )
                  );
                })}
              </div>
            </div>
          ) : (
            !hide && (
              <div className="fixed bg-white h-full w-screen bottom-0 z-40 pt-20">
                <div className={`w-4/5 mx-auto`}>
                  <p
                    onClick={() => {
                      setCurrRoom("Announcements");
                      currRoom !== "Announcements" && setMessages([]);
                      // fetchSubCollectionMessages("Hn9GSQnvi5zh9wabLGuT");
                      setCurrRoomID("Hn9GSQnvi5zh9wabLGuT");
                      setReplyText("");
                      setReplyingName("");
                      setReplyingMessageID(null);
                      setHide(true);
                    }}
                    className={`flex text-xl rounded-xl mb-1 py-2 pl-4 ${currRoom === "Announcements" ? "bg-white" : "bg-gray-200"}`}
                    style={{
                      color: "#003d63",
                      border: `${currRoom === "Announcements" ? "1px solid #003d63" : ""}`,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="w-8 h-8 mr-4"
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="h-full w-full flex flex-col justify-center">
                        <Image layout="responsive" src={ChatDP} />
                      </div>
                    </div>
                    Announcements
                  </p>

                  <div className="font-normal w-3/5 mt-5" style={{ color: "#8D989F" }}>
                    Groups
                  </div>
                  {rooms.map((ele) => {
                    return (
                      ele[1].type === "group" && (
                        <p
                          key={ele}
                          onClick={() => {
                            // console.log(ele[0]);
                            setCurrRoomID(ele[0]);
                            currRoomID !== ele[0] && setMessages([]);
                            // fetchSubCollectionMessages(ele[0]);
                            setCurrRoom(ele[1].name);
                            setCurrRoomImage(ele[1].image);
                            setHide(true);
                            setReplyText("");
                            setReplyingName("");
                            setReplyingMessageID(null);
                          }}
                          className={`flex rounded-xl text-xl mb-2 py-2 pl-4 text-sm ${currRoom === ele[1].name ? "bg-white" : "bg-gray-200"}`}
                          style={{
                            color: "#003d63",
                            border: `${currRoom === ele[1].name ? "1px solid #003d63" : ""}`,
                            cursor: "pointer",
                          }}
                        >
                          <div
                            className="w-8 h-8 mr-4"
                            style={{
                              backgroundColor: "#fff",
                              borderRadius: "50%",
                            }}
                          >
                            {ele[1].image ? (
                              <div className="h-full w-full flex flex-col justify-center">
                                <Image
                                  height={50}
                                  width={50}
                                  src={ele[1].image}
                                  className="rounded-full"
                                  style={{
                                    backgroundColor: "#0C72B0",
                                  }}
                                />
                              </div>
                            ) : (
                              <div className="h-full w-full flex flex-col justify-center">
                                <Image layout="responsive" src={ChatDP} />
                              </div>
                            )}
                          </div>
                          {ele[1].name}
                        </p>
                      )
                    );
                  })}
                  <div className="font-normal w-3/5 mt-5" style={{ color: "#8D989F" }}>
                    Rooms
                  </div>
                  {rooms.map((ele) => {
                    return (
                      ele[1].type === "project" && (
                        <p
                          key={ele[1].name}
                          onClick={() => {
                            // console.log(ele[0]);
                            currRoomID !== ele[0] && setMessages([]);
                            setCurrRoomID(ele[0]);
                            // fetchSubCollectionMessages(ele[0]);
                            setCurrRoom(ele[1].name);
                            setCurrRoomImage(ele[1].image);
                            setHide(true);
                            setReplyText("");
                            setReplyingName("");
                            setReplyingMessageID(null);
                          }}
                          className={`flex rounded-2xl mb-2 py-2 pl-4 text-xl ${currRoom === ele[1].name ? "bg-white" : "bg-gray-200"}`}
                          style={{
                            color: "#003d63",
                            border: `${currRoom === ele[1].name ? "1px solid #003d63" : ""}`,
                            cursor: "pointer",
                          }}
                        >
                          <div
                            className="w-8 h-8 mr-5"
                            style={{
                              backgroundColor: "transparent",
                              borderRadius: "50%",
                            }}
                          >
                            {ele[1].image ? (
                              <div
                                className="h-full w-full flex flex-col justify-center relative bg-white"
                                style={{
                                  overflow: "hidden",
                                  borderRadius: "50%",
                                }}
                              >
                                <Image
                                  layout="fill"
                                  objectFit="cover"
                                  width={30}
                                  height={30}
                                  src={ele[1].image}
                                  className="rounded-full"
                                  style={{
                                    backgroundColor: "#0C72B0",
                                  }}
                                />
                              </div>
                            ) : (
                              <div className="h-full w-full flex flex-col justify-center overflow-hidden rounded-full bg-white">
                                <Image layout="responsive" src={ChatDP} />
                              </div>
                            )}
                          </div>
                          {ele[1].name}
                        </p>
                      )
                    );
                  })}
                </div>
              </div>
            )
          )}

          {/* CHAT PART */}
          {screenWidth >= 768 ? (
            <div className="flex-1 bg-gray-100 flex flex-col sm:w-full">
              {currRoomID && (
                <div className="bg-white flex w-full py-3 my-auto">
                  <div
                    className="w-8 h-8 mr-2 ml-6 py-auto object-fill rounded-xl my-auto"
                    // style={{backgroundColor: "#0C72B0"}}
                  >
                    {currRoomImage ? (
                      <div className="m">
                        <Image
                          height={50}
                          width={50}
                          src={currRoomImage}
                          className="rounded-full"
                          style={{
                            backgroundColor: "#0C72B0",
                          }}
                        />
                      </div>
                    ) : (
                      <div className="flex mt-2 justify-center align-center">
                        <Image src={ChatDP} />
                      </div>
                    )}
                  </div>
                  <div className="font-bold h-fit text-xl" style={{ color: "#0C72B0" }}>
                    {currRoom}
                  </div>
                </div>
              )}
              {/* <p className="whitespace-pre-wrap">
                                            {msg.message.split(/\s+/g).map(word => word.match(URL_REGEX) ? <><a href={word} className="text-blue-500 underline" target="_blank">{word}</a>{" "}</> : word + " ")}
                                        </p> */}
              <div className="overflow-auto h-screen">
                {messages?.map((msg, idx, array) => {
                  const date = timestampToHuman(msg.data.timeStamp);
                  const whiteRect = (idx + 1 < array.length && array[idx + 1].data.from !== msg.data.from) || idx == array.length - 1;
                  const user = msg.data.from === authUser?.name;
                  const reply = msg.data.replyTo;
                  return (
                    <div className="pl-7 mt-2" key={msg.data.timeStamp.seconds}>
                      {((idx > 0 && array[idx - 1].data.from !== msg.data.from) || idx == 0) && (
                        <p
                          className="text-gray-500 text-xs pl-10 w-full"
                          style={{
                            textAlign: `${user ? "right" : "left"}`,
                          }}
                        >
                          {msg.data.from} | {date.time} {date.date}
                        </p>
                      )}

                      <div className={`flex ${reply && user ? "flex-col" : ""}`}>
                        {whiteRect && msg.data.from !== authUser?.name && (
                          <div className="w-6 h-6 bg-white mr-2 mt-auto rounded">
                            <Image src={ChatDP} />
                          </div>
                        )}

                        {reply && user && (
                          <div className="flex w-fit">
                            <GetRepliedText msgID={reply} user={user} space={!whiteRect} />
                          </div>
                        )}
                        {reply && !user && (
                          <div className="flex flex-col">
                            <GetRepliedText msgID={reply} user={user} space={!whiteRect} />
                            <div className="flex">
                              <RenderMessageWithLinks
                                message={msg.data.message}
                                user={user}
                                space={!whiteRect}
                                name={msg.data.from}
                                id={msg.id}
                                text={msg.data.message}
                                disableStatus={currRoom === "Announcements"}
                                mobile={screenWidth < 768}
                              />
                              <div
                                className="ml-2 cursor-pointer mt-2"
                                style={{ color: "#a9a9a9" }}
                                onClick={() => {
                                  displayReply(msg.id, msg.data.from, msg.data.message);
                                }}
                              >
                                <FontAwesomeIcon icon={faReply} />
                              </div>
                            </div>
                          </div>
                        )}
                        {(!reply || user) && (
                          <>
                            <RenderMessageWithLinks
                              message={msg.data.message}
                              user={user}
                              space={!whiteRect}
                              name={msg.data.from}
                              id={msg.id}
                              text={msg.data.message}
                              disableStatus={currRoom === "Announcements"}
                              mobile={screenWidth < 768}
                            />
                            {!user && (
                              <div
                                className="ml-2 cursor-pointer mt-2"
                                style={{ color: "#a9a9a9" }}
                                onClick={() => {
                                  displayReply(msg.id, msg.data.from, msg.data.message);
                                }}
                              >
                                <FontAwesomeIcon icon={faReply} />
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={lastMessageRef}></div>
              </div>
              <div className="flex flex-col bg-white px-8 rounded-2xl mx-6 w-100">
                {replyingMessageID && (
                  <div className="flex mt-2">
                    <div className="w-fit text-sm" style={{ color: "#8D989F" }}>
                      Replying to {replyingName.split(" ")[0]}
                    </div>
                    <div className="ml-auto cursor-pointer">
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => {
                          setReplyText("");
                          setReplyingName("");
                          setReplyingMessageID(null);
                        }}
                      />
                    </div>
                  </div>
                )}
                {replyText && <div className="block w-fit">{truncateString(replyText)}</div>}
              </div>
              {currRoom !== "Announcements" && currRoom !== "" ? (
                <div className="flex rounded-xl mx-2 border-2 mb-2 md:mb-2 mt-2 md:mx-4 bg-white max-h-16">
                  <textarea
                    className="w-full px-3 py-4 pl-5 outline-none bg-white rounded-xl"
                    placeholder="Send message"
                    style={{ resize: "none", overflow: "hidden" }}
                    value={currMsg}
                    onChange={(e) => {
                      setCurrMsg(e.target.value);
                    }}
                  />
                  <div
                    className="bg-white cursor-pointer my-auto mr-2"
                    onClick={() => {
                      handleSend();
                    }}
                    style={{ marginTop: "1.25%" }}
                  >
                    <Image src={Send} height={40} width={40} />
                  </div>
                </div>
              ) : (
                <div className="mt-2"></div>
              )}
            </div>
          ) : (
            <div className={`bg-gray-100 w-screen flex flex-col h-dvh`}>
              <div className="bg-white flex fixed w-full top-12 z-30 align-center py-5 my-auto">
                <div
                  className="w-8 h-8 mr-2 ml-6 my-auto object-fill rounded-xl align py"
                  // style={{backgroundColor: "#0C72B0"}}
                >
                  {currRoomImage ? (
                    <Image
                      height={50}
                      width={50}
                      src={currRoomImage}
                      className="rounded-full"
                      style={{
                        backgroundColor: "#0C72B0",
                      }}
                    />
                  ) : (
                    <Image src={ChatDP} />
                  )}
                </div>
                <div className="font-bold text-xl" style={{ color: "#0C72B0" }}>
                  {currRoom}
                </div>
                {hide && (
                  <div
                    className="font-bold text-xl ml-auto mr-3"
                    style={{ color: "#0C72B0" }}
                    onClick={() => {
                      setHide(false);
                    }}
                  >
                    <FontAwesomeIcon size="xl" icon={faLeftLong} />
                  </div>
                )}
              </div>
              <div className={`pt-32 ${hide ? "overflow-auto" : "overflow-auto"} h-screen pr-2`}>
                {messages?.map((msg, idx, array) => {
                  const date = timestampToHuman(msg.data.timeStamp);
                  const whiteRect = (idx + 1 < array.length && array[idx + 1].data.from !== msg.data.from) || idx == array.length - 1;
                  const user = msg.data.from === authUser?.name;
                  const reply = msg.data.replyTo;
                  return (
                    <div className="pl-7 mt-2" key={msg.data.timeStamp.seconds}>
                      {((idx > 0 && array[idx - 1].data.from !== msg.data.from) || idx == 0) && (
                        <p
                          className="text-gray-500 text-xs pl-10 w-full"
                          style={{
                            textAlign: `${user ? "right" : "left"}`,
                          }}
                        >
                          {msg.data.from} | {date.time} {date.date}
                        </p>
                      )}
                      {/* <p className="whitespace-pre-wrap">
                                            {msg.message.split(/\s+/g).map(word => word.match(URL_REGEX) ? <><a href={word} className="text-blue-500 underline" target="_blank">{word}</a>{" "}</> : word + " ")}
                                        </p> */}
                      <div className={`flex ${reply && user ? "flex-col" : ""}`}>
                        {whiteRect && msg.data.from !== authUser?.name && (
                          <div className="w-6 h-6 bg-white mr-2 mt-auto rounded">
                            <Image src={ChatDP} />
                          </div>
                        )}

                        {reply && user && (
                          <div className="flex w-fit">
                            <GetRepliedText msgID={reply} user={user} space={!whiteRect} />
                          </div>
                        )}
                        {reply && !user && (
                          <div className="flex flex-col">
                            <GetRepliedText msgID={reply} user={user} space={!whiteRect} />
                            <div className="flex">
                              <RenderMessageWithLinks
                                message={msg.data.message}
                                user={user}
                                space={!whiteRect}
                                name={msg.data.from}
                                id={msg.id}
                                text={msg.data.message}
                                disableStatus={currRoom === "Announcements"}
                                mobile={screenWidth < 768}
                              />
                              <div
                                className="ml-2 cursor-pointer mt-2"
                                style={{ color: "#a9a9a9" }}
                                onClick={() => {
                                  displayReply(msg.id, msg.data.from, msg.data.message);
                                }}
                              >
                                <FontAwesomeIcon icon={faReply} />
                              </div>
                            </div>
                          </div>
                        )}
                        {(!reply || user) && (
                          <>
                            <RenderMessageWithLinks
                              message={msg.data.message}
                              user={user}
                              space={!whiteRect}
                              name={msg.data.from}
                              id={msg.id}
                              text={msg.data.message}
                              disableStatus={currRoom === "Announcements"}
                              mobile={screenWidth < 768}
                            />
                            {!user && (
                              <div
                                className="ml-2 cursor-pointer mt-2"
                                style={{ color: "#a9a9a9" }}
                                onClick={() => {
                                  displayReply(msg.id, msg.data.from, msg.data.message);
                                }}
                              >
                                <FontAwesomeIcon icon={faReply} />
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={lastMessageRef}></div>
              </div>
              <div className="flex flex-col bg-white px-8 rounded-2xl mx-6 w-100">
                {replyingMessageID && (
                  <div className="flex mt-2">
                    <div className="w-fit text-sm" style={{ color: "#8D989F" }}>
                      Replying to {replyingName.split(" ")[0]}
                    </div>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => {
                          setReplyText("");
                          setReplyingName("");
                          setReplyingMessageID(null);
                        }}
                      />
                    </div>
                  </div>
                )}
                {replyText && <div className="block w-fit">{truncateString(replyText)}</div>}
              </div>
              {currRoom !== "Announcements" && currRoom !== "" ? (
                <div className="max-h-14 flex rounded-xl mx-2 overflow-hidden border-2 mb-2 md:mb-2 mt-2 md:mx-4 bg-white">
                  <textarea
                    className="w-full px-3 py-4 pl-5 outline-none bg-white rounded-xl"
                    placeholder="Send message"
                    style={{ resize: "none", overflow: "hidden" }}
                    value={currMsg}
                    onChange={(e) => {
                      setCurrMsg(e.target.value);
                    }}
                  />
                  <div
                    className="bg-white cursor-pointer my-auto mr-2"
                    onClick={() => {
                      handleSend();
                    }}
                    style={{ marginTop: "1%" }}
                  >
                    <Image src={Send} height={40} width={40} />
                  </div>
                </div>
              ) : (
                <div className="mt-2"></div>
              )}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Channels;
