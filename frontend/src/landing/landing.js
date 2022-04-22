import './landing.css';
import * as React from "react";
import 'react-calendar/dist/Calendar.css';
import NavBar from  "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import {SlideShow, Rotate} from "../gallery/gallery.js";
import {TextImage} from "../block/block.js";
import {Typography} from '@mui/material';
import Calendar from 'react-calendar';

/*** GLobal Constants ***/
const event = (title, description, color, link, img=undefined) => {return {'title': title, 'description': description, 'color': color, 'link': link, 'img': img}}

function Landing() {
  const [date, setDate] = React.useState(new Date());
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
    "textColor": "#000",
    "backColor": "#E5E3DB"
  }
  return (
    <>
    <div id="root" className="width-100 flex column align-center">
        <NavBar logo={0} color="#000"/>
        <img src={images("./verses/bismAllah.png").default} className="height-15vw" alt=""/>
        <SlideShow images={slideshowImages} id="msa"/>
        <img src={images("./msa-logo.png").default} className="height-15vw" alt=""/>
        <TextImage title={about['title']} body={about['body']} textColor={about['textColor']} backColor={about['backColor']} imageSrc={images("./mit-logo.png").default} id="about" additionalClasses="padding-30px margin-30px"/>
        <Typography variant="h1" className="text-black font-6vw margin-10px">Events</Typography>
        <Rotate images={events} id="events"/>
        <Typography id="calendar" variant="h1" className="text-black font-6vw margin-10px">Calender</Typography>
        <Calendar onChange={setDate} value={date} className="text-black margin-30px width-80 no-border box-shadow font-1-5vw padding-10px"/>
        <Footer background={1}/>
    </div>
    </>
  )
}

export default Landing;