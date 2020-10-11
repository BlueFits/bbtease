import React from 'react'
import { animated } from 'react-spring'
import { Parallax } from "react-parallax";
import RellaxWrapper from "react-rellax-wrapper";

import customImg from "../assets/images/customImg.jpeg";
import Colors from "../constants/Colors";

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style  }}>
        <Parallax style={{ zIndex: -1 }} bgImage={customImg} bgImageAlt="img" strength={180} >
            <div className="card_ratio" />
        </Parallax>
    </animated.div>),
  ({ style }) => <animated.div style={{ ...style, background: Colors.primary }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
];

export default function App({ header, smallHeader, positionXSmallHeader, titlePositionX,  parallaxPercentage, onClick, transitions }) {
  return (
    <div className="img_txt_overlap">
        <RellaxWrapper speed={0.8} percentage={parallaxPercentage}>
            <div className="custom_img_header_container">            
                <div className="custom_img_header_texts" style={titlePositionX}>
                <p className="custom_img_small_txt" style={positionXSmallHeader}>{smallHeader}</p>
                <h1 className="special_h1" style={{ color: Colors.primary }}>{header}</h1>
                </div>
            </div>
        </RellaxWrapper>

        <div style={{ position: "relative", width: "70vw", height: "75vh", overflow: "hidden" }}>
            <div className="simple-trans-main">
                {transitions.map(({ item, props, key }) => {
                    const Page = pages[item]
                    return <Page key={key} style={props} />
                })}
            </div>
        </div>
    </div>
  )
}