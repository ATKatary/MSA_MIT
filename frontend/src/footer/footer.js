import './footer.css';
import Button from '@mui/material/Button';
import {Typography, TextField, TextareaAutosize} from '@mui/material';

function Footer() {
  return (
    <footer>
      <div></div>
      <div className="flex column align-center width-50 margin-10px align-self-end">
      <Typography variant="h3" className="font-7vw">Contact Us</Typography>
        <div className="flex width-100 align-center justify-around">
          <TextField required label="Name" variant="filled" className="margin-10px white"></TextField>
          <TextField required label="Kerb" variant="filled" className="margin-10px white"></TextField>
        </div>
        <TextareaAutosize aria-label="minimum height" minRows={20} placeholder="Write your message here ..." className="width-90 margin-10px box-shadow no-border padding-10px no-outline"></TextareaAutosize>
        <Button variant="contained" className="width-100px text-black white">Send</Button>
        <Typography variant="h5" className="font-1vw margin-top-10px">2022 © All Rights Reserved</Typography>
      </div>
    </footer>
  )
}

export default Footer;