import React from "react";
import Colors from "../constants/Colors";

const SectionSelection = ({ drinkImg, title, description }) => {
 return (
    <div className="section_selection">
        <div className="section_selection_img_container">
            <img style={{ height: "100%" }} src={ drinkImg } alt="drinks"/>
        </div>
        <div className="section_selection_text">
            <p style={{ marginBottom: 5, color: Colors.primary }}>{ title }</p>
            <p>{ description }</p>
        </div>
    </div>
 );
}

export default SectionSelection;