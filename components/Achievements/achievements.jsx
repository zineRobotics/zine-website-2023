import React from "react";
import { Chrono } from "react-chrono";
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { achievements } from "../../constants/achievements";


const Achievements = () => {
  // const images = [a1, a2, a3, a4];
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
    <div className="text-black bg-white
    
    mb-8">
      <div style={{ width: "100%", height: "100%" }}>
        <div className="keen-slider__slide number-slide10 h-60 md:h-100 lg:h-130 mb-4">
          <div className="absolute left-8 pl-16 text-xl md:text-3xl lg:text-5xl">
            <p>Achievements</p>
          </div>
        </div>
        <Chrono items={achievements} mode="VERTICAL_ALTERNATING" disableClickOnCircle={true} hideControls={true}
          theme={{
            secondary: "white",


          }}
          disableNavOnKey={true}
        />

      </div>
    </div>
  )
}

export default Achievements;