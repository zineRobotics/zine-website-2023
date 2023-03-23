import React, { useState, KeyboardEvent } from "react";
import Link from "next/link";

const data = [
    {
      name: "Basic Mechanical Workshop",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?",
      timeDate: "1st April Saturday",
      type: "",
      venue: "VLTC - L004"
    },
    {
      name: "Basic Electrical Electronics Workshop",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?",
      timeDate: "2nd April Sunday",
      type: "",
      venue: "VLTC - L006"
    },
    {
      name: "Basic Mechanical Workshop1",
      timeDate: "1st April Saturday",
    },
    {
      name: "Basic Electrical Electronics Workshop2",
      timeDate: "2nd April Sunday",
    },
    {
      name: "Basic Mechanical Workshop3",
      timeDate: "1st April Saturday",
    },
    {
      name: "Basic Electrical Electronics Workshop4",
      timeDate: "2nd April Sunday",
    },
];

const Workshops = () => {
    const [state, setState] = useState({ selected: 0 })
    const select = (id: number) => {
      setState({ selected: id })
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
      const { selected } = state;
      if (e.key === "ArrowUp" && selected > 0) {
        setState({ selected: selected - 1 })
      } else if (e.key === "ArrowDown" && selected < data.length - 1) {
        setState({ selected: selected + 1 })
      }
    }

    return (
        <div className="flex flex-col items-center" style={{background: "linear-gradient(to right, #0C72B0, #95C5E2)", marginBottom: -35}}>
          <h1 className="text-white font-bold mt-24 text-6xl">Workshop</h1>
          
          <Link href="/workshops/registration">
            <button className="mt-8 p-4 block rounded-3xl bg-white" style={{width: 300}}>Register</button>
          </Link>
          
          {/* Timeline */}
          <div className="container my-24">
            <div className="grid grid-cols-9 mx-auto p-2 outline-none" tabIndex={1} onKeyDown={handleKeyDown}>
              {
                data.map((item, key) => {
                  const card = (
                    <div className={"p-4 my-4 text-white " + (key % 2 === 0 ? "col-start-2 col-end-5 ml-auto text-right" : "col-start-6 col-end-9")}>
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        {state.selected === key && <p className="leading-tight">{item.description}</p>}
                    </div>
                  )

                  const title = (
                    <div className={"p-4 my-4 my-auto text-white " + (key % 2 !== 0 ? "col-start-2 col-end-5 ml-auto" : "col-start-6 col-end-9")}>
                      <h3 className="font-semibold text-lg mb-1" style={{color: "#C2FFF4"}}>{item.timeDate}</h3>
                      <h3 className="font-semibold text-md mb-1" style={{color: "#C2FFF4"}}>{item.venue}</h3>
                    </div>
                  )

                  return (
                    <div key={item.name} className="flex flex-row-reverse contents" onClick={() => select(key)}>
                      {key % 2 === 0 ? card : title}

                      <div className="col-start-5 col-end-6 mx-auto relative">
                        <div className="h-full w-8 flex items-center justify-center">
                          <div className="h-full w-1 bg-white"></div>
                        </div>
                        <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-white">
                          {state.selected === key && <div className="w-4 h-4 mx-auto mt-2 rounded-full" style={{background: "#95C5E2"}}></div>}
                        </div>
                      </div>

                      {key % 2 === 0 ? title : card}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
}

export default Workshops;