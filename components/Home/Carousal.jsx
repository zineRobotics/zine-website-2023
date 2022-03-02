import React from "react";
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image";
import "keen-slider/keen-slider.min.css"
import a1 from "../../images/carousal/1.jpg"
import a2 from "../../images/carousal/2.jpg"
import a3 from "../../images/carousal/3.jpg"
import a4 from "../../images/carousal/4.jpg"
const Carousal = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    
      return (
        <>
          <div ref={sliderRef} className="keen-slider h-80 md:h-100 lg:h-150">
            <div className="keen-slider__slide number-slide1">
                <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
                  <h1 className="">Where Imagination Leads to Creation</h1>
                </div>
            </div>
            <div className="keen-slider__slide number-slide2">
            <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
                  <h1 className="">Conducts Robotics Workshop annually</h1>
                </div>
              </div>
            <div className="keen-slider__slide number-slide3">
            <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
                  <h1 className="">Participates in various national and international events</h1>
                </div>
              </div>
            <div className="keen-slider__slide number-slide4">
            <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
                  <h1 className="">Participates in various national and international events</h1>
                </div>
              </div>
          </div>
        </>
      )
}

export default Carousal;
