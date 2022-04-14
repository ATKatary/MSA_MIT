import './landing.css';
import NavBar from  "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import {SlideShow, Rotate} from "../gallery/gallery.js";
import {TextImage} from "../block/block.js";
import {Typography} from '@mui/material';
/*** GLobal Constants ***/
const event = (title, description, color, link, img=undefined) => {return {'title': title, 'description': description, 'color': color, 'link': link, 'img': img}}

function Landing() {
  const images = require.context('../media/img', true);
  const slideshowImages = [];

  const events = [event("Event 1", "description", "green", "/"),
                    event("Event 2", "description", "purple", "/"),
                    event("Event 3", "description", "orange", "/"),
                    event("Event 4", "description", "red", "/"),
                    event("Iftar", "For the duration of Ramadan the MSA holds daily iftars in Lobdell hall", "blue", "/ramadan")];

  slideshowImages.push(images(`./ramadan/2022/pic0.jpg`));
  slideshowImages.push(images(`./retreat/2021/pic0.png`));
  slideshowImages.push(images(`./events/tajweed/pic0.jpg`));
  slideshowImages.push(images(`./events/art/pic0.jpg`));
  
  const about = {
    "title" : "About",
    "body"  : "Representing nearly one hundred Muslims, MIT Muslim Students Association is a close-knit and friendly community assisting MIT Muslims with thier practice of Islam and endeavors to promote understanding between Muslims and people of other faiths on campus."
  }
  return (
    <>
    <div id="root" className="width-100 flex column align-center">
        <NavBar />
        <img src={images("./verses/bismAllah.png").default} className="height-15vw" alt=""/>
        <SlideShow images={slideshowImages} id="msa"/>
        <img src={images("./msa-logo.png").default} className="height-15vw" alt=""/>
        <TextImage title={about['title']} body={about['body']} imageSrc={images("./mit-logo.png").default} id="about"/>
        <Typography variant="h1" className="text-black font-6vw margin-10px">Events</Typography>
        <Rotate images={events} id="events"/>
        <Footer/>
    </div>
    </>
  )
}

export default Landing;