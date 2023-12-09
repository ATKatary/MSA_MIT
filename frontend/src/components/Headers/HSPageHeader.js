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

function HSPageHeader() {
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
            <img src={require("../../assets/svg/hs.svg").default} height="340"/>
            <h3 style={{color: "#66615B", marginTop: "-20px"}}>And say my Lord increase me in knowledge.</h3>
            <br />
            <Button
              onClick={() => window.location.href = "#gallery"}
              className="btn-round mr-1 dark-no-hover"
              color="danger"
              target="_blank"
              outline
            >
              <i className="fa fa-play"/>
              Notion
            </Button>
            <Button 
              onClick={() => window.location.href = "#mailingList"}
              className="btn-round dark-no-hover" 
              color="default" 
              type="button" 
              outline 
              style={{marginLeft: "15px"}}>
              Apply Now
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HSPageHeader;
