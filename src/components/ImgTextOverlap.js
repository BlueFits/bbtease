import React from "react";

const ImgTextOverlap = ({ img, header, smallHeader, positionXSmallHeader, titlePositionX }) => {
    return (
        <div className="img_txt_overlap">

          <div className="custom_img_header_container">
            <div className="custom_img_header_texts" style={titlePositionX}>
            <p className="custom_img_small_txt" style={positionXSmallHeader}>{smallHeader}</p>
            <h1 className="special_h1" style={{ color: "#E9B16D" }}>{header}</h1>
            </div>
          </div>

          <div className="custom_img_container">
            <img className="custom_img" src={img} alt="customImg"/>
          </div>
        </div>
    );
}

export default ImgTextOverlap;