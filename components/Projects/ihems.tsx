import React from "react";
import Link from "next/link";
import Macbook from "../../images/macbook.svg";
import Image from "next/image";

const ihems = () => {
    return (
        <div className="leading-normal tracking-normal text-indigo-400 pt-4 bg-cover bg-fixed bg-white">
          <p>The system uses the concept of demand side management, variable tariff blocks and its optimization on cloud such that the power consumption bill is minimized, peak load time is clipped and the consumer satisfaction is maximized. It records and analyzes the electrical parameters and provides an option for optimized scheduling for electrical appliances. The system provides a real time access to the load parameters and there is a centralized data monitoring system which generates a report and provides alert to the user to reduce the load consumption on exceeding the proposed usage limit as determined by the predicted load. A smart control feature is integrated which enables control of all the appliances using a handheld device.The system also logs the power consumption so that the discrepancy in billing can be cut down.</p>
        </div>
      )
}
// Responsiveness done
export default ihems;