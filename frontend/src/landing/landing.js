import './landing.css';
import * as React from "react";
import 'react-calendar/dist/Calendar.css';
import NavBar from  "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import {Events} from "../events/events.js";
import {SlideShow} from "../gallery/gallery.js";
import {Typography} from '@mui/material';

/*** GLobal Constants ***/

function Landing() {
  const endDate = "3002-01-01";
  const startDate = "2000-01-01";
  const slideshowImages = [];
  const [events, setEvents] = React.useState([]);
  const images = require.context('../media/img', true);
  const [eventsFetched, setEventsFetched] = React.useState(false);
  

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

  const event = (title, location, description, color, link, onClick, start, end, img=undefined) => {return {'title': title, 'description': description, 'color': color, 'link': link, 'img': img, 'onClick': onClick, 'start': start, 'end': end, 'location': location}}

  if (!eventsFetched) {
    fetch(`https://www.mit-msa.com:8443/event/fetch?startDate=${startDate}&endDate=${endDate}`, {
      // mode: 'no-cors',
      method: 'GET'
    })
      .then((res) => {
        console.log(`Event fetching response: `, res)
        if (res.status === 200) {
          console.log("Events Recieved ");
          res.text().then((text) => {
            const fetchedEvenets = []
            for (const data of JSON.parse(text)["events"]) {
              const end = data['endDate'];
              const start = data['startDate'];
              console.log(`Recieved event: ${data["name"]} from ${start} - ${end}`)
              let description = <div>{data['description']}</div>;
              if (data['description'].includes("http")) {
                description = <div>
                  {data['description'].split(" ").map((word, i) => {
                    return (
                      <>{word.includes("http")? <a href={word}>{word}</a>: word}</>
                    )
                  })}
                </div>
              }
              fetchedEvenets.push(event(data['name'], 
                data['location'],
                description, 
                "", 
                "", 
                () => {},
                start, 
                end,
                images(`./events/${data["name"].toLowerCase()}/pic0.png`)));
            }
            setEvents(fetchedEvenets);
            setEventsFetched(true);
          })
        } else console.log("Events failed to load");
      })
  } 
    

  return (
    <>
      <div id="root" className="width-100 flex column align-center">
          <NavBar logo={0} color="#000"/>
          <div className="flex align-center width-100" style={{marginTop: "max(4vw, 40px)"}}>
            <div className="flex column align-center box-shadow" style={{width: "max(35vw, 350px)", borderRadius: "5px", backgroundColor: "#fff", height: "max(32vw, 320px)", marginLeft: "max(6vw, 60px)"}}>
              <img src={images("./msa-logo.png").default} style={{width: "50%", margin: "10px"}} alt=""/>
            </div>
            <div className="flex column align-center justify-around" style={{width: "40%", marginLeft: "max(10vw, 100px)", textAlign: "center", height: "max(30vw, 300px)"}}>
              <img alt="" src={images("./verses/bismAllah.png").default} style={{width: "55%"}}/>
              <Typography sx={{color: about['textColor'], fontSize: "17px", fontFamily: "'McLaren', cursive"}}>{about['body']}</Typography>
            </div>
          </div>
      </div>

      <SlideShow images={slideshowImages} id="slideshow" style={{marginTop: "40px"}}/>

      <Events events={events} />

      <Footer background={1}/>
    </>
  )
}

export default Landing;

/*** Helper Functions ***/
