import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Colors from "../constants/Colors";

const Socials = ({ horizontalMargin }) => {
    return (
        <div>
            <a style={{ margin: `0 ${horizontalMargin}px` }}className="link_style" href="https://www.facebook.com/bbtease" target="_blank" rel="noopener noreferrer"><FaFacebookF color={Colors.secondary} size={20}/></a>
            <a style={{ margin: `0 ${horizontalMargin}px` }} className="link_style" href="https://www.instagram.com/bubbletease" target="_blank" rel="noopener noreferrer"><AiFillInstagram color={Colors.secondary} size={20}/></a>
        </div>
    );
};

export default Socials;