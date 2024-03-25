import * as React from "react";
import "../assets/css/utils.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MediaCard from "../components/content/card";
import LifeCard from "../components/content/lifecard";
import Nav1 from "../components/nav1";
import Header from "../components/header";
import Section from "../components/section";
import { Slideshow } from "../components/gallery";
import { NAV_GC } from "../components/content/nav";
import { Notification } from "../components/support";
import { LIFE_GC } from "../components/content/life";
import { COLORS, SECTIONS, THEME } from "../constants";
import { PrayerCard, ResourceCard } from "../components/card";
import { HEADER_GC } from "../components/content/headers/life";
import { getNextPrayer, useCustomState } from "../components/utils";

import { Row } from "reactstrap";
import { Typography } from "@mui/material";

function Life() {
  const images = require.context("../assets/media", true);

  const [openNav, setOpenNav] = React.useState(false);
  const { verse, translation, buttons } = HEADER_GC({});
  const [prayerSet, setPrayerSet] = React.useState(false);
  const [nextPrayer, setNextPrayer] = React.useState(undefined);
  const { PRAYER_SPACES, RESOURCES, ...LIFE_REST } = LIFE_GC({
    images: images,
  });
  const { NAV_LEFT, NAV_RIGHT, ...NAV_GC_REST } = NAV_GC({
    setOpen: setOpenNav,
  });
  const [notification, setNotification] = useCustomState({
    value: null,
    notify: false,
  });

  if (!prayerSet) {
    const { nextPrayer, nextPrayerTime, nextPrayerHour } = getNextPrayer();
    setNextPrayer(
      `Next prayer is ${
        nextPrayer.charAt(0).toUpperCase() + nextPrayer.slice(1)
      } at ${
        nextPrayerHour > 12
          ? nextPrayerHour -
            12 +
            ":" +
            (nextPrayerTime.getMinutes() >= 10
              ? nextPrayerTime.getMinutes()
              : "0" + nextPrayerTime.getMinutes()) +
            "pm"
          : nextPrayerHour + ":" + nextPrayerTime.getMinutes() + "am"
      } (${Math.round(Math.abs(new Date() - nextPrayerTime) / 60000)} min)`
    );
    setPrayerSet(true);
  }

  return (
    <>
      <Nav1
        open={openNav}
        vertical={false}
        collapsed={false}
        itemsLeft={NAV_LEFT}
        setOpen={setOpenNav}
        itemsRight={NAV_RIGHT}
        nextPrayer={nextPrayer}
        setNextPrayer={setNextPrayer}
        style={{
          width: "100vw",
          zIndex: "111",
          position: "fixed",
          paddingTop: "20px",
          backgroundColor: COLORS.WHITE,
          justifyContent: "space-between",
          // boxShadow: "4px 4px 4px #00000022",
        }}
        openedStyle={{ height: `${THEME.NAV.HEIGHT}px` }}
        closedStyle={{
          width: "50px",
          color: COLORS.BLACK,
          right: "calc(0% + 50px)",
        }}
      />
      <div
        className="flex column width-100"
        style={{
          height: "max-content",
        }}
      >
        <Header
          verse={verse}
          buttons={buttons}
          translation={translation}
          style={{
            height: `calc(100vh - ${THEME.NAV.HEIGHT}px)`,
            marginTop: `${THEME.NAV.HEIGHT}px`,
          }}
        />

        {/*** Prayer Spaces ***/}

        <Section className="flex justify-center" contStyle={{ width: "100%" }}>
          <h1 className="text-lg">Prayer Spaces</h1>
          <Carousel showThumbs={false} showArrows={true}>
            {Array.from(
              { length: Math.ceil(PRAYER_SPACES.cards.length / 3) },
              (_, i) => i * 3
            ).map((i) => (
              <div
                key={`prayer-card-${i}`}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {PRAYER_SPACES.cards.slice(i, i + 3).map((space, j) => (
                  <MediaCard space={space} key={`prayer-card-${i + j}`} />
                ))}
              </div>
            ))}
          </Carousel>
        </Section>

        {/*** Resources ***/}
        <Section className="flex justify-center" contStyle={{ width: "100%" }}>
          <h1 className="text-lg">Off Campus Resources</h1>
          <Carousel showThumbs={false} showArrows={true}>
            {Array.from(
              { length: Math.ceil(RESOURCES.OFF_CAMPUS.cards.length / 3) },
              (_, i) => i * 3
            ).map((i) => (
              <div
                key={`life-card-${i}`}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {RESOURCES.OFF_CAMPUS.cards
                  .slice(i, i + 3)
                  .map((resource, j) => (
                    <LifeCard resource={resource} key={`life-card-${i + j}`} />
                  ))}
              </div>
            ))}
          </Carousel>
        </Section>
      </div>
      <Notification
        notification={notification}
        setNotification={setNotification}
        duration={6000}
      />
    </>
  );
}

export default Life;
