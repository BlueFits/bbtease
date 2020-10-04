import React from 'react';

//Components
import SmallTextGroup from "./components/SmallTextGroup";
import ImgTextOverlap from "./components/ImgTextOverlap";
import SectionSelection from "./components/SectionSelection";

//Images
import customImg from "./assets/images/customImg.jpeg";
import drinkImg from "./assets/images/drinkA.jpeg";

//Videos
// import videoOne from "./assets/videos/vid_1.mp4";

const App = () => {

  const firstText = `Whether tasting a delicious drink, or eating great food, all the way to interactions of multiple people, 
  such as having a good ordering experience, or having a conversation with your barista. <br/><br/>
  The commitment to creating genuinely good human experiences acknowledges 
  that we’re going to be more than just making drinks, that our emphasis is what we can do that machines can’t, or what fast food will never choose to offer. <br/><br/>
  The commitment to having our whole environment and service mentality in making sure that the experience from walking in, to walking out, was a genuinely good experience 
  for not only the customer, but also for the staff, and every other human involved in that community - from our suppliers, to our team, to our customers, we strive to make 
  sure that every part of that relationship chain is a wholesome experience.`

  return (
    <div>
      <header className="header_page">
        <nav className="nav_style">
          <div><img alt="logo"/></div>
          <div>
              <a className="link_style" href="#"><img className="icon_style" alt="social"/></a>
              <a className="link_style" href="#"><img className="icon_style" alt="social"/></a>
          </div>
        </nav>

        <div className="header_video_container">
          <video width="100%" controls autoPlay loop>
            {/* <source src={videoOne} type="video/mp4"/> */}
          </video>
        </div>
        
        <div className="header_content">
          <div>
            <span className="sub_header_text">Established since 2000</span>
            <h1 className="header_text">Life is too short for bad drinks.</h1>
          </div>
        </div>
      </header>
      
      <section className="main_section">
        
        <div className="unbound_text">
          <p className="sub_header">
            Hand crafted tea beverages are our specialty,<span style={{ color: "#E9B16D"}}> but that’s just the beginning. Drawing on our passions for tea, coffee, mixology, 
            and craft artisanship, we’re creating products that break the rules. We’re choosing not to be afraid of boundaries and are taking inspiration across disciplines, 
            as well as taking the best that tradition has to offer.</span>
          </p>
        </div>

        <SmallTextGroup 
          header={"To us, a human experience is any experience that involves at least one person."}
          description={firstText}
        />

        <div className="img_text_overlap_container">
          <ImgTextOverlap
            img={customImg}
            header="Brews"
            smallHeader="These Are The"
            positionXSmallHeader={{ right: 40 }}
            titlePositionX={{ left: "40%" }}
          />
        </div>

      </section>

      <section className="brew_section">
        <SectionSelection
          drinkImg={drinkImg}
        />
        <SectionSelection
          drinkImg={drinkImg}
        />
        <SectionSelection
          drinkImg={drinkImg}
        />
      </section>

      <section className="main_section">
        <SmallTextGroup 
            header={"Today we are pioneering all natural pure milk teas."}
            description={"Today we are pioneering all natural PURE milk teas, made with fresh milk and cream, and high quality premium loose leaf teas and no artificial flavourings or powders. We've made it our goal to provide our bubble tea in the purest way we possibly can."}
          />
      </section>
    </div>
  );
}

export default App;