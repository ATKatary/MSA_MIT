import './ramadan.css';
import NavBar from  "../navbar/navbar.js";
import Footer from "../footer/footer.js";

function Ramadan() {
  return (
    <>
    <div id="root" className="width-100 flex column align-center">
      <NavBar />
      <Footer />
    </div>
    </>
  )
}

export default Ramadan;