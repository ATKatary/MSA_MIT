import './navbar.css';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <>
      <nav>
        <div className="navCont align-center">
            <div>
              <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: "#000"}}>Contact</Button>
              <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: "#000"}}>Resources</Button>
              <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: "#000"}}>Library</Button>
            </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;