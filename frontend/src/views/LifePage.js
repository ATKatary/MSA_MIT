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
import LifePageHeader from "components/Headers/LifePageHeader";
import PrayerSpaces from "./index-sections/PrayerSpaces";

function LifePage() {
  document.documentElement.classList.remove("nav-open");
  
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const images = require.context("../assets/img");
  const offCampusResources = [
    {
      name: "Al Bara Market",
      info: "",
      icon: "nc-basket",
      location: "https://www.google.com/maps/dir//al+bara+market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3774cbc96d241:0xa0900dd040979ac5?sa=X&ved=2ahUKEwiZ-66G09OBAxVzlIkEHaOXA-EQ9Rd6BAgsEAA&ved=2ahUKEwiZ-66G09OBAxVzlIkEHaOXA-EQ9Rd6BAg9EAQ"
    },

    {
      name: "Cheema Supermarket",
      info: "",
      icon: "nc-basket",
      location: "https://www.google.com/maps/dir//Cheema+Supermarket/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e379cc736a6c81:0x8504e31b803321bc?sa=X&ved=2ahUKEwjeye2H09OBAxWEkYkEHZGIDa4Q9Rd6BAgmEAA&ved=2ahUKEwjeye2H09OBAxWEkYkEHZGIDa4Q9Rd6BAg7EAM"
    },

    {
      name: "Foodland",
      info: "",
      icon: "nc-basket",
      location: "https://www.google.com/maps?s=web&sca_esv=569774734&lqi=CghGb29kbGFuZCIDiAEBSOWAjtaRuICACFoUEAAYACIIZm9vZGxhbmQqBAgCEACSAQpyZXN0YXVyYW50qgE-EAEqDCIIZm9vZGxhbmQoADIeEAEiGmGH9k00K6Hs_ddpixlTItlroKl1xbuv-iUHMgwQAiIIZm9vZGxhbmTgAQA&vet=12ahUKEwi0mv2C0dOBAxWzFlkFHQF2CPEQ1YkKegQIGxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KXFKQNhAceOJMUYZePeJ9Vin&daddr=13+Highland+Ave,+Malden,+MA+02148"
    },

    {
      name: "Garden Halal Meat",
      info: "",
      icon: "nc-basket",
      location: "https://www.google.com/maps/dir//Garden+Halal+in+Haymarket:/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3708f57c779e1:0xabdcd8c534e5830?sa=X&ved=2ahUKEwjB5rGa09OBAxWgvokEHeN5CkwQ9Rd6BAgjEAA&ved=2ahUKEwjB5rGa09OBAxWgvokEHeN5CkwQ9Rd6BAg6EAM"
    },

    {
      name: "Quality Meat Market",
      info: "",
      icon: "nc-basket",
      location: "https://www.google.com/maps/dir//Quality+Meat+Market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e37ecd015dca3d:0x63cc70ea255344a2?sa=X&ved=2ahUKEwja8qWp09OBAxXupIkEHb6wDtkQ9Rd6BAgoEAA&ved=2ahUKEwja8qWp09OBAxXupIkEHb6wDtkQ9Rd6BAg8EAM"
    },

    {
      name: "Restaurant Depot",
      info: "",
      icon: "nc-basket",
      location: "https://www.google.com/maps/dir//Restaurant+Depot,+82+Boston+St,+Everett,+MA+02149/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e371a919f5ec93:0x6c65ec58835fb760?sa=X&ved=2ahUKEwi069Oy09OBAxXQjYkEHRacDYcQ48ADegQIHxAA&ved=2ahUKEwi069Oy09OBAxXQjYkEHRacDYcQ48ADegQIJBAJ"
    },

    {
      name: "Sayar Market",
      info: "",
      icon: "nc-basket",
      location: "https://www.google.com/maps/dir//Sayar+Market+Halal+Food,+3+Everett+St+%233e,+Revere,+MA+02151/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3710baf54cdb3:0xc5dde7b2635581a2?sa=X&ved=2ahUKEwj445S709OBAxUZjYkEHVvbBusQ48ADegQIEBAA&ved=2ahUKEwj445S709OBAxUZjYkEHVvbBusQ48ADegQIGxAJ"
    }
  ]

  const lifeDescription = `
  `
  return (
    <>
      <MSANavbar invert={false}/>
      <LifePageHeader />
      <div className="main">
        <div className="section section-dark text-center" style={{backgroundColor: "#66615B", color: "#fff"}}>
          <h2 className="title" style={{marginTop: "0"}}>Prayer Spaces</h2>
          <PrayerSpaces />
        </div>
        <Container style={{marginTop: "80px"}}>
          <Row>
            <Col>
              <h2 className="title" style={{marginTop: "0"}}>On Campus Resources</h2>
              
            </Col>
            <Col>
            <h2 className="title" style={{marginTop: "0", textAlign: "end"}}>Off Campus Resources</h2>
            {offCampusResources.map(resource => {
                return (
                  <div style={{display: "flex", alignItems: "center", justifyContent: `${resource.justifyContent? resource.justifyContent : "flex-end"}`}}>
                    <div 
                      className="icon icon-info" 
                      style={{marginTop: "5px", marginRight: "10px", fontSize: "25px", color: "#616161"}}
                    >
                      <i className={`nc-icon ${resource.icon}`} />

                    </div>
                    <h4 className="title" style={{textAlign: `${resource.textAlign? resource.textAlign : "center"}`, fontWeight: "bold"}}>{resource.name}</h4>
                    {resource.location? 
                      <a 
                        href={resource.location}
                        className="icon icon-info pointer" 
                        style={{marginTop: "5px", marginLeft: "5px", fontSize: "25px"}}
                      >
                        <i className="nc-icon nc-pin-3" />
                      </a>
                      :
                      <></>
                    }
                  </div>
                )
              })}
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default LifePage;
