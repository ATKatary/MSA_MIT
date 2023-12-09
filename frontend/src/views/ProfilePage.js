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
  Button,
  Container
} from "reactstrap";

// core components
import Footer from "components/Footers/Footer.js";
import MSANavbar from "components/Navbars/MSANavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

function ProfilePage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  const images = require.context("../assets/img");
  return (
    <>
      <MSANavbar invert={true}/>
      <ProfilePageHeader pic={props.pic}/>
      <div className="section profile-content">
        <Container>
          {/** Image **/}
          <div className="owner">
            <div
            className="avatar img-circle img-no-padding img-responsive"
                style={{
                  width: "180px",
                  height: "180px",
                  background: `url(${images(props.person)})`,
                  backgroundSize: "cover",
                }} 
                alt="..."
                >
            </div>

            <div className="name">
              <h4 className="title">
                {props.name} <br />
              </h4>
              <h6 className="description">{props.position}</h6>
              <p>{props.description}</p>
            </div>
          </div>

          <Row>
            <Col className="ml-auto text-center" md="2">
              <p>
                {props.bio}
              </p>
              <br />
              <Button className="btn-round" color="default" outline onClick={() => window.location = `mailto:${props.email}`}>
                <i className="nc-icon nc-email-85" /> Contact
              </Button>
            </Col>

            <Col className="mr-auto text-center" md="2">
              <p>
                {props.bio}
              </p>
              <br />
              <Button className="btn-round" color="default" outline onClick={() => window.location = `${props.website}`}>
                <i className="nc-icon nc-alert-circle-i" /> Website
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
