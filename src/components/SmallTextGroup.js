import React from "react";

const SmallTextGroup = ({ description, header }) => {
    return (
        <div className="small_text_group">
          <h3 className="short_h3">{header}</h3>
          <p className="short_desc" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    );
};

export default SmallTextGroup;