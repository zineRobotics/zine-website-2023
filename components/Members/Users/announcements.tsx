import React, { useEffect, useState } from "react";
import Link from "next/link";
import SideNav from "../sidenav";
import ProtectedRoute from "./ProtectedRoute";
import styles from "../../../constants/styles";
import Image from "next/image";
import ZineBlog from "../../../images/admin/zineblog.png";
import { useAuth } from "../../../context/authContext";
import { getRoom, fetchRoomsByUser } from "../../../apis/room";
import { checkHackathonRegistration, registerHackathon } from "../../../apis/users"
import { Registration } from "../../Workshops";
import { toast } from "react-toastify";
import Modal from "../modal";
// import { collection, getCountFromServer, query, where } from "firebase/firestore";
// import { db } from "../../../firebase";

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
  const date = new Date(timeStamp.seconds * 1000);
  return {
    date: date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
    time: date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" }),
  };
};

function RenderMessageWithLinks({ message }: { message: string }) {
  return (
    <div className="whitespace-pre-wrap break-words mt-4">
      {message.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line.split(/\s+/g).map((word, wordIndex) =>
            word.match(URL_REGEX) ? (
              <a key={wordIndex} href={word} className="text-blue-500 underline" target="_blank">
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
  const [announcements, setAnnouncements] = useState<IMessageData[]>([]);
  const { authUser } = useAuth();
  const [isRegistered, setIsRegistered] = useState<boolean>();

  const date = new Date();
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const dayOfMonth = date.getDate();
  const suffixes = ["th", "st", "nd", "rd"];
  let suffix = "th";

  if (dayOfMonth >= 11 && dayOfMonth <= 13) {
    // For 11, 12, and 13, always use 'th' suffix
    suffix = "th";
  } else {
    // For other numbers, use the corresponding suffix
    const lastDigit = dayOfMonth % 10;
    suffix = suffixes[lastDigit] || "th";
  }

  const handleClick = () => {
    window.location.href = "/users/forms";
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col md:grid grid-cols-12 h-screen" style={{ background: "#EFEFEF" }}>
        <SideNav />

        <div className="md:col-span-9 px-4 md:px-12 flex flex-col overflow-y-scroll">
          <h1 className="text-2xl md:text-4xl font-bold mt-14 md:mt-8" style={{ color: "#AAAAAA" }}>
            Dashboard
          </h1>
          <div className="grid grid-cols-9 my-4 gap-8">
            <div className="md:flex flex-col col-span-9 row-span-4 bg-blue2 rounded-3xl py-4 px-16 justify-center shadow-md">
              <h5 className="text-xl text-center font-bold text-white" >
                Register for the Recruitment and Workshop!
              </h5>
              <Link href={{ pathname: '/users/forms', query: { register: 'workshop' } }}>
                <button className="mt-4 bg-white text-blue2 text-center py-2 px-4 rounded-xl hover:bg-gray-300 font-bold"
                    // onClick={() => handleClick()}
                  >
                    Forms
                </button>
              </Link>
            </div>
            <div className="hidden md:flex flex-col col-span-3 row-span-4 bg-white rounded-3xl py-4 px-16 justify-center shadow-md">
              <h5 className="text-xl text-right font-bold" style={styles.textPrimary}>
                {suffix}
              </h5>
              <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>
                {date.getDate()}
              </h1>
              <h3 className="text-3xl text-center mt-4 font-bold" style={styles.textNormal}>
                {months[date.getMonth()]}
              </h3>
            </div>

            <Link href="/blogs">
              <div className="hidden md:flex col-span-3 row-span-4 bg-white py-3 rounded-3xl items-center border-transparent border-2 hover:border-blue-400 cursor-pointer shadow-md">
                <Image src={ZineBlog} />
              </div>
            </Link>
            
            {/* <Link href="/forms"> */}
              <div
                className="flex flex-col col-span-9 md:col-span-3 row-span-4 rounded-3xl px-8 py-8 shadow-xl hover:border-blue-400 cursor-pointer shadow-md"
                style={{ background: "linear-gradient(135deg, #9B9C9C 0%, #D4D4D4 100%)" }}
              >
                <div className="mt-24">
                  <h1 className="text-2xl text-white font-extrabold">{authUser!.email?.split("@")[0].toUpperCase()}</h1>
                  <h3 className="text-lg text-white">{authUser!.name} </h3>
                  <br />
                </div>
                
              </div>
            {/* </Link> */}

          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Announcements;
