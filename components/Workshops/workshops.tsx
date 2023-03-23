import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";

const blogs = [
    {
      //cardTitle: "Basic Mechanical Workshop",
      timelineContent: (<p className="text-white font-bold">Basic Mechanical Workshop</p>),
      //title: "1st April Saturday",
      title: "1st April Saturday"
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
    return (
        <div className="flex flex-col items-center" style={{background: "linear-gradient(to right, #0C72B0, #95C5E2)", marginBottom: -35}}>
          <h1 className="text-white font-bold mt-24 text-6xl">Workshop</h1>
          <button className="mt-8 p-4 block rounded-3xl bg-white" style={{width: 300}}>Register</button>
          <div className="my-24" style={{ width: "100%", height: "100%" }}>
            <Chrono 
                items={blogs} 
                hideControls 
                cardHeight={0}
                cardWidth={250}
                borderLessCards
                allowDynamicUpdate
                mode="VERTICAL_ALTERNATING"
                theme={{
                    cardBgColor: 'transparent',
                    primary: 'white',
                    secondary: 'transparent',
                    cardForeColor: 'white',
                    titleColor: '#C2FFF4',
                    titleColorActive: '#C2FFF4'
                    // 95C5E2
                }}
            >
            </Chrono>
          </div>
        </div>
      )
}

export default Workshops;