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
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CardBody,
  CardTitle,
  Button, CardFooter,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const images = require.context("../../assets/img");
const classes = [
  {
    name: "Web Development",
    description: `
    Welcome to the world of web development! In this class, we'll learn the basics of HTML, CSS, and JavaScript, and how to use them to create interactive websites. 
    We will go over basic: 
    HTML (structure and content of web pages),
    CSS (styling and layout of web pages),
    JavaScript (adding functionality to web pages).
    By the end of the course, you'll have the skills to create your own websites and contribute to the growing digital landscape. Let's get started!!
    `,
    example: {
      name: "Khouloud Kamel",
      year: "MSA HS 2022",
      img: "./hs/webdev/khouloud.png",
      profileImg: "./background.jpg"
    },
    primary: "#fff",
    secondary: "#66615B",
    theme: "light",
    flexDirection: "row",
    textAlign: "start",
    justifyContent: "flex-start",
    icon: "nc-html5"
  },

  {
    name: "Introduction to Python",
    description: "Description ...",
    example: {
      name: "Shahzod Nazirov",
      year: "MSA HS 2022",
      img: "./background.jpg",
      profileImg: "./background.jpg"
    },
    primary: "#fff",
    secondary: "#66615B",
    theme: "light",
    flexDirection: "row-reverse",
    textAlign: "end",
    justifyContent: "flex-end",
    icon: "nc-align-left-2"
  },

  {
    name: "Discrete Math",
    description: "Description ...",
    example: {
      name: "Shahzod Nazirov",
      year: "MSA HS 2022",
      img: "./background.jpg",
      profileImg: "./background.jpg"
    },
    primary: "#fff",
    secondary: "#66615B",
    theme: "light",
    flexDirection: "row",
    textAlign: "start",
    justifyContent: "flex-start",
    icon: "nc-chart-bar-32"
  }
]

function HSProjects() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === classes.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? classes.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <div className={`section section-light text-center`} style={{backgroundColor: "#fff"}}>
      <h2 className="title">Classes</h2>
      <Col className="ml-auto mr-auto" style={{marginTop: "60px"}}>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >

      {classes.map(c => 
          {return (
              <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              // key={c.example.img}
              >
                  {/* <div className={`section section-${c.theme}`} style={{backgroundColor: c.primary}}> */}
                      <Container>
                      <Row style={{flexDirection: c.flexDirection}}>
                          <Col className="ml-auto mr-auto">
                          
                          <div style={{display: "flex", alignItems: "center", justifyContent: `${c.justifyContent}`}}>
                            <h3 className="title" style={{textAlign: c.textAlign, fontWeight: "bold"}}>{c.name}</h3>
                            <div 
                              className="icon icon-info" 
                              style={{marginTop: "10px", marginLeft: "10px", fontSize: "30px"}}
                            >
                              <i className={`nc-icon ${c.icon}`} />
                            </div>
                          </div>

                          <h5 className="description" style={{textAlign: c.textAlign}}>
                              {c.description}
                          </h5>
                          </Col>

                          <Col md="5">
                          <img
                              alt="..."
                              className="img-rounded img-responsive"
                              src={images(c.example.img)}
                          />
                          <div className="img-details" style={{textAlign: "start"}}>
                              <div className="author">
                              <img
                                  alt="..."
                                  className="hs-img-circle img-no-padding img-responsive"
                                  src={images(c.example.profileImg)}
                                  style={{width: "120%"}}
                              />
                              </div>
                              <p style={{color: c.secondary}}>{c.example.name}</p>
                              <p style={{color: c.secondary}}>{c.example.year}</p>
                          </div>
                          </Col>
                      </Row>
                      </Container>
                  {/* </div> */}
              </CarouselItem>
              )}
          )}
          
          <a
            className="left carousel-control carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              previous();
            }}
            role="button"
            style={{background: "none", opacity: "100%", zIndex: "10", color: "#000"}}
          >
            <span className="fa fa-angle-left" style={{fontSize: "44px", marginRight: "42px"}}/>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            role="button"
            style={{background: "none", opacity: "100%", zIndex: "10", color: "#000"}}
          >
            <span className="fa fa-angle-right" style={{fontSize: "44px", marginLeft: "42px"}}/>
            <span className="sr-only">Next</span>
          </a>
        </Carousel>{""}
      </Col>
    </div>
  );
}

export default HSProjects;
