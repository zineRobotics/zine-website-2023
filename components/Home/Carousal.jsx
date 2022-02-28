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
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <Image src={a1}/>
            </div>
            <div className="keen-slider__slide number-slide2">
                <Image src={a2}/>
            </div>
            <div className="keen-slider__slide number-slide3">
                <Image src={a3}/>
            </div>
            <div className="keen-slider__slide number-slide4">
                <Image src={a4}/>
            </div>
          </div>
        </>
      )
}

export default Carousal;
