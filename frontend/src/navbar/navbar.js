import './navbar.css';
import {Button} from '@mui/material';
import {IconButton} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar(props) {
  const switchMode = () => {if (props.mode['theme'] === "dark") props.setMode(props.lightMode); else props.setMode(props.darkMode)};
  
  return (
    <nav style={{height: "5vw"}}>
      <div className="navCont align-center">
          <div className="flex hide-700px">
            <Button id="contact" className="nav-p" sx = {{fontSize : "12px", fontWeight: "900", color: props.color}} href="#mailBox">Contact</Button>
            <Button id="contact" className="nav-p" sx = {{fontSize : "12px", fontWeight: "900", color: props.color}} href="#calendar">Calendar</Button>
            <Button id="resources" className="nav-p" sx = {{fontSize : "12px", fontWeight: "900", color: props.color}}>Resources</Button>
            <Button id="library" className="nav-p" sx = {{fontSize : "12px", fontWeight: "900", color: props.color}}>Library</Button>
            <Button id="team" className="nav-p" sx = {{fontSize : "12px", fontWeight: "900", color: props.color}}>Team</Button>
            {props.mode === undefined ? <></> : <IconButton sx={{ml: 1, color: `${props.mode['navColor']}`}} onClick={switchMode}>
              {props.mode['theme'] === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>}
          </div>
          <MenuIcon sx={{color: props.color}} fontSize="large" className="nav-p show-700px"/>
          <Button className={`circle square-65px home-icon-${props.logo}`} onClick={() => {window.location = "/"}}></Button>
      </div>
    </nav>
  )
}

export default NavBar;