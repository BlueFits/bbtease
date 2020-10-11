import React from "react";

const ArrowGlow = ({ click, glowStateHover, glowStateUnHover, arrowDirectionGlow, children, direction }) =>{

    let classForArrow = "carousel_next";

    if (direction === "left") {
        classForArrow = "carousel_prev"
    }

    return (
        <div className={"carousel_directionals " + classForArrow}>
            <div className="carousel_arrow" onClick={click} onMouseOver={glowStateHover} onMouseOut={glowStateUnHover}>
                {/* <BsArrowRightShort style={{ zIndex: 2 }} size={32} color="#fff"/> */}
                {children}
                <div className={"circle_glow " + arrowDirectionGlow}></div>
            </div>
        </div>
    );
};

export default ArrowGlow;