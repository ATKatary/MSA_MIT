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
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem
} from "reactstrap";

// core components

const images = require.context("../../assets/img");
const prayerSpaces = [
  {
    name: "W11 Masulla",
    description: `
    `,
    info: {
      name: "W11",
      img: "./prayer/w11.png",
      rooms: [],
      locationHref: "https://whereis.mit.edu/?go=W11"
    },
    primary: "#fff",
    secondary: "#66615B",
    theme: "light",
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "start"
  },

  {
    name: "E52 Masulla",
    description: `
    `,
    info: {
      name: "W11",
      img: "./prayer/e52.jpeg",
      rooms: ["E52-112", "E52-212"],
      locationHref: "https://whereis.mit.edu/?go=E52"
    },
    primary: "#fff",
    secondary: "#66615B",
    theme: "light",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    textAlign: "end"
  },

  {
    name: "E51 Masulla",
    description: `
    `,
    info: {
      name: "E51",
      img: "./prayer/e51.jpeg",
      rooms: ["E51-050"],
      locationHref: "https://whereis.mit.edu/?go=E51"
    },
    primary: "#fff",
    secondary: "#66615B",
    theme: "light",
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "start"
  },

  {
    name: "E50 Masulla",
    description: `
    `,
    info: {
      name: "E50",
      img: "./prayer/e51.jpeg",
      rooms: ["E50-305"],
      locationHref: "https://whereis.mit.edu/?go=E50"
    },
    primary: "#fff",
    secondary: "#66615B",
    theme: "light",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    textAlign: "end"
  },
]

function PrayerSpaces() {
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
    const nextIndex = activeIndex === prayerSpaces.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? prayerSpaces.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <Col className="ml-auto mr-auto">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >

    {prayerSpaces.map(p => 
        {return (
            <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            // key={p.example.img}
            >
                <div style={{marginTop: "40px"}}>
                    <Container>
                    <Row style={{flexDirection: p.flexDirection}}>
                      <Col className="ml-auto mr-auto">
                        <div style={{display: "flex", alignItems: "center", justifyContent: `${p.justifyContent}`}}>
                          <h3 className="title" style={{textAlign: p.textAlign, fontWeight: "bold"}}>{p.name}</h3>
                          <a 
                            href={p.info.locationHref}
                            className="icon icon-info pointer" 
                            style={{marginTop: "10px", marginLeft: "10px", fontSize: "20px"}}
                          >
                            <i className="nc-icon nc-pin-3" />
                          </a>
                        </div>

                        <h5 className="description" style={{textAlign: p.textAlign}}>
                            {p.description}
                            <div style={{display: "flex", justifyContent: p.justifyContent}}>
                              {p.info.rooms.map(room => <p style={{margin: "5px", fontWeight: "bold"}}>{room}</p>)}
                            </div>
                        </h5>
                        </Col>

                        <Col md="5">
                        <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={images(p.info.img)}
                            style={{height: "333px"}}
                        />
                        </Col>
                    </Row>
                    </Container>
                </div>
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
          style={{background: "none", opacity: "100%", zIndex: "10", color: "#fff"}}
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
          style={{background: "none", opacity: "100%", zIndex: "10", color: "#fff"}}
        >
          <span className="fa fa-angle-right" style={{fontSize: "44px", marginLeft: "42px"}}/>
          <span className="sr-only">Next</span>
        </a>
      </Carousel>{""}
    </Col>
  );
}

export default PrayerSpaces;
