import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Snackbar,
  Typography,
} from "@mui/material";

import "../assets/css/utils.css";

import Nav1 from "../components/nav1";
import { NAV_GC } from "../components/content/nav";
import { COLORS, THEME } from "../constants";
import { getNextPrayer } from "../components/utils";

const getNextSevenDays = () => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const dateString = date.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'
    dates.push(dateString);
  }
  return dates;
};

const Contact = () => {
  const [days, setDays] = useState(getNextSevenDays());
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [userEmail, setUserEmail] = useState(""); // If want to use email
  const [guestName, setGuestName] = useState(""); // If want to use guest Name
  const [mitID, setMitID] = useState(""); // If want to use ID
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [openNav, setOpenNav] = React.useState(false);
  const [prayerSet, setPrayerSet] = React.useState(false);
  const [nextPrayer, setNextPrayer] = React.useState(undefined);
  const { NAV_LEFT, NAV_RIGHT } = NAV_GC({ setOpen: setOpenNav });

  if (!prayerSet) {
    const { nextPrayer, nextPrayerTime, nextPrayerHour } = getNextPrayer();
    const timeDifference = Math.abs(new Date() - nextPrayerTime); // Difference in milliseconds
    const hours = Math.floor(timeDifference / 3600000); // milliseconds to hours
    const minutes = Math.round((timeDifference % 3600000) / 60000); // milliseconds to minutes

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
      <div
        className="flex column width-100 justify-content-center align-items-center"
        style={{
          height: "max-content",
          marginTop: "200px",
        }}
      >
        <Typography variant="h4" style={{ margin: "20px" }}>
          Sign up for communication channels
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "20px" }}
          onClick={() => {
            window.open("https://m.me/j/AbbKiAvMspnlpwK7/", "_blank");
          }}
        >
          Messenger
        </Button>
      </div>
    </>
  );
};

export default Contact;
// '
