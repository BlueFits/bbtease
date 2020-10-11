import React from "react";
import logoMain from "../assets/images/LogoMain.svg";

const MainLogo = () => {
    return (
        <div className="main_logo">
            <img style={{ width: "100%" }} src={logoMain} alt="logo"/>
        </div>
    );
};

export default MainLogo;