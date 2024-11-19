import * as React from "react";
import "../../assets/css/utils.css";
import {
  Typography,
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";

import Nav1 from "../../components/nav1";
import { NAV_GC } from "../../components/content/nav";
import { COLORS, SECTIONS, THEME } from "../../constants";
import { CAREER_GC } from "../../components/content/career-page/career";
import { getNextPrayer, useCustomState } from "../../components/utils";

function JobPostings() {
  const images = require.context("../../assets/media", true);

  const [openNav, setOpenNav] = React.useState(false);
  const [prayerSet, setPrayerSet] = React.useState(false);
  const [nextPrayer, setNextPrayer] = React.useState(undefined);
  const { NAV_LEFT, NAV_RIGHT, ...NAV_GC_REST } = NAV_GC({
    setOpen: setOpenNav,
  });
  const [notification, setNotification] = useCustomState({
    value: null,
    notify: false,
  });

  if (!prayerSet) {
    const { nextPrayer, nextPrayerTime, nextPrayerHour } = getNextPrayer();
    const timeDifference = Math.abs(new Date() - nextPrayerTime); // Difference in milliseconds
    const hours = Math.floor(timeDifference / 3600000); // Convert milliseconds to hours
    const minutes = Math.round((timeDifference % 3600000) / 60000); // Convert remaining milliseconds to minutes

    // Format the next prayer time
    const nextPrayerFormattedTime = `${
      nextPrayerHour > 12
        ? nextPrayerHour -
          12 +
          ":" +
          (nextPrayerTime.getMinutes() >= 10
            ? nextPrayerTime.getMinutes()
            : "0" + nextPrayerTime.getMinutes()) +
          "pm"
        : nextPrayerHour +
          ":" +
          (nextPrayerTime.getMinutes() >= 10
            ? nextPrayerTime.getMinutes()
            : "0" + nextPrayerTime.getMinutes()) +
          "am"
    }`;

    // Format the time difference message to include both hours and minutes
    const timeDifferenceMessage = `${
      hours > 0 ? hours + " hour" + (hours > 1 ? "s" : "") + " and " : ""
    }${minutes} min`;

    // Set the next prayer message with the updated time difference format
    setNextPrayer(
      `Next prayer is ${
        nextPrayer.charAt(0).toUpperCase() + nextPrayer.slice(1)
      } at ${nextPrayerFormattedTime} (${timeDifferenceMessage})`
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
      <div className="flex column width-100" style={{ height: "max-content" }}>
        {localStorage.getItem("memberAuthenticated") === "true" ? (
          <div style={{ paddingTop: THEME.NAV.HEIGHT }}>
            <CAREER_GC.JOB_POSTS.component />
          </div>
        ) : (
          <div
            style={{
              paddingTop: THEME.NAV.HEIGHT,
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Container maxWidth="sm">
              <Alert severity="warning">Please Sign In to View This Page</Alert>
            </Container>
          </div>
        )}
      </div>
    </>
  );
}

export default JobPostings;
