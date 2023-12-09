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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/demo/demo.css?v=1.3.0";
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";

// pages
import LandingPage from "views/LandingPage.js";
import ProfilePage from "views/ProfilePage.js";
import HSPage from "views/HSPage";
import LifePage from "views/LifePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/nada"
        render={(props) => <ProfilePage {...props} 
          person="./ec/2022/nada.jpg" 
          position="MSA Advisor and Chaplain" 
          name="Nada Miqdadi El-Alami"
          bio={``}
          email="????@gmail.com"
          website=""
          pic="background2.jpg"
          description="Sister Nada Description"
        />}
      />
      <Route
        path="/hs"
        render={(props) => <HSPage {...props} />}
      />
      <Route
        path="/life"
        render={(props) => <LifePage {...props} />}
      />
      <Route
        path="/"
        render={(props) => <LandingPage {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
