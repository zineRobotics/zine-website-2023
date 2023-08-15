import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Send from "../../images/icons/Send.png"
import Instructions from "../../images/icons/Integration instructions.svg"
import { askChatBot } from "../../apis/chat";

const prompts = [
    "What is Zine?",
    "What is the recruitment process for zine?",
    // "What is the recruitment process?"
]

interface ChatItem {
    message: string;
    author: "USER" | "BOT";
}

const Chat = () => {
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const [dots, setDots] = useState('.');
    const [chat, setChat] = useState<ChatItem[]>([])
    const containerRef = useRef<HTMLDivElement | null>(null);
    const lastMessageRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            // console.log('scrolling', containerRef.current.scrollTop, containerRef.current.scrollHeight)
            // containerRef.current!.scrollTop = containerRef.current!.scrollHeight
            lastMessageRef.current!.scrollIntoView()
            // console.log('scrolling done', containerRef.current!.scrollTop, containerRef.current!.scrollHeight)
        }
      }, [chat]);

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") return sendMessage()
    }

    const sendMessage = async (prompt="") => {
        setMsg("")
        if (!msg && !prompt) return
        if (loading) return
        const message = msg || prompt;

        const userMessage = { message: message, author: "USER" } as ChatItem
        setChat(prev => [...prev, userMessage])
        setLoading(true)
        const interval = setInterval(() => {
            setDots(prevDots => (prevDots === '...' ? '.' : prevDots + '.'));
          }, 500);

        const { data } = await askChatBot(message)
        const chatMessage = { message: data.message, author: "BOT" } as ChatItem
        setLoading(false)
        clearInterval(interval)
        setChat(prev => [...prev, chatMessage])
    }

    return (
        <div className="md:container mx-auto">
            <div className="flex flex-col font-poppins mx-2 lg:mx-32" style={{ height: "calc(100vh - 6rem)" }}>
                {/* Placeholders */}
                <div className="flex-1 text-center overflow-scroll">
                { chat.length === 0 &&  <div>
                        <h2 className="text-2xl md:text-4xl font-extrabold mt-8 md:mt-8" style={{ color: "#0C72B0F2" }}>ZINE AI (BETA)</h2>
                        <div className="mt-4 md:mt-8">
                            <Image src={Instructions} />
                        </div>
                        <h5 className="text-lg md:text-xl -mt-2" style={{color: "#5A62684D"}}>Instructions</h5>
                        <div className="mt-2 md:mt-4 flex flex-col text-left gap-2 lg:w-3/4 text-normal mx-auto" style={{ color: "#8D989F" }}>
                            <div className="py-2 px-8 rounded-xl" style={{ background: "#D9D9D91A" }}>
                                <p>Feel free to ask questions about ZINE and RAMAN</p>
                            </div>
                            <div className="py-2 px-8 rounded-xl" style={{ background: "#D9D9D91A" }}>
                                <p>Refrain from using foul language, your questions will be used for fine tuning the model to provide better results</p>
                            </div>
                            <div className="py-2 px-8 rounded-xl" style={{ background: "#D9D9D91A" }}>
                                <p>Use clear and concise language to help the chatbot understand your query more accurately and provide a relevant response.</p>
                            </div>
                            <div className="py-2 px-8 rounded-xl" style={{ background: "#D9D9D91A" }}>
                                <p>The AI might generate wrong responses, flag the response for further development</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    chat && <div className="flex flex-col gap-2 mt-2 text-left text-sm md:text-normal" ref={containerRef} style={{ color: "#FFFFFF"}}>
                        {
                            chat.map(c => {
                                return c.author === "USER" ? (
                                <div key={c.message} className="py-2 px-4 rounded-xl rounded-br-none max-w-md md:max-w-4xl w-fit ml-auto" style={{ background: "#5ab4ec" }}>
                                    {c.message}
                                </div>
                                ) :
                                (
                                <div key={c.message} className="py-2 px-4 rounded-xl rounded-bl-none max-w-md mr-auto flex md:max-w-4xl" style={{ background: "#0C72B0F2" }}>
                                    <div className="flex-grow">{c.message}</div>
                                </div>
                                )
                            })
                        }
                        {
                            loading && <div className="py-2 px-4 rounded-xl rounded-bl-none mr-auto max-w-sm md:max-w-xl w-fit" style={{ background: "#0C72B0F2" }}>
                                {dots}
                            </div>
                        }
                        <div ref={lastMessageRef}></div>
                    </div>
                }
                </div>
                <div className="flex text-sm font-medium mt-4 gap-1 md:gap-2 overflow-x-scroll" style={{ color: "#0C72B0F2" }}>
                    {
                        prompts.map(p => (
                            <div key={p} className="rounded-3xl py-2 px-3 cursor-pointer whitespace-nowrap hover:opacity-75" onClick={() => {sendMessage(p)}} style={{ background: "#C2FFF48A", borderColor: "#0C72B0", borderWidth: 1.5 }}>{p}</div>
                        ))
                    }
                </div>
                <div className="flex rounded-xl overflow-hidden border-2 -mb-5 md:mb-2 mt-2" style={{ borderColor: "#AAA"}} >
                    <input autoFocus ref={inputRef} className="py-2 px-4 w-full outline-none" placeholder="Ask Zine AI beta your questions" value={msg} onChange={(e)=>{setMsg(e.target.value)}} onKeyDown={handleEnter}/>
                    <div className="pt-1 px-2 ml-1 mr-2 mt-1 cursor-pointer" onClick={() => sendMessage()}>
                        <Image src={Send} height={30} width={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat