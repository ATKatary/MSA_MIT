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

const team = [
  {
    name: "Abdurahman Sherif",
    position: "President",
    img: require("assets/img/ec/2023/sherif.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  },

  {
    name: "Mohamed Samb",
    position: "Events Coordinator",
    img: require("assets/img/ec/2023/samb.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  },

  {
    name: "Abdul Kareem ",
    position: "Academic Chair",
    img: require("assets/img/ec/2023/abdulkareem_ahmed.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  }, 

  {
    name: "Ahmed Zain",
    position: "Academic Chair",
    img: require("assets/img/ec/2023/abdulkareem_ahmed.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  },

  {
    name: "Noura Attili",
    position: "External Relations Chair",
    img: require("assets/img/ec/2023/noura.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  }, 
  {
    name: "Fedaa Alsoufi",
    position: "Community Service Chair",
    img: require("assets/img/ec/2023/fedaa.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  },

  {
    name: "Rumaisa Abdulhai",
    position: "Community Service Chair",
    img: require("assets/img/ec/2023/rumisa.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  }, {
    name: "Yasmeen A Shabazz",
    position: "Social Media Chair",
    img: require("assets/img/ec/2023/yasmeen.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  },

  {
    name: "Laiba Shahid",
    position: "Publicity Chair",
    img: require("assets/img/ec/2023/laiba.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  }, 
  {
    name: "Amina Abdalla",
    position: "Social Chair",
    img: require("assets/img/ec/2023/amina.jpeg"),
    media: [
      {href: "", icon: "fa-twitter"},
      {href: "", icon: "fa-linkedin"} 
    ]
  },
]

function Team() {
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
    const nextIndex = activeIndex === team.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? team.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <Col md="6">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {team.map((person) => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={person.img}
            >
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <img src={person.img} alt="..." style={{height: "120px", width: "120px"}}/>
                </div>

                <CardBody>
                  <div className="author">
                    <CardTitle tag="h4">{person.name}</CardTitle>
                    <h6 className="card-category">{person.position}</h6>
                  </div>
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
            </CarouselItem>
          );
        })}
        <a
          className="left carousel-control carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            previous();
          }}
          role="button"
          style={{background: "none", opacity: "100%"}}
        >
          <span className="fa fa-angle-left" />
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
          style={{background: "none", opacity: "100%"}}
        >
          <span className="fa fa-angle-right" />
          <span className="sr-only">Next</span>
        </a>
      </Carousel>{""}
    </Col>
  );
}

export default Team;
