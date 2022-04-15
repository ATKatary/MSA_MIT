import './navbar.css';
import {Button} from '@mui/material';
import {IconButton} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function NavBar(props) {
  const switchMode = () => {if (props.mode['theme'] === "dark") props.setMode(props.lightMode); else props.setMode(props.darkMode)};
  return (
    <nav>
      <div className="navCont align-center">
          <div className="flex">
            <Button id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: props.color}} href="#mailBox">Contact</Button>
            <Button id="resources" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: props.color}}>Resources</Button>
            <Button id="library" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: props.color}}>Library</Button>
            {props.mode === undefined ? <></> : <IconButton sx={{ml: 1, color: `${props.mode['navColor']}`}} onClick={switchMode}>
              {props.mode['theme'] === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>}
          </div>
          <Button className={`circle square-75px home-icon-${props.logo}`} onClick={() => {window.location = "/"}}></Button>
      </div>
    </nav>
  )
}

export default NavBar;