import React, { useState } from 'react'
import RellaxWrapper from "react-rellax-wrapper";
import { Carousel } from "react-responsive-carousel";
import "../stylesheets/CustomCarousel.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { isMobile } from "react-device-detect";

//Components
import ArrowGlow from "./ArrowGlow";

//Images
import stillNitro from "../assets/images/stillNitro.png";
import stillColdDrip from "../assets/images/stillColdDrip.png";
import stillCoffee from "../assets/images/stillCoffee.png";
import stillSiphon from "../assets/images/stillSiphon.png";

//Constants
import Colors from "../constants/Colors";
import Copy from "../constants/WebCopy";

export default function App({ titlePositionX,  parallaxPercentage, headerPositionY }) {

  const {
    brewsSection
  } = Copy;

  const [brewsFaded, setBrewsFaded] = useState("unfaded_item");
  const [arrowRightGlow, setArrowRightGlow] = useState(""); 
  const [arrowLeftGlow, setArrowLeftGlow] = useState(""); 
  const [brewsCounter, setBrewsCounter] = useState(0);


  const brewsOnClick = (direction) => {
    const maxLength = brewsSection.header.length - 1;

    if (direction === "next") {
      if (brewsCounter !== maxLength) {
        setBrewsFaded("unfaded_item faded_item");
        setTimeout(() => {
          setBrewsFaded("unfaded_item");
          setBrewsCounter(brewsCounter + 1);
        }, 200);
      } else {
        setBrewsFaded("unfaded_item faded_item");
        setTimeout(() => {
          setBrewsFaded("unfaded_item");
          setBrewsCounter(0);
        }, 200);
      }
    } else {
      if (brewsCounter !== 0) {
        setBrewsFaded("unfaded_item faded_item");
        setTimeout(() => {
          setBrewsFaded("unfaded_item");
          setBrewsCounter(brewsCounter - 1);
        }, 200);
      } else {
        setBrewsFaded("unfaded_item faded_item");
        setTimeout(() => {
          setBrewsFaded("unfaded_item");
          setBrewsCounter(maxLength);
        }, 200);
      }
    }
  }
  

  //Methods
  const nextArrow = (carouselNext) => {
    return (
      <ArrowGlow 
        click={() => {
          carouselNext();
          brewsOnClick("next");
        }} 
        glowStateHover={() => setArrowRightGlow("arrow_glow")} 
        glowStateUnHover={() => setArrowRightGlow("")} 
        arrowDirectionGlow={arrowRightGlow} 
        direction="right"
      >
        <BsArrowRightShort style={{ zIndex: 2 }} size={32} color="#fff"/>
      </ArrowGlow>
    );
  }

  const prevArrow = (carouselPrev) => {
      return (
        <ArrowGlow 
          click={() => {
            carouselPrev();
            brewsOnClick("prev");
          }} 
          glowStateHover={() => setArrowLeftGlow("arrow_glow")} 
          glowStateUnHover={() => setArrowLeftGlow("")} 
          arrowDirectionGlow={arrowLeftGlow} 
          direction="left"
        >
          <BsArrowLeftShort style={{ zIndex: 2 }} size={32} color="#fff"/>
        </ArrowGlow>
      );
  }

  return (
    <div className="img_text_overlap_container">
      <div className="img_txt_overlap">
          <RellaxWrapper speed={0.4} percentage={parallaxPercentage}>
              <div style={{ bottom: headerPositionY }} className="custom_img_header_container">            
                  <div className="custom_img_header_texts" style={titlePositionX}>
                    <h1 className="special_h1" style={{ color: Colors.primary }}>Brews</h1>
                  </div>
              </div>
          </RellaxWrapper>

          <div style={{ zIndex: -1, position: "relative" }} className="carousel_container" >
              <Carousel 
                renderArrowNext={nextArrow} 
                renderArrowPrev={prevArrow} 
                dynamicHeight={true} 
                infiniteLoop={true} 
                showThumbs={false} 
                swipeable={false} 
                showIndicators={ isMobile ? false : true }
                showStatus={ isMobile ? false: true }
              >
                <div className="video_slideshow_styles">
                    <video className="video_back" style={{ backgroundImage: `url(${stillNitro})` }} autoPlay loop muted>
                      <source src="https://dl.dropbox.com/s/h4blafd1bfq8q10/BB%20Tease%20Nitro%20Cold%20Brew%20Tea.mp4?dl=1" type="video/mp4"/>
                    </video>
                    {/* <p className="legend">Nitro Tea</p> */}
                </div>
                <div className="video_slideshow_styles">
                    <video className="video_back" style={{ backgroundImage: `url(${stillCoffee})` }} autoPlay loop muted>
                      <source src="https://dl.dropbox.com/s/fzgvuxmrac4s608/coffee.mp4?dl=1" type="video/mp4"/>
                    </video>
                    {/* <p className="legend">Pour Over Coffee</p> */}
                </div>
                <div className="video_slideshow_styles">
                    <video className="video_back" style={{ backgroundImage: `url(${stillSiphon})` }} autoPlay loop muted>
                      <source src="https://dl.dropbox.com/s/196t8qqf5eo0sc5/Reverse%20Siphon.mp4?dl=1" type="video/mp4"/>
                    </video>
                    {/* <p className="legend">Siphon Pot Coffee and Tea</p> */}
                </div>
                <div className="video_slideshow_styles">
                    <video className="video_back" style={{ backgroundImage: `url(${stillColdDrip})` }}autoPlay loop muted>
                      <source src="https://dl.dropbox.com/s/o9tw2zp4jms6i8f/BB%20Tease%20Drip%20Timelapse%2030sec.mp4?dl=1" type="video/mp4"/>
                    </video>
                    {/* <p className="legend">Cold Drip Tea</p> */}
                </div>
              </Carousel>
          </div>
      </div>

      <div className="brews_text_container">
        <div className="inner_content">
            <div className={brewsFaded}>
              <h3>{brewsSection.header[brewsCounter]}</h3>
              <p className="small_text mobile_brews_description"dangerouslySetInnerHTML={{ __html: brewsSection.description[brewsCounter] }}></p>     
            </div>
        </div>
      </div>
    </div>
  )
}