import * as React from 'react';
import './footer.css';
import Button from '@mui/material/Button';
import {Typography, TextField, TextareaAutosize, Snackbar, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Footer() {
  const [notifyStatus, setNotifyStatus] = React.useState(false);
  const [mailStatus, setMailStatus] = React.useState("");
  const handleClose = () => {setNotifyStatus(false)}

  return (
    <footer>
      <div></div>
      <div className="flex column align-center width-50 margin-10px align-self-end">
      <Typography variant="h3" className="font-7vw" id="mailBox">Contact Us</Typography>
        <div className="flex width-90 column align-self-start margin-left-10px">
          <TextField required id="name" label="Name" variant="standard" className="width-50 height-1 border-white" inputProps={{className: "text-black"}}></TextField>
          <TextField required id="email" label="Email" variant="standard" className="width-50" inputProps={{className: "text-black"}}></TextField>
          <TextField required id="subject" label="Subject" variant="standard" inputProps={{className: "text-black"}}></TextField>
        </div>
        <TextareaAutosize id="message" aria-label="minimum height" minRows={20} placeholder="Write your message here ..." className="width-90 margin-10px box-shadow no-border padding-10px no-outline"></TextareaAutosize>
        <Button variant="contained" className="width-100px text-black white"
        onClick={() => {
          const name = document.getElementById("name");
          const email = document.getElementById("email");
          const subject = document.getElementById("subject");
          const message = document.getElementById("message");

          fetch(`http://198.58.107.78/api/mail/contact?name=${name.value}&email=${email.value}&subject=${subject.value}&message=${message.value.replace(/\n/g, '\\n')}`, {
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
        <Typography variant="h5" className="font-1vw margin-top-10px">MIT MSA</Typography>
        <Typography variant="h5" className="font-1vw">2022 © All Rights Reserved</Typography>
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