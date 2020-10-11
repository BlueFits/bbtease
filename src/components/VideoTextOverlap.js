import React from "react";
import RellaxWrapper from "react-rellax-wrapper";
import Colors from "../constants/Colors";

const VideoTextOverlay = ({ header, smallHeader, positionXSmallHeader, titlePositionX, style, parallaxPercentage, source, bgImg, headerPositionY }) => {
    return (
        <div className="img_txt_overlap" style={ style }>
          <RellaxWrapper speed={0.4} percentage={parallaxPercentage}>
            <div style={{ bottom: headerPositionY }} className="custom_img_header_container">            
              <div className="custom_img_header_texts" style={titlePositionX}>
                {/* <p className="custom_img_small_txt" style={positionXSmallHeader}>{smallHeader}</p> */}
                <h1 className="special_h1" style={{ color: Colors.primary }}>{header}</h1>
              </div>
            </div>
          </RellaxWrapper>

          <div className="card_ratio mobile_video_overlay" style={{ overflow: "hidden", backgroundImage: `url(${bgImg})` }}>
            <video width="100%" autoPlay loop muted>
                <source src={source} type="video/mp4"/>
            </video>
          </div>
        </div>
    );
}

export default VideoTextOverlay;