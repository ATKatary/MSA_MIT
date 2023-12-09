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
import Contact from "components/Forms/Contact";
import Footer from "components/Footers/Footer.js";
import MSANavbar from "components/Navbars/MSANavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import Gallery from "./index-sections/Gallery";
import Team from "./index-sections/Team";

function LandingPage() {
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
      desc: "We build community",
      icon: "nc-istanbul",
      name: "Community",
      href: "",
    },

    {
      desc: "We have academia.",
      icon: "nc-hat-3",
      name: "Academia",
      href: "",
    },

    {
      desc: "We do service.",
      icon: "nc-basket",
      name: "Service",
      href: "",
    },
  ]

  const team = [
    {
      name: "Nada Miqdadi El-Alami",
      position: "MSA Advisor and Chaplain",
      img: "./ec/2022/nada.jpg",
      href: "/nada",
      media: [
        {href: "", icon: "fa-twitter"},
        {href: "", icon: "fa-linkedin"} 
      ]
    },
  ]

  return (
    <>
      <MSANavbar invert={false}/>
      <LandingPageHeader />
      <div className="main">
        <div className="section section-dark text-center" style={{backgroundColor: "#66615B"}}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title" style={{marginTop: "0"}}>Mission</h2>
                <h5 className="description" style={{color: "#fff"}}>
                Representing hundreds of Muslims, MIT Muslim Student Association is a close-knit and friendly community assisting the 
                diverse Muslims at MIT with their practice of Islam. 
                We offer social, spiritual, and academic programs and aim at building a strong community for all Muslims on campus.
                </h5>
                <br />
                <Button
                  color="info"
                  href="#pablo"
                  className="btn-round"
                  onClick={(e) => e.preventDefault()}
                >
                  Learn more
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              {specs.map(spec => {
                return (
                  <Col md="4">
                    <div className="info">
                      <div className="icon icon-info">
                        <i className={`nc-icon ${spec.icon}`} />
                      </div>
                      <div className="description" style={{color: "#fff"}}>
                        <h4 className="info-title" style={{fontWeight: "500", marginBottom: "5px"}}>
                          {spec.name}
                        </h4>
                        <p>{spec.desc}</p>
                        <Button className="btn-link" color="info" href={`${spec.href}`}>
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
        <div className="section text-center" id="gallery">
          <h2 className="title" style={{marginTop: "0"}}>Gallery</h2>
          <Gallery />
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title" style={{marginTop: "0"}}>Team</h2>
            <Row>
              {team.map(person => {
                return (
                  <Col md="6">
                    <Card className="card-profile card-plain">
                      {/** Image **/}
                      <div className="card-avatar">
                        <a href={`${person.href}`}>
                          <img src={images(person.img)} alt="..."/>
                        </a>
                      </div>

                      {/** Name + Position **/}
                      <CardBody>
                        <a href={`${person.href}`}>
                          <div className="author">
                            <CardTitle tag="h4">{person.name}</CardTitle>
                            <h6 className="card-category">{person.position}</h6>
                          </div>
                        </a>
                      </CardBody>

                      {/** Media **/}
                      <CardFooter className="text-center">
                        {person.media.map(media => {
                          return (
                            <Button 
                              color="link"
                              href={media.href}
                              className="btn-just-icon btn-neutral"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className={`fa ${media.icon}`} />
                            </Button>
                          )
                        })}
                      </CardFooter>
                    </Card>
                  </Col>
                )
              })}
              <Team />
            </Row>
          </Container>
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
