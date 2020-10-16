import React, { useState } from 'react'
import { BsArrowUpShort, BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import RellaxWrapper from "react-rellax-wrapper";
import TextLoop from "react-text-loop";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { isMobile } from "react-device-detect";

//Components
import Divider from "./components/Divider"
import MainLogo from "./components/MainLogo";
import VideoTextOverlap from "./components/VideoTextOverlap";
import BrewsImages from "./components/BrewsImages";
import Socials from "./components/Socials";
import ArrowGlow from "./components/ArrowGlow";

//Images
import locationSvg from "./assets/images/locationWMarker.svg";
import cockTailImg from "./assets/images/stillCocktail.png";
import stillColdDrip from "./assets/images/stillColdDrip.png";

//Constants
import Copy from "./constants/WebCopy";
import Colors from "./constants/Colors";


const App = () => {

  const { 
    firstShortSection,
    mixesSection,
  } = Copy;
  
  const [mixesCounter, setMixesCounter] = useState(0);
  const [mixesValues, setMixesValues] = useState({
    header: mixesSection.header[mixesCounter],
    description: mixesSection.description[mixesCounter]
  });
  const [faded, setFaded] = useState("unfaded_item");
  const [readMoreAnim, setReadMoreAnim] = useState("display_set_none")
  const [readMoreText, setReadMoreText] = useState("Discover our ethos.");
  const [parallaxPositionY, setParallaxPositionY] = useState({
    parllax_1_2: isMobile ? -10 : -40,
    parallax_mixes_desc: 0
  });
  //Mixes Arrow Animations
  const [mixesRightArrow, setMixesRightArrow] = useState("");
  const [mixesLeftArrow, setMixesLeftArrow] = useState("");
  const [mixesArrowRightColor, setMixesArrowRightColor] = useState(Colors.primary);
  const [mixesArrowLeftColor, setMixesArrowLeftColor] = useState(Colors.primary);
  //Indicator Nodes
  const [nodesState, setNodesState] = useState(["indicator_nodes_filled", "", "", "", ""]);

  //Methods

  const readMoreOnClick = () => {
    const active = "read_more_active";
    const inactive = "display_set_none";
    const animSpeed = 200;

    if (readMoreAnim === "display_set_none") {
      setParallaxPositionY({
        parllax_1_2: isMobile ? -65 : -90,
        parallax_mixes_desc: 30
      });
      setReadMoreText("Show Less");
      setReadMoreAnim("display_set_block read_more_inactive");
      setTimeout(() => {
        setReadMoreAnim(active);  
      }, animSpeed);
    } else {
      setParallaxPositionY({
        parllax_1_2: isMobile ? -10 : -40,
        parallax_mixes_desc: 0
      });
      setReadMoreText("Discover our ethos.");
      setReadMoreAnim("display_set_block read_more_inactive");
      setTimeout(() => {
        setReadMoreAnim(inactive);  
      }, animSpeed);
    }
  }

  const imgTransition = (status) => {
    function animateText(value, animSyncWithCss = 200) {
      setFaded("unfaded_item faded_item");
        setTimeout(() => {
          setFaded("unfaded_item");
          setMixesValues({
            header: mixesSection.header[value],
            description: mixesSection.description[value]
          });
        }, animSyncWithCss);
        setMixesCounter(value);
    }
    
    const maxTexts = mixesSection.header.length - 1;

    if (status === "prev") {

      if (mixesCounter === 0) {
        animateText(maxTexts);
        let nodeTemp = Array(4).fill("");
        nodeTemp.push("indicator_nodes_filled")
        setNodesState(nodeTemp);
      } else {
        animateText(mixesCounter - 1);
        let index = nodesState.indexOf("indicator_nodes_filled")
        let nodeTemp = [...nodesState];
        nodeTemp[index - 1] = nodesState[index];
        nodeTemp[index] = "";
        setNodesState(nodeTemp)
      }
    } else {
      if (mixesCounter === maxTexts) {
        animateText(0);
        let nodeTemp = Array(4).fill("");
        nodeTemp.unshift("indicator_nodes_filled")
        setNodesState(nodeTemp);
      } else {
        animateText(mixesCounter + 1);
        let index = nodesState.indexOf("indicator_nodes_filled")
        let nodeTemp = [...nodesState];
        nodeTemp[index + 1] = nodesState[index];
        nodeTemp[index] = "";
        setNodesState(nodeTemp)
      }
    }
  };

  return (
    <div>
      <nav id="top" className="nav_style">
        <MainLogo />
        <Socials />
      </nav>

      <header className="header_page">

        <div className="header_video_container">
          <div className="black_overlay"></div>
          <video className="header_video" poster={stillColdDrip} autoPlay loop muted>
            <source src="https://dl.dropbox.com/s/o9tw2zp4jms6i8f/BB%20Tease%20Drip%20Timelapse%2030sec.mp4?dl=1" type="video/mp4"/>
          </video>
        </div>
        
        <div className="header_content">
          <div className="text_loop_styles">            
              <TextLoop noWrap={false}>
                <h1 className="header_interactive_text">We believe it starts with a careful brew.</h1>
                <h1 className="header_interactive_text">That every cup shared is a love gained.</h1>
                <h1 className="header_interactive_text">That everyone deserves a little honesty.</h1>
                <h1 className="header_interactive_text">And life is too short for bad drinks.</h1>
              </TextLoop>
          </div>

          <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://bubbletease.revelup.com/weborder/?establishment=1">
            <div className="cta_button">
              <p className="cta_text">Order Now</p>
            </div>
          </a>
        </div>
      </header>
      
      <section className="main_section">
    
        <Divider height={150}/>
        <div className="mission_section">
        <RellaxWrapper speed={0.6} percentage={0.8}>
          <div className="mission_statement_container">
            <p className="paragraph_sub_header">Our mission:</p>
            <p style={{ color: "#fff" }} className="unbold_header2">To craft the best damn drinks, carefully brewed, with
            natural ingredients, and to create genuinely good
            human experiences.</p>
              <p 
                unselectable="on" 
                onselectstart="return false;" 
                onmousedown="return false;" 
                style={{ color: Colors.primary }} 
                onClick={readMoreOnClick} 
                className="unselectable mission_read_more_bttn"
              >
                {readMoreText}
              </p>
          </div>
          </RellaxWrapper>

          <Divider height={50}/>

          {/* <RellaxWrapper speed={0.9} percentage={0.8}> */}
            <div className={"read_more_texts_container " + readMoreAnim}>
              <p>
                Hand crafted tea beverages are our specialty, but that’s just the beginning. Drawing on our passions for tea, coffee, 
                mixology, and craft artisanship, we’re creating products that break the rules. We’re choosing not to be 
                afraid of boundaries and are taking inspiration across disciplines, as well as taking the best that tradition has to offer.
              </p>
              <br/>
              <p>
                Bbtease is an exciting new concept taking tea culture to the next level. 23 years ago we had a single vision - share a piece 
                of our heritage and culture with Toronto’s diverse communities, and adding a little bit more. Now, Bubble tea is more prominent than 
                ever, and we believe it’s time to take another step. It’s time to contribute more to Toronto. We’re doing what we’ve always loved 
                to do: Creating new experiences and sharing culture.
              </p>

              <h3 className="read_more_h3">{firstShortSection.header}</h3>

              <p dangerouslySetInnerHTML={{ __html: firstShortSection.description }}></p>
            </div>
          {/* </RellaxWrapper> */}
        </div>

        <Divider height={100}/>

        {/* Brews A Section */}
        <BrewsImages 
          header="Brews"
          smallHeader="A LOOK AT OUR"
          positionXSmallHeader={{ right: -60 }}
          titlePositionX={{ left: "30%" }}
          parallaxPercentage={0.85}
          headerPositionY={parallaxPositionY.parllax_1_2}
        />

        <Divider height={ isMobile ? 50 : 200}/>

        {/* Mixes Section */}
        <div className="mixes_section">
          <div className="mixes_elements">
            <VideoTextOverlap
              header="Mixes"
              smallHeader="A LOOK AT OUR"
              positionXSmallHeader={{ right: -60 }}
              titlePositionX={{ left: isMobile ? "-30%" : "47%" }}
              parallaxPercentage={1.1}
              source="https://player.vimeo.com/video/468357881?autoplay=1&loop=1&autopause=0$mute=1"
              headerPositionY={parallaxPositionY.parllax_1_2}
              stillImg={cockTailImg}
            />
            
            <div className="mixes_text_container" style={{ top: parallaxPositionY.parallax_mixes_desc }}>
              <RellaxWrapper speed={0.5} percentage={0.6}> 
                <div className="interactive_text_center_container">
                  <div className="mixes_header_description_container">
                    <div className="interactive_text_center_header">
                      <div className={faded}>
                        <h3 style={{ color: "#fff" }}>{mixesValues.header}</h3>
                      </div>
                    </div>
                    <div style={{ position: "relative" }} className={faded + " mixes_description"}>
                      <p className="interactive_text_value small_text" dangerouslySetInnerHTML={{ __html: mixesValues.description }}></p>
                    </div>
                  </div>
                  <div className="mixes_arrow_container">
                    <div 
                      style={{ borderRadius: "50px", height: 54, width: 54 }}                           
                      onMouseEnter={() => {
                        setTimeout(() => {
                          if (!isMobile) {
                            setMixesArrowLeftColor(Colors.background)
                          }
                        }, 100);
                      }}
                      onMouseLeave={() => {
                        setTimeout(() => {
                          if (!isMobile) {
                            setMixesArrowLeftColor(Colors.primary)
                          }
                        }, 100);
                      }}
                    >
                      <ArrowGlow 
                          glowStateHover={() => setMixesLeftArrow("arrow_glow")}
                          glowStateUnHover={() => setMixesLeftArrow("")}
                          arrowDirectionGlow={mixesLeftArrow}
                          direction="left"
                          click={imgTransition.bind(this, "prev")}
                          style={{ position: "relative", left: 0 }}
                          showArrowBackground={false}
                        >
                        <BsArrowLeftShort 
                          style={{ zIndex: 2 }} 
                          size={24} 
                          color={mixesArrowLeftColor}
                        />
                      </ArrowGlow>
                    </div>
                    <div className="inidicator_nodes_container">
                      <div className={"indicator_nodes " + nodesState[0]}></div>
                      <div className={"indicator_nodes " + nodesState[1]}></div>
                      <div className={"indicator_nodes " + nodesState[2]}></div>
                      <div className={"indicator_nodes " + nodesState[3]}></div>
                      <div className={"indicator_nodes " + nodesState[4]}></div>
                    </div>
                    <div      
                      style={{ borderRadius: "50px", height: 54, width: 54 }}                           
                      onMouseEnter={() => setTimeout(() => {
                        if (!isMobile) {
                          setMixesArrowRightColor(Colors.background)
                        }
                      }, 100)}
                      onMouseLeave={() => setTimeout(() => {
                        if (!isMobile) {
                          setMixesArrowRightColor(Colors.primary)
                        }
                      }, 100)}
                    >
                      <ArrowGlow 
                        glowStateHover={() => setMixesRightArrow("arrow_glow")}
                        glowStateUnHover={() => setMixesRightArrow("")}
                        arrowDirectionGlow={mixesRightArrow}
                        direction="right"
                        click={imgTransition}
                        style={{ position: "relative", right: 0 }}
                        showArrowBackground={false}
                      >
                        <BsArrowRightShort 
                          style={{ zIndex: 2 }} 
                          size={24} 
                          color={mixesArrowRightColor} 
                        />
                      </ArrowGlow>
                    </div>
                  </div>
                </div>
              </RellaxWrapper>
            </div>
          </div>
        </div> 
      </section>

      <Divider />

      <section className="location_section">
        <div className="map_container">
          <img style={{ width: "100%", position: "relative", left: 10 }} src={locationSvg} alt="map"/>
        </div>
        <div className="map_text">
              <MainLogo />
              <p className="map_txt_statement">Everyday from 2pm - 9pm</p>
              <p>111 Dundas St W, Toronto, Ontario, M5G1C4</p>
              <p>416-671-3048</p>
        </div>
      </section>

      <Divider height={80}/>

      <section className="google_map_section">
        <iframe 
          title="Bbtease_location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6516959881137!2d-79.38643148450218!3d43.65541447912117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cbbe7bf343%3A0xad71ea14e32d155e!2s111%20Dundas%20St%20W%2C%20Toronto%2C%20ON%20M5G%201C4!5e0!3m2!1sen!2sca!4v1602606735923!5m2!1sen!2sca" 
          width={500}
          height={450} 
          frameborder={0} 
          style={{ border: 0, borderRadius: 10, overflow: "hidden" }} 
          allowFullScreen={false} 
          aria-hidden={false} 
          tabindex={0}
        ></iframe>
      </section>

      <footer>
        <div className="footer_nav">
            <a href="mailto:info@bbtease.com" style={{ color: Colors.secondary, textDecoration: "none" }} className="footer_text footer_email"><strong>Contact Us</strong></a>
            <Socials horizontalMargin={8}/>
        </div>
        <div className="footer_line_break_arrow">
          <AnchorLink href='#top'>
            <BsArrowUpShort className="arrow_icon footer_arrow" style={{ backgroundColor: Colors.primary }} size={28} color={Colors.background} />
          </AnchorLink>
          <div className="line_break"></div>
        </div>
        <div className="footer_notes">
          <div className="footer_elems">
            <p className="footer_text">ALL RIGHTS RESERVED © 2020 | BUBBLETEASE</p>
          </div>
          <div className="footer_elems designer_info_styles">
            <a style={{ textDecoration: "none" }} href="https://christianr.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="footer_text">DEVELOPMENT AND DESIGN BY CHRISTIAN ROJAS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;