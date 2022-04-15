import * as React from "react";
import "./ramadan.css";
import NavBar from  "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import {ImageText, TextImage} from "../block/block.js";

function Ramadan() {
  const images = require.context('../media/img', true);
  const lightMode = {"theme": "light",
                     "logo": 0,
                     "textColor": "#ffffff",
                     "backColor": "#1a222f",
                     "footerBack": 1};
  const darkMode = {"theme": "dark",
                    "logo": 1,
                    "textColor": "#1a222f",
                    "backColor": "#e2c262",
                    "footerBack": 3};
  const time = (new Date()).getHours();
  const [mode, setMode] = React.useState((5 <= time && time <= 18)? lightMode : darkMode);
  const ramadan = {
    "title" : "Ramadan",
    "body"  : "The Quran was revealed in Ramadan, and as Muslims we fast the month of Ramadan as testimony of our faith and belief in Allah and the Quran."
  }
  const fast = {
    "title" : "Fasting",
    "body"  : "Fasting is the act of abstaining from food and drink from sunrise until sunset. It was carried out by all of Allah’s prophets and is one of the five pillars of Islam."
  }
  const tarweeh = {
    "title" : "Tarweeh",
    "body"  : "Tarweeh prayers occur after Isha and they are usually 8 rakas followed by 2 rakas of shfaa and 1 raka of waatir."
  }
  return (
    <div id="root" className={`width-100 flex column align-center ${(mode['theme'] === "dark")? "ramadan-back" : ""}`}>
      <NavBar logo={mode['logo']} color={mode['backColor']} mode={mode} setMode={setMode} lightMode={lightMode} darkMode={darkMode}/>
      <img src={images(`./ramadan/ramadan-karem-${mode['theme']}.png`).default} className="height-15vw" alt=""/>
      <img src={images(`./ramadan/2022/pic3-${mode['theme']}.jpeg`).default} className="height-50vw margin-30px" alt=""/>
      <ImageText title={ramadan['title']} body={ramadan['body']} textColor={mode['textColor']} backColor={mode['backColor']} imageSrc={images(`./ramadan/2022/pic2-${mode['theme']}.png`).default} id="about"/>
      <TextImage title={fast['title']} body={fast['body']} textColor={mode['textColor']} backColor={mode['backColor']} imageSrc={images(`./ramadan/2022/pic5-${mode['theme']}.png`).default} id="about"/>
      <ImageText title={tarweeh['title']} body={tarweeh['body']} textColor={mode['textColor']} backColor={mode['backColor']} imageSrc={images(`./ramadan/2022/pic4-${mode['theme']}.png`).default} id="about"/>
      <Footer background={mode['footerBack']}/>
    </div>
  )
}

export default Ramadan;