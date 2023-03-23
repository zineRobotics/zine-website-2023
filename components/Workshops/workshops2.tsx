import React, { useState } from "react";
import Link from "next/link";

const data = [
    {
      cardTitle: "Basic Mechanical Workshop",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?",
      title: "1st April Saturday",
      selected: true
    },
    {
      cardTitle: "Basic Electrical Electronics Workshop",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,quaerat?",
      title: "2nd April Sunday",
    },
    {
      cardTitle: "Basic Mechanical Workshop",
      title: "1st April Saturday",
    },
    {
      cardTitle: "Basic Electrical Electronics Workshop",
      title: "2nd April Sunday",
    },
    {
      cardTitle: "Basic Mechanical Workshop",
      title: "1st April Saturday",
    },
    {
      cardTitle: "Basic Electrical Electronics Workshop",
      title: "2nd April Sunday",
    },
];

const Workshops = () => {
    const [state, setState] = useState({ selected: 0 })
    const select = (id: number) => {
      setState({ selected: id })
    }

    return (
        <div className="flex flex-col items-center" style={{background: "linear-gradient(to right, #0C72B0, #95C5E2)", marginBottom: -35}}>
          <h1 className="text-white font-bold mt-24 text-6xl">Workshop</h1>
          
          <Link href="/workshops/registration">
            <button className="mt-8 p-4 block rounded-3xl bg-white" style={{width: 300}}>Register</button>
          </Link>
          
          {/* Timeline */}
          <div className="container my-24">
            <div className="grid grid-cols-9 mx-auto p-2">
              {
                data.map((item, key) => {
                  const card = (
                    <div className={"p-4 my-4 text-white " + (key % 2 === 0 ? "col-start-2 col-end-5 ml-auto" : "col-start-6 col-end-9")}>
                        <h3 className="font-semibold text-lg mb-1">{item.cardTitle}</h3>
                        {state.selected === key && <p className="leading-tight text-justify">{item.description}</p>}
                    </div>
                  )

                  const title = (
                    <div className={"p-4 my-4 my-auto text-white " + (key % 2 !== 0 ? "col-start-2 col-end-5 ml-auto" : "col-start-6 col-end-9")}>
                      <h3 className="font-semibold text-lg mb-1" style={{color: "#C2FFF4"}}>{item.title}</h3>
                    </div>
                  )

                  return (
                    <div key={item.title} className="flex flex-row-reverse contents" onClick={() => select(key)}>
                      {key % 2 === 0 ? card : title}

                      <div className="col-start-5 col-end-6 mx-auto relative mr-10">
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