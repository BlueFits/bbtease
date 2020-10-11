import React from "react";
import RellaxWrapper from "react-rellax-wrapper";
import { Parallax } from "react-parallax";
import Colors from "../constants/Colors";

const ImgTextOverlap = ({ img, header, smallHeader, positionXSmallHeader, titlePositionX, style, parallaxPercentage }) => {
    return (
        <div className="img_txt_overlap" style={style}>
          <RellaxWrapper speed={0.8} percentage={parallaxPercentage}>
            <div className="custom_img_header_container">            
              <div className="custom_img_header_texts" style={titlePositionX}>
                <p className="custom_img_small_txt" style={positionXSmallHeader}>{smallHeader}</p>
                <h1 className="special_h1" style={{ color: Colors.primary }}>{header}</h1>
              </div>
            </div>
          </RellaxWrapper>

          <Parallax style={{ zIndex: -1 }} bgImage={img} bgImageAlt="img" strength={180} >
            <div className="card_ratio" />
          </Parallax>
        </div>
    );
}

export default ImgTextOverlap;