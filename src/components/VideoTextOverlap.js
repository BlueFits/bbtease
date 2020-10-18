import React from "react";
import RellaxWrapper from "react-rellax-wrapper";
import Colors from "../constants/Colors";
import ScrollAnimation from "react-animate-on-scroll";

const VideoTextOverlay = ({ header, smallHeader, positionXSmallHeader, titlePositionX, style, parallaxPercentage, source, headerPositionY, stillImg }) => {
    return (
        <div className="img_txt_overlap" style={ style }>
          <RellaxWrapper speed={0.4} percentage={parallaxPercentage}>
            <div style={{ bottom: headerPositionY }} className="custom_img_header_container ipadHack">            
              <div className="custom_img_header_texts" style={titlePositionX}>
                {/* <p className="custom_img_small_txt" style={positionXSmallHeader}>{smallHeader}</p> */}
                <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce={true}>
                <h1 className="special_h1" style={{ color: Colors.primary }}>{header}</h1>
                </ScrollAnimation>
              </div>
            </div>
          </RellaxWrapper>
          <div className="iframe_container mixes_hack">
            <iframe title="video_iframe" src={source} autoPlay={1} width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>          
          </div>
        </div>
    );
}

export default VideoTextOverlay;