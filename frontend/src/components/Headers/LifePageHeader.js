/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Modal } from "reactstrap";

// core components

function LifePageHeader() {
  let pageHeader = React.createRef();
  // const assets = require.context("../../assets");
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter"/>
        <Container>
          <div className="motto text-center">
            {/* <h1 style={{fontWeight: "bold", color: "#000"}}>High School Summer Program</h1> */}
            <img src={require("../../assets/svg/holdToAllah.svg").default} height="340" style={{marginTop: "40px"}}/>
            <h3 style={{color: "#66615B"}}>And hold steadfast onto the rope of Allah and do not seperate.</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LifePageHeader;
