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
import {
  Col,
  Row,
  Card,
  Button,
  CardBody,
  CardTitle,
  Container,
  CardFooter,
} from "reactstrap";

// core components
import Footer from "components/Footers/Footer.js";
import MSANavbar from "components/Navbars/MSANavbar.js";
import HSProjects from "./index-sections/HSProjects";
import HSPageHeader from "components/Headers/HSPageHeader.js";

function HSPage() {
  document.documentElement.classList.remove("nav-open");
  
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const images = require.context("../assets/img");

  const specs = [
    {
      desc: "We build web development",
      icon: "nc-html5",
      name: "Web Development",
      href: "",
    },

    {
      desc: "We have python.",
      icon: "nc-align-left-2",
      name: "Python",
      href: "",
    },

    {
      desc: "We do discrete math.",
      icon: "nc-chart-bar-32",
      name: "Discrete Math",
      href: "",
    },
  ]

  const hsDescription = `
  📚 We strive to kindle a love for STEM in our community's youth through a top-notch 
  virtual high school summer program. Led by MIT's Muslim Students Association, 
  we empower students with STEM knowledge, critical thinking, 
  and hands-on experiences. Our mission fosters inclusivity, 
  nurturing future innovators and problem solvers, aiming to narrow the 
  STEM education gap, spark curiosity, and shape a brighter future.
  `
  return (
    <>
      <MSANavbar invert={false}/>
      <HSPageHeader />
      <div className="main">
        <div className="section section-dark text-center" style={{backgroundColor: "#66615B", color: "#fff"}}>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title" style={{marginTop: "0"}}>Mission</h2>
              <h5 className="description" style={{color: "#fff"}}>
                {hsDescription}
              </h5>
            </Col>
          </Row>
        </div>
          
        <HSProjects />
      </div>
      <Footer />
    </>
  );
}

export default HSPage;
