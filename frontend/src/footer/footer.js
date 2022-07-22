import * as React from 'react';
import './footer.css';
import Button from '@mui/material/Button';
import {Typography, TextField, TextareaAutosize, Snackbar, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Footer(props) {
  const [notifyStatus, setNotifyStatus] = React.useState(false);
  const [mailStatus, setMailStatus] = React.useState("");
  const handleClose = () => {setNotifyStatus(false)};

  return (
    <footer className={`background-${props.background}`}>
      <div></div>
      <div className="flex column align-center margin-10px contact-us">
      <Typography variant="h3" sx={{fontSize: "36px", fontFamily: "'McLaren', cursive"}} id="mailBox">Contact Us</Typography>
        <div className="flex column" style={{width: "65%"}}>
          <TextField required id="name" label="Name" variant="standard" className="width-50 height-1 border-white" style={{width: "45%", fontFamily: "'McLaren', cursive"}}></TextField>
          <TextField required id="email" label="Email" variant="standard" className="width-50" style={{width: "45%", fontFamily: "'McLaren', cursive"}}></TextField>
          <TextField required id="subject" label="Subject" variant="standard" style={{width: "45%", fontFamily: "'McLaren', cursive"}}></TextField>
        </div>
        <TextareaAutosize id="message" aria-label="minimum height" minRows={20} placeholder="Write your message here ..." className="margin-10px box-shadow no-border padding-10px no-outline" style={{width: "65%", height: "200px", fontFamily: "'McLaren', cursive"}}></TextareaAutosize>
        <Button variant="contained" className="width-100px text-black white"
        onClick={() => {
          const name = document.getElementById("name");
          const email = document.getElementById("email");
          const subject = document.getElementById("subject");
          const message = document.getElementById("message");

          fetch(`https://www.mit-msa.com:8443/mail/contact?name=${name.value}&email=${email.value}&subject=${subject.value}&message=${message.value.replace(/\n/g, '\\n')}`, {
            mode: 'no-cors',
            method: 'GET'
          })
            .then((res) => {
              if (res.status === 200) {
                setMailStatus("Message sent!");
              } else {
                setMailStatus("Message failed to deliver");
              }
              setNotifyStatus(true);
            })
        }}
        >Send</Button>
        <Typography variant="h5" sx={{fontSize: "11px", fontFamily: "'McLaren', cursive"}} className="margin-top-10px">MIT MSA</Typography>
        <Typography variant="h5" sx={{fontSize: "11px", fontFamily: "'McLaren', cursive"}}>2022 © All Rights Reserved</Typography>
        <Typography variant="h5" sx={{fontSize: "11px", fontFamily: "'McLaren', cursive"}}>A Katary Production</Typography>
        <Snackbar open={notifyStatus} autoHideDuration={6000} onClose={handleClose} message={mailStatus} 
        action={<React.Fragment>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>}/>
      </div>
    </footer>
  )
}

export default Footer;