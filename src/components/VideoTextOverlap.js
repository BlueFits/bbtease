import React from "react";

const VideoTextOverlay = ({ header, smallHeader, positionXSmallHeader, titlePositionX, style, parallaxPercentage, source, headerPositionY, stillImg }) => {
    return (
        <div className="iframe_dimensions_controller">
          <div className="iframe_container">
            <iframe title="video_iframe" src={source} autoPlay={1} width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>          
          </div>
        </div>
    );
}

export default VideoTextOverlay;