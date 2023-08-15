import React from "react";
import Link from "next/link";
import Image from "next/image";
import ZineRobot from "../../images/zinerobot.gif"

const ChatButton = () => {
  return (
    <Link href="/chat">
      <div className="fixed cursor-pointer z-20 bottom-5 right-5 w-16 h-16 overflow-none flex items-center justify-center bg-white border-4 rounded-full transition-transform transform hover:scale-110" style={{borderColor: "#0C72B0"}}>
        <Image objectFit="cover"  src={ZineRobot} style={{ scale: "2"}} />
      </div>
    </Link>
  );
};

export default ChatButton;
