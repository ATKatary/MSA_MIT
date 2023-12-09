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
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import { prayTimes } from "assets/js/PrayerTime";

// reactstrap components
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Collapse,
  Container,
  NavbarBrand,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Alert
} from "reactstrap";

function MSANavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [linkColor, setLinkColor] = React.useState(props.invert ? "#FFF" : "#66615B")
  const [logo, setLogo] = React.useState(props.invert ? "logo.svg" : "logo_dark.svg");
  const [nextPrayer, setNextPrayer] = React.useState(undefined);
  
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
        setLinkColor("#66615B")
        setLogo("logo_dark.svg");
        console.log(props.invert)
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-transparent");
        setLinkColor(props.invert ? "#FFF" : "#66615B")
        setLogo(props.invert ? "logo.svg" : "logo_dark.svg");
        console.log(props.invert)
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const navItems = [
    {
      title: "",
      text: "Donate",
      rel: "",
      href: "https://giving.mit.edu/form/#/",
      icon: ""
    },

    {
      title: "",
      text: "Life",
      rel: "noopener",
      dataPlacement: "",
      href: "/life",
      icon: ""
    },

    {
      title: "",
      text: "Mailing List",
      rel: "noopener",
      dataPlacement: "",
      href: "/#mailingList",
      icon: ""
    },

    {
      title: "",
      isDropDown: true,
      text: "Programs",
      elms: [
        {
          title: "",
          text: "HS Summer Program",
          rel: "noopener",
          dataPlacement: "",
          href: "/hs",
          icon: ""
        }
      ]
    },

    {
      rel: "",
      href: "https://www.facebook.com/mitmsa",
      text: "",
      name: "Facebook",
      dataPlacement: "bottom",
      title: "Like us on Facebook",
      icon: "fa fa-facebook-square",
    },

    {
      rel: "",
      href: "https://www.instagram.com/mitmsa/",
      text: "",
      name: "Instagram",
      icon: "fa fa-instagram",
      dataPlacement: "bottom",
      title: "Like us on Instagram",
    }
  ]

  function getTimeZoneOffset(date, timeZone) {

    // Abuse the Intl API to get a local ISO 8601 string for a given time zone.
    let iso = date.toLocaleString('en-CA', { timeZone, hour12: false }).replace(', ', 'T');
    
    // Include the milliseconds from the original timestamp
    iso += '.' + date.getMilliseconds().toString().padStart(3, '0');
    
    // Lie to the Date object constructor that it's a UTC time.
    const lie = new Date(iso + 'Z');
  
    // Return the difference in timestamps, as minutes
    // Positive values are West of GMT, opposite of ISO 8601
    // this matches the output of `Date.getTimeZoneOffset`
    return -(lie - date) / 60 / 1000;
  }

  const prayers = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
  const today = new Date();

  navigator.geolocation.getCurrentPosition(function(position) {
    prayTimes.setMethod('ISNA'); 
    let times = prayTimes.getTimes(today, [position.coords.latitude, position.coords.longitude]) 
    
    let nextPrayer = undefined;
    let nextPrayerTime = undefined;
    
    let todayDateTime = today.toISOString();
    let todayDate = todayDateTime.split('T')[0];

    for (const prayer of prayers) {
      const prayerTime = new Date(todayDate + 'T' + times[prayer]);
      const diff = prayerTime - today;
      if (diff < 0) continue;

      if (nextPrayer === undefined) {
        nextPrayerTime = prayerTime;
        nextPrayer = prayer;
      }
      else if (diff < (nextPrayerTime - today)) {
        nextPrayerTime = prayerTime;
        nextPrayer = prayer;
      }
    }

    let nextPrayerHour = nextPrayerTime.getHours();
    setNextPrayer(`Next prayer is ${nextPrayer.charAt(0).toUpperCase() + nextPrayer.slice(1)} at ${nextPrayerHour > 12 ? (nextPrayerHour - 12) + ":" + (nextPrayerTime.getMinutes() >= 10 ? nextPrayerTime.getMinutes() : "0" + nextPrayerTime.getMinutes()) + "pm" : nextPrayerHour + ":" + nextPrayerTime.getMinutes() + "am"} (${Math.round(Math.abs(today - nextPrayerTime) / 60000)} min left)`);
  })

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container style={{display: "flex", flexDirection: "column", width: "100%"}}>
        <div style={{display: "flex", width: "100%"}}>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              tag={Link}
            >
              <div
                style={{
                  width: "120px",
                  height: "60px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: "url(" + require(`assets/svg/${logo}`) + ")",
                }}
                data-parallax={true}
              ></div>
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
              {navItems.map(item => {
                return (
                  <NavItem>
                    {!item.isDropDown ? 
                    <NavLink
                      rel={item.rel}
                      href={item.href}
                      title={item.title}
                      style={{color: linkColor}}
                      data-placement={item.dataPlacement}
                    >
                      <i className={`${item.icon}`} /> {item.text}
                      {item.name ? <p className="d-lg-none">{item.name}</p> : ""}
                    </NavLink>
                    :
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle
                          aria-expanded={false}
                          aria-haspopup={true}
                          caret
                          color="default"
                          data-toggle="dropdown"
                          id="dropdownMenuButton"
                          nav
                          onClick={(e) => e.preventDefault()}
                          role="button"
                          style={{color: "rgb(102, 97, 91)"}}
                        >
                          <i className={`${item.icon}`} /> {item.text}
                          {item.name ? <p className="d-lg-none">{item.name}</p> : ""}
                        </DropdownToggle>
                        <DropdownMenu
                          aria-labelledby="dropdownMenuButton"
                          className="dropdown-info"
                          style={{padding: "0px"}}
                        >
                          {item.elms.map(elm => 
                            <DropdownItem style={{padding: "5px"}}>
                              <NavLink
                                rel={elm.rel}
                                href={elm.href}
                                title={elm.title}
                                style={{color: linkColor, padding: "5px", margin: "0"}}
                                data-placement={elm.dataPlacement}
                              >
                                <i className={`${elm.icon}`} style={{margin: "0"}}/> {elm.text}
                                {elm.name ? <p className="d-lg-none">{elm.name}</p> : ""}
                              </NavLink>
                            </DropdownItem>
                          )}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    }
                  </NavItem>
                )
              })}
            </Nav>
          </Collapse>
        </div>
        <Alert color="info" style={{top: "0", position: "relative", borderRadius: "0px", marginBottom: "0"}}>
          <Container style={{fontWeight: "bold"}}>
            <span>{nextPrayer}</span>
          </Container>
        </Alert>
      </Container>
    </Navbar>
  );
}

export default MSANavbar;
