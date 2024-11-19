import * as React from "react";
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
import "../assets/css/utils.css";

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

function SignIn() {
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
  const [password, setPassword] = React.useState("");
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    return localStorage.getItem("memberAuthenticated") === "true";
  });
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);
  const [showErrorAlert, setShowErrorAlert] = React.useState(false);

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

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === process.env.REACT_APP_TEAM_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("memberAuthenticated", "true");
      setPassword("");
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccessAlert(false), 3000);
    } else {
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
      setPassword("");
      // Hide error message after 3 seconds
      setTimeout(() => setShowErrorAlert(false), 3000);
    }
  };

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

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper elevation={3} sx={{ p: 4, mt: 20 }}>
            {showSuccessAlert && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Successfully signed in!
              </Alert>
            )}
            {showErrorAlert && (
              <Alert severity="error" sx={{ mb: 2 }}>
                Incorrect password. Please try again.
              </Alert>
            )}
            <Typography component="h1" variant="h5" align="center" gutterBottom>
              Sign In to View Members-Only Content
            </Typography>
            <Box
              component="form"
              onSubmit={handlePasswordSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default SignIn;
