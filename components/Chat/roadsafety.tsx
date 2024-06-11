import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Send from "../../images/icons/Send.png"
import axios from "axios"

const apiURL = "http://34.45.177.163/predict/"

interface ChatItem {
    message: string;
    author: "USER" | "BOT";
    language?: "en" | "hi"
}

const language_full: {[key: string]: string} = {
    "en": "English",
    "hi": "Hindi"
}

const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
function RenderMessageWithLinks({ message }: {message: string}) {
    return (
      <div className="whitespace-pre-wrap break-words">
        {message.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line.split(/\s+/g).map((word, wordIndex) =>
              word.match(URL_REGEX) ? (
                <a
                  key={wordIndex}
                  href={word.replace(/.$/, "")}
                  className="underline"
                  style={{color: "#aed8f2"}}
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

const RoadSafety = () => {
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const [dropdownActive, setDropDownActive] = useState(false)
    const [language, setLanguage] = useState("en")
    const [dots, setDots] = useState('.');
    const [chat, setChat] = useState<ChatItem[]>([
        // {message: "Hello", author: "USER", language: "en"},
        // {message: "Hello", author: "USER", language: "hi"},
        // {message: "Hello", author: "BOT"},

    ])
    const containerRef = useRef<HTMLDivElement | null>(null);
    const lastMessageRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    if (typeof window == "undefined") return <></>

    useEffect(() => {
        if (lastMessageRef.current) {
            // console.log('scrolling', containerRef.current.scrollTop, containerRef.current.scrollHeight)
            // containerRef.current!.scrollTop = containerRef.current!.scrollHeight
            lastMessageRef.current!.scrollIntoView()
            // console.log('scrolling done', containerRef.current!.scrollTop, containerRef.current!.scrollHeight)
        }
      }, [chat]);

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") return sendMessage(msg)
    }

    const sendMessage = async (prompt="") => {
        setMsg("")
        if (!msg && !prompt) return
        if (loading) return
        const message = msg || prompt;

        const userMessage = { message: message, author: "USER", language } as ChatItem
        setChat(prev => [...prev, userMessage])
        setLoading(true)
        const interval = setInterval(() => {
            setDots(prevDots => (prevDots === '...' ? '.' : prevDots + '.'));
        }, 500);

        const { data } = await axios.post(apiURL, { question: prompt, lang: language })

        const chatMessageEnglish = { message: data.en, author: "BOT", language: "en" } as ChatItem
        const chatMessageHindi = { message: data.hi, author: "BOT", language: "hi" } as ChatItem

        setLoading(false)
        clearInterval(interval)
        setChat(prev => [...prev, chatMessageEnglish, chatMessageHindi])
    }

    return (
        <div className="md:container mx-auto font-poppins">
            <div className="flex flex-col mx-2 lg:mx-32 h-screen">
                <div className="flex-1 text-center overflow-y-auto overflow-x-hidden">
                {
                    chat && <div className="flex flex-col gap-2 mt-2 text-left text-sm md:text-normal" ref={containerRef} style={{ color: "#FFFFFF"}}>
                        {
                            chat.map((c, id) => {
                                return c.author === "USER" ? (
                                <div key={c.message} className="py-2 px-4 rounded-2xl rounded-br-none max-w-md md:max-w-4xl w-fit ml-auto" style={{ background: "#5ab4ec" }}>
                                    {c.message}
                                </div>
                                ) :
                                (
                                <div key={c.message}>
                                    <div 
                                    className="py-2 px-4 rounded-2xl rounded-bl-none max-w-md flex relative md:max-w-4xl" 
                                    style={{ background: c.language === "en" ? "#0C72B0F2" : "#C2FFF48A", color: c.language === "en" ? "white" : "black", width: "fit-content" }}>
                                        <RenderMessageWithLinks message={c.message}></RenderMessageWithLinks>
                                    </div>
                                </div>
                                )
                            })
                        }
                        {
                            loading && <div className="py-2 px-4 rounded-2xl rounded-bl-none mr-auto max-w-sm md:max-w-xl w-fit" style={{ background: "#0C72B0F2" }}>
                                {dots}
                            </div>
                        }
                        <div ref={lastMessageRef}></div>
                    </div>
                }
                </div>
                <div className="flex w-full -mb-4 md:mb-2 mt-2">
                    <div className="relative mr-1" onMouseEnter={() => setDropDownActive(true)} onMouseLeave={() => setDropDownActive(false)}>
                        <button className="inline-flex rounded-lg text-white justify-center w-24 py-3" style={{borderColor: "#AAA", background: "#0C72B0F2"}}>
                            {language_full[language]}
                            <svg className="-mr-1 h-6 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                            </svg>
                        </button>
                        {dropdownActive && <div className="z-10 absolute bottom-12 shadow bg-white divide-y divide-gray-100 rounded-lg w-24">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li><a className="block px-2 py-1 hover:bg-gray-100" onClick={() => {setLanguage("en"); setDropDownActive(false)}}>English</a></li>
                            <li><a className="block px-2 py-1 hover:bg-gray-100" onClick={() => {setLanguage("hi"); setDropDownActive(false)}}>Hindi</a></li>
                            </ul>
                        </div>}

                    </div>

                    <div className="flex flex-1 rounded-xl overflow-hidden border-2" style={{borderColor: "#AAA"}} >
                        <input ref={inputRef} className="py-2 px-4 w-full outline-none" placeholder="Ask RoadSafety your questions" value={msg} onChange={(e)=>{setMsg(e.target.value)}} onKeyDown={handleEnter}/>
                        <div className="pt-1 px-2 ml-1 mr-2 mt-1 cursor-pointer" onClick={() => sendMessage(msg)}>
                            <Image src={Send} height={30} width={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadSafety