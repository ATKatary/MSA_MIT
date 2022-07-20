import './events.css';
import * as React from "react";
import {Image} from "../gallery/gallery.js";
import {Typography} from '@mui/material';

/*** GLobal Constants ***/

function Events(props) {
    const events = props.events;
    const [date, setDate] = React.useState(new Date());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className="flex column align-center width-100%" style={{marginBottom: "20px"}}>
            <Typography style={{fontSize: "36px", fontFamily: "'McLaren', cursive", color: "#000"}}>Events</Typography>
            <div id="events" className="box-shadow flex column">
                <Typography style={{fontSize: "28px", fontFamily: "'McLaren', cursive", margin: "20px"}}>All Year</Typography>
                <div className="flex align-center align-self-center wrap justify-center" style={{width: "90%", margin: "10px"}}>
                    {events.map((event, i) => <Image key={i} onClick={event['onClick']} image={event['img']} angle={`${Math.round(10 * Math.random() - 5)}deg`} height="13vw"/>)}
                </div>
                <Typography style={{fontSize: "28px", fontFamily: "'McLaren', cursive", margin: "20px"}}>{months[date.getMonth()]}</Typography>
                <Typography style={{fontSize: "28px", fontFamily: "'McLaren', cursive", margin: "20px"}}>{months[(date.getMonth() + 1) % 12]}</Typography>
            </div>
        </div>
  )
}

export default Events;