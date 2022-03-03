import React from "react";
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image";
import "keen-slider/keen-slider.min.css"
import a1 from "../../images/carousal/1.jpg"
import a2 from "../../images/carousal/2.jpg"
import a3 from "../../images/carousal/3.jpg"
import a4 from "../../images/carousal/4.jpg"
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
      <div ref={sliderRef} className="keen-slider h-60 md:h-100 lg:h-130">
        <div className="keen-slider__slide number-slide1">
          <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
            <VisibilitySensor>
              {({ isVisible }) =>
                <h1 className="">
                  {
                    isVisible
                      ?
                      <Typical
                        steps={['Where imagination leads to creation', 2000]}
                        loop={Infinity}
                        wrapper="p"

                      /> : 'Where imagination leads to creation'

                  }   </h1>
              }
            </VisibilitySensor>



          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
            <VisibilitySensor>
              {({ isVisible }) =>
                <h1 className="">
                  {
                    isVisible
                      ?
                      <Typical
                        steps={['Conducts Robotics Workshop annually', 2000]}
                        loop={Infinity}
                        wrapper="p"

                      /> : 'Conducts Robotics Workshop annually'

                  }   </h1>
              }
            </VisibilitySensor>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
            <VisibilitySensor>
              {({ isVisible }) =>
                <h1 className="">
                  {
                    isVisible
                      ?
                      <Typical
                        steps={['Participates in various national and international events', 2000]}
                        loop={Infinity}
                        wrapper="p"

                      /> : 'Participates in various national and international events'

                  }   </h1>
              }
            </VisibilitySensor>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">
          <div className="absolute left-8 inset-y-2/4 text-xl md:text-3xl lg:text-5xl">
            <VisibilitySensor>
              {({ isVisible }) =>
                <h1 className="">
                  {
                    isVisible
                      ?
                      <Typical
                        steps={['Works on various research problems and innovative projects', 2000]}
                        loop={Infinity}
                        wrapper="p"

                      /> : 'Works on various research problems and innovative projects'

                  }   </h1>
              }
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousal;
