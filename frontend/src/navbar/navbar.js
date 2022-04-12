import './navbar.css';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <nav>
      <div className="navCont align-center">
          <div className="flex">
            <Button id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: "#000"}}>Contact</Button>
            <Button id="resources" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: "#000"}}>Resources</Button>
            <Button id="library" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: "#000"}}>Library</Button>
          </div>
          <Button className="circle square-75px alchemist home-icon" onClick={() => {window.location = "/"}}></Button>
      </div>
    </nav>
  )
}

export default NavBar;