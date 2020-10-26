import React, { useState } from 'react'
import "../stylesheets/CustomCarousel.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useTransition, animated } from 'react-spring'
import ScrollAnimation from "react-animate-on-scroll";
import "../stylesheets/ResponsiveCarouselLayout.css";
import { isMobile } from "react-device-detect";

//Components
import ArrowGlow from "./ArrowGlow";

//Constants
import Copy from "../constants/WebCopy";
import Colors from "../constants/Colors";

const pages = [
  ({ style }) => <animated.div className="responsive_carousel_animated_divs" style={{ ...style }}>
      <iframe title="nitro" src="https://player.vimeo.com/video/468357806?autoplay=1&loop=1&autopause=0transparent=0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </animated.div>,
  ({ style }) => <animated.div className="responsive_carousel_animated_divs" style={{ ...style }}>
      <iframe title="coffee" src="https://player.vimeo.com/video/468357848?autoplay=1&loop=1&autopause=0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>    
  </animated.div>,
  ({ style }) => <animated.div className="responsive_carousel_animated_divs" style={{ ...style }}>
      <iframe title="siphon" src="https://player.vimeo.com/video/468357822?autoplay=1&loop=1&autopause=0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </animated.div>,
  ({ style }) => <animated.div className="responsive_carousel_animated_divs" style={{ ...style }}>
      <iframe title="coldDrip" src="https://player.vimeo.com/video/468358488?autoplay=1&loop=1&autopause=0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </animated.div>,
]

export default function BrewsImages() {

  const {
    brewsSection
  } = Copy;

  const initTrans = {
    from: "100%",
    leave: "-50%"
  };

  const [brewsFaded, setBrewsFaded] = useState("unfaded_item faded_item");
  const [brewsLateFaded, setBrewsLateFaded] = useState("unfaded_item faded_item");

  const [arrowRightGlow, setArrowRightGlow] = useState(""); 
  const [arrowLeftGlow, setArrowLeftGlow] = useState(""); 
  const [brewsCounter, setBrewsCounter] = useState(0);
  const [transitionValues, setTransitionValues] = useState(initTrans);

  //Spring Transition
  const [index, set] = useState(0);

  //Nodes
  const [nodesState, setNodesState] = useState(["indicator_nodes_filled_white", "", "", ""]);


  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: `translate3d(${transitionValues.from},0,0)` },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: `translate3d(${transitionValues.leave},0,0)` },
  })

  //Methods

  const showFadedText = (isFaded) => {
    if (!isFaded) {
      setBrewsFaded("unfaded_item faded_item");
      setBrewsLateFaded("unfaded_item faded_item");
    } else {
      setBrewsFaded("unfaded_item");
      setBrewsLateFaded("unfaded_item");
    }
  };

  const showFadedLateText = (isFaded) => {
    if (!isFaded) {
      setBrewsFaded("unfaded_item faded_item");
      setTimeout(() => {
        setBrewsLateFaded("unfaded_item faded_item");
      }, 500);
    } else {
      setBrewsFaded("unfaded_item");
      setTimeout(() => {
        setBrewsLateFaded("unfaded_item");
      }, 500);
    }
  };

  const brewsOnClick = (direction) => {
    function animateText(value, timing = 200) {
      showFadedText(false);
      setTimeout(() => {
        showFadedText(true);
        setBrewsCounter(value);
      }, timing);
      return value;
    }

    const maxLength = brewsSection.header.length - 1;

    if (direction === "next") {
      setTransitionValues(initTrans);
      set((state) => {
        const nextSlideCalc = (state + 1) % 4;
        if (state !== maxLength) {
          //Node Logic
          let index = nodesState.indexOf("indicator_nodes_filled_white")
          let nodeTemp = [...nodesState];
          nodeTemp[index + 1] = nodesState[index];
          nodeTemp[index] = "";
          setNodesState(nodeTemp);
          //
          return animateText(nextSlideCalc);
        } else {
          //Node Logic
          let nodeTemp = Array(3).fill("");
          nodeTemp.unshift("indicator_nodes_filled_white");
          console.log(nodeTemp);
          setNodesState(nodeTemp)
          //
          return animateText(0);
        }
      });
    } else {
      setTransitionValues({
        from: "-100%",
        leave: "50%",
      });
      set((state) => {
        const prevSlideCalc = (state - 1) % 4;
        if (state !== 0) {
          //Node Logic
          let index = nodesState.indexOf("indicator_nodes_filled_white")
          let nodeTemp = [...nodesState];
          nodeTemp[index - 1] = nodesState[index];
          nodeTemp[index] = "";
          setNodesState(nodeTemp);
          //
          return animateText(prevSlideCalc);
        } else {
          //Node Logic
          let nodeTemp = Array(3).fill("");
          nodeTemp.push("indicator_nodes_filled_white");
          console.log(nodeTemp);
          setNodesState(nodeTemp)
          //
          return animateText(maxLength);
        }
      });
    }
  }
  
  return (
    <div className="brews_section">
      <div style={{ paddingLeft: isMobile ? "0" : "13%" }} className="custom_img_header_container ipadpro_brews_header">            
        <ScrollAnimation animateIn="fadeIn" afterAnimatedIn={showFadedLateText.bind(this, true)} animateOnce={true}>
          <h1 className="special_h1" style={{ color: Colors.primary }}>{brewsSection.sectionTitle}</h1>
        </ScrollAnimation>
      </div>
      <div className="img_text_overlap_container">
        <div className="responsive_carousel_container">
          <ArrowGlow 
            click={() => {
              brewsOnClick("next");
            }} 
            glowStateHover={() => setArrowRightGlow("arrow_glow")} 
            glowStateUnHover={() => setArrowRightGlow("")} 
            arrowDirectionGlow={arrowRightGlow} 
            direction="right"
          >
            <BsArrowRightShort style={{ zIndex: 2 }} size={32} color="#fff"/>
          </ArrowGlow>
          <ArrowGlow 
            click={() => {
              brewsOnClick("prev");
            }} 
            glowStateHover={() => setArrowLeftGlow("arrow_glow")} 
            glowStateUnHover={() => setArrowLeftGlow("")} 
            arrowDirectionGlow={arrowLeftGlow} 
            direction="left"
          >
            <BsArrowLeftShort style={{ zIndex: 2 }} size={32} color="#fff"/>
          </ArrowGlow>
          <div className="inidicator_nodes_white_container">
            <div className="indicator_white_extra_layer">
              <div className={"indicator_nodes_white " + nodesState[0]}></div>
              <div className={"indicator_nodes_white " + nodesState[1]}></div>
              <div className={"indicator_nodes_white " + nodesState[2]}></div>
              <div className={"indicator_nodes_white " + nodesState[3]}></div>
            </div>
          </div>
          <div className="responsive_carousel">
            {transitions.map(({ item, props, key }) => {
              const Page = pages[item]
              return <Page key={key} style={props} />
            })}
          </div>
        </div>

        <div className="brews_text_container">
          <div className="inner_content">
              <div className={brewsFaded}>
                <h3>{brewsSection.header[brewsCounter]}</h3>
              </div>
              <div className={brewsLateFaded}>
                <p className="small_text mobile_brews_description"dangerouslySetInnerHTML={{ __html: brewsSection.description[brewsCounter] }}></p>   
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}