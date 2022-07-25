import './events.css';
import * as React from "react";
import {Image} from "../gallery/gallery.js";
import {Modal, Typography, Box} from '@mui/material';

/*** GLobal Constants ***/
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: "#000"
};

export function Events(props) {
    const events = props.events;
    const [date, setDate] = React.useState(new Date());
    const allClosed = Array(events.length).fill(false)
    const [open, setOpen] = React.useState(allClosed);

    return (
        <div className="flex column align-center width-100%" style={{marginBottom: "20px"}}>
            <Typography style={{fontSize: "36px", fontFamily: "'McLaren', cursive", color: "#000"}}>Events</Typography>
            <div id="events" className="box-shadow flex column">
                <Typography style={{fontSize: "28px", fontFamily: "'McLaren', cursive", margin: "20px"}}>All Year</Typography>
                <div className="flex align-center align-self-center wrap justify-center" style={{width: "90%", margin: "10px"}}>
                    {events.map((event, i) => {
                        return (
                            <>
                                <Image key={i} 
                                onClick={() => {
                                    setOpen(allClosed);
                                    const copiedOpen = Array(events.length).fill(false)
                                    copiedOpen[i] = true;
                                    setOpen(copiedOpen);
                                }} image={event['img']} angle={`${Math.round(10 * Math.random() - 5)}deg`} height="max(13vw, 130px)"/>
                                <Modal open={open[i]} onClose={() => setOpen(allClosed)}>
                                    <Box sx={modalStyle}>
                                        <p style={{fontSize: "24px"}}><b>{event['title']}</b></p>
                                        {event['start']? <p>Time: {event['start'].slice(0, 10)} {event['start'].slice(12, 19)}</p> : <></>} {event['end']? <p> - {event['end'].slice(0, 10)} {event['end'].slice(12, 19)}</p> : <></>}
                                        <p>Location: {event['location']}</p>
                                        <br></br>
                                        <p>Details:</p>
                                        <div style={{fontSize: "14px", overflowWrap: "anywhere"}} className="flex">{event['description']}</div>
                                    </Box>
                                </Modal>
                            </>
                        )
                    })}
                </div>
                <Typography style={{fontSize: "28px", fontFamily: "'McLaren', cursive", margin: "20px"}}>{months[date.getMonth()]}</Typography>
                <Typography style={{fontSize: "28px", fontFamily: "'McLaren', cursive", margin: "20px"}}>{months[(date.getMonth() + 1) % 12]}</Typography>
            </div>
        </div>
  )
}