import React from "react";
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image";
import "keen-slider/keen-slider.min.css"
import Typical from 'react-typical'
import VisibilitySensor from 'react-visibility-sensor';

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
          }, 3000)
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
      <div ref={sliderRef} className="keen-slider h-60 md:h-100 lg:h-130 mb-4">
        {/* <div className="keen-slider__slide number-slide5">
          <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
            <p>Projects</p>
          </div>
        </div> */}
        <div className="keen-slider__slide number-slide6">
          <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
            <p>Workshop</p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide7">
          <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
            <p>Competitions</p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide8">
          <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
            <p>Zine Drone Racing</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousal;
