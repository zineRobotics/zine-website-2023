import React, { useEffect, useState } from "react";
import Link from "next/link";
import SideNav from "../sidenav";
import ProtectedRoute from "./ProtectedRoute";
import styles from "../../../constants/styles";
import Image from "next/image";
import ZineBlog from "../../../images/admin/zineblog.png"
import { useAuth } from "../../../context/authContext";
import { getMessages, announcementRoom } from "../../../apis/room";


interface ITimestamp {
    seconds: number;
    nanoseconds: number;
}

interface IMessageData {
    from: string;
    group: string;
    message: string;
    timeStamp: ITimestamp;
}

const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

const timestampToHuman = (timeStamp: ITimestamp) => {
    const date = new Date(timeStamp.seconds * 1000)
    return {
        date: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
        time: date.toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })
    }
}


function RenderMessageWithLinks({ message }: {message: string}) {
    return (
      <div className="whitespace-pre-wrap break-words mt-4">
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
    );
  }

const Announcements = () => {
    const [announcements, setAnnouncements] = useState<IMessageData[]>([])
    const { authUser } = useAuth();

    useEffect(() => {
      getMessages(announcementRoom, true, 10).then(msgSnapshot => {
        setAnnouncements(msgSnapshot.docs.map(d => d.data() as IMessageData))
      })
    }, [])

    const date = new Date()
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const dayOfMonth = date.getDate();
    const suffixes = ['th', 'st', 'nd', 'rd'];
    let suffix = 'th';
    
    if (dayOfMonth >= 11 && dayOfMonth <= 13) {
      // For 11, 12, and 13, always use 'th' suffix
      suffix = 'th';
    } else {
      // For other numbers, use the corresponding suffix
      const lastDigit = dayOfMonth % 10;
      suffix = suffixes[lastDigit] || 'th';
    }

    return (
        <ProtectedRoute>
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
            <SideNav />

                <div className="col-span-12 md:col-span-9 px-4 md:px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-2xl md:text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Dashboard</h1>
                    <div className="grid grid-cols-9 my-4 gap-8">
                        <div className="hidden md:flex flex-col col-span-3 row-span-4 bg-white rounded-xl py-4 px-16 justify-center">
                            <h5 className="text-xl text-right font-bold" style={styles.textPrimary}>{suffix}</h5>
                            <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>{date.getDate()}</h1>
                            <h3 className="text-3xl text-center mt-4 font-bold" style={styles.textNormal}>{months[date.getMonth()]}</h3>
                        </div>

                        <Link href="/blogs">
                          <div className="hidden md:flex col-span-3 row-span-4 bg-white py-3 rounded-xl items-center border-transparent border-2 hover:border-blue-400 ">
                            <Image src={ZineBlog} />
                          </div>
                        </Link>
                        
                        <div className="flex flex-col col-span-9 md:col-span-3 row-span-4 rounded-3xl px-8 py-8" style={{ background: "linear-gradient(135deg, #9B9C9C 0%, #D4D4D4 100%)" }}>
                            <div className="mt-24">
                              <h1 className="text-2xl text-white font-extrabold">{ authUser!.email.split('@')[0].toUpperCase() }</h1>
                              <h3 className="text-lg text-white">{ authUser!.name } </h3>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Announcements</h1>
                    <div className="flex flex-col my-4 gap-4">
                        {
                            announcements.map(msg => {
                                const date = timestampToHuman(msg.timeStamp)
                                return (
                                    <div className="bg-white rounded-xl py-4 px-6 w-full" key={msg.timeStamp.seconds}>
                                        <p className="text-gray-500 text-sm">{msg.from} | {date.time} {date.date}</p>
                                        {/* <p className="whitespace-pre-wrap">
                                            {msg.message.split(/\s+/g).map(word => word.match(URL_REGEX) ? <><a href={word} className="text-blue-500 underline" target="_blank">{word}</a>{" "}</> : word + " ")}
                                        </p> */}
                                        <RenderMessageWithLinks message={msg.message}></RenderMessageWithLinks>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </ProtectedRoute>
      )
}

export default Announcements;