import React from "react";

const SectionSelection = ({ drinkImg }) => {
 return (
    <div className="section_selection">
        <div className="section_selection_img_container">
            <img style={{ height: "100%" }} src={drinkImg} alt="drinks"/>
        </div>
        <div className="section_selection_text">
            <p style={{ marginBottom: 5, color: "#E9B16D" }}>Milk Tea Brew</p>
            <p>Mocha infused milk tea, an all time customer favourite.</p>
        </div>
    </div>
 );
}

export default SectionSelection;