import React from "react";
import RellaxWrapper from "react-rellax-wrapper";


const SmallTextGroup = ({ description, header, parallaxPercentage }) => {
    return (
        <div className="small_text_group">
          <h3 className="short_h3">{header}</h3>
          <RellaxWrapper className="short_desc" speed={0.6} percentage={0.4}>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </RellaxWrapper>
        </div>
    );
};

export default SmallTextGroup;