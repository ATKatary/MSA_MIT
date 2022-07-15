import './landing.css';
import * as React from "react";
import 'react-calendar/dist/Calendar.css';
import NavBar from  "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import {SlideShow, Rotate, Image} from "../gallery/gallery.js";
import {TextImage, PrayerModal} from "../block/block.js";
import {Typography} from '@mui/material';
import Calendar from 'react-calendar';

/*** GLobal Constants ***/
const event = (title, description, color, link, img=undefined) => {return {'title': title, 'description': description, 'color': color, 'link': link, 'img': img}}

function Landing() {
  const [date, setDate] = React.useState(new Date());
  const [prayerModal, setPrayerModal] = React.useState(false);
  const openPrayerModal = (date) => {setDate(date); setPrayerModal(true);}

  const images = require.context('../media/img', true);
  const slideshowImages = [];
  const events = [event("Jummah", "Friday prayers are held every week at 1:15 pm in W11", "green", "/jummah", images(`./events/jummah/pic0.png`)),
                    event("Tajweed Class", "The MSA hold weekly tajweed classes in W11 on Thursdays at 8:30 pm", "purple", "/tajweed", images(`./events/tajweed/pic1.png`)),
                    event("Tarweeh", "Tarweeh prayers are held daily at 9:30 pm in W11", "orange", "/tarweeh", images(`./events/tarweeh/pic0.png`)),
                    event("Connect", "The MSA holds community building sessions every Friday at 5:00 pm in W11", "red", "/connect", images(`./events/connect/pic0.png`)),
                    event("Iftar", "For the duration of Ramadan the MSA holds daily iftars in Lobdell hall", "blue", "/ramadan", images(`./ramadan/2022/pic1.png`))];

  slideshowImages.push(images(`./ramadan/2022/pic0.jpg`));
  slideshowImages.push(images(`./retreat/2021/pic0.png`));
  slideshowImages.push(images(`./retreat/2021/pic1.jpg`));
  slideshowImages.push(images(`./events/tajweed/pic0.jpg`));
  slideshowImages.push(images(`./events/art/pic0.jpg`));
  
  const about = {
    "title" : "About",
    "body"  : "Representing nearly one hundred Muslims, MIT Muslim Students Association is a close-knit and friendly community assisting MIT Muslims with thier practice of Islam and endeavors to promote understanding between Muslims and people of other faiths on campus.",
    "textColor": "#fff",
    "backColor": "none"
  }
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <>
      <div id="root" className="width-100 flex column align-center">
          <NavBar logo={0} color="#000"/>
          <div className="flex align-center width-100" style={{marginTop: "4vw"}}>
            <div className="flex column align-center box-shadow" style={{width: "35vw", borderRadius: "5px", backgroundColor: "#fff", height: "32vw", marginLeft: "6vw"}}>
              <img src={images("./msa-logo.png").default} style={{width: "50%", margin: "10px"}} alt=""/>
            </div>
            <div className="flex column align-center justify-around" style={{width: "40%", marginLeft: "10vw", textAlign: "center", height: "30vw"}}>
              <img alt="" src={images("./verses/bismAllah.png").default} style={{width: "55%"}}/>
              <Typography sx={{color: about['textColor'], fontSize: "17px", fontFamily: "'McLaren', cursive"}}>{about['body']}</Typography>
            </div>
          </div>
      </div>

      <SlideShow images={slideshowImages} id="slideshow" style={{marginTop: "40px"}}/>

      <div className="flex column align-center width-100%" style={{marginBottom: "20px"}}>
        <Typography style={{fontSize: "36px", fontFamily: "'McLaren', cursive", color: "#000"}}>Events</Typography>
        <div id="events" className="box-shadow flex column">
        <Typography style={{fontSize: "28px", fontFamily: "'McLaren', cursive", margin: "20px"}}>All Year</Typography>
          <div className="flex align-center align-self-center" style={{width: "90%", margin: "10px"}}>
            <Image image={images(`./events/connect/pic0.png`)} angle="-3deg" height="13vw"/>
            <Image image={images(`./events/jummah/pic0.png`)} angle="0deg" height="13vw"/>
          </div>
          <Typography style={{fontSize: "28px", fontFamily: "'McLaren', cursive", margin: "20px"}}>{months[date.getMonth()]}</Typography>
          <Typography style={{fontSize: "28px", fontFamily: "'McLaren', cursive", margin: "20px"}}>{months[(date.getMonth() + 1) % 12]}</Typography>
        </div>
      </div>

      <Footer background={1}/>
    </>
  )
}

export default Landing;