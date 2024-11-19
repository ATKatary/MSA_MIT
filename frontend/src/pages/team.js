import React from "react";
import {
  Typography,
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import styled from "styled-components";
import "../assets/css/utils.css";

import Nav1 from "../components/nav1";
import { NAV_GC } from "../components/content/nav";
import { COLORS, THEME } from "../constants";
import { getNextPrayer } from "../components/utils";
import ChaplainInfo from "../components/chaplainInfo";

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: ${THEME.NAV.HEIGHT}px;
`;

const Team = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [prayerSet, setPrayerSet] = React.useState(false);
  const [nextPrayer, setNextPrayer] = React.useState(undefined);
  const { NAV_LEFT, NAV_RIGHT } = NAV_GC({ setOpen: setOpenNav });
  const [password, setPassword] = React.useState("");
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    return localStorage.getItem("teamPageAuthenticated") === "true";
  });

  if (!prayerSet) {
    const {
      nextPrayer: prayerName,
      nextPrayerTime,
      nextPrayerHour,
    } = getNextPrayer();
    const timeDifference = Math.abs(new Date() - nextPrayerTime);
    const hours = Math.floor(timeDifference / 3600000);
    const minutes = Math.round((timeDifference % 3600000) / 60000);

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

    const timeDifferenceMessage = `${
      hours > 0 ? hours + " hour" + (hours > 1 ? "s" : "") + " and " : ""
    }${minutes} min`;

    setNextPrayer(
      `Next prayer is ${
        prayerName.charAt(0).toUpperCase() + prayerName.slice(1)
      } at ${nextPrayerFormattedTime} (${timeDifferenceMessage})`
    );
    setPrayerSet(true);
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === process.env.REACT_APP_TEAM_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("teamPageAuthenticated", "true");
    } else {
      alert("Incorrect password");
      setPassword("");
    }
  };

  const PasswordForm = () => (
    <Box
      component="form"
      onSubmit={handlePasswordSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 4,
      }}
    >
      <Typography variant="h6">Enter Password to View Team Page</Typography>
      <TextField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        fullWidth
        autoFocus
        // Add these props to improve input handling
        inputProps={{
          autoComplete: "current-password",
          spellCheck: "false",
        }}
        // Prevent any default behaviors that might interfere
        onBlur={(e) => e.preventDefault()}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );

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
        style={{ height: "max-content" }}
      >
        <ContentWrapper>
          <Container maxWidth="lg">
            {!isAuthenticated ? (
              <Paper style={{ padding: "20px", backgroundColor: COLORS.WHITE }}>
                <PasswordForm />
              </Paper>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper
                    style={{ padding: "20px", backgroundColor: COLORS.WHITE }}
                  >
                    <ChaplainInfo />
                  </Paper>
                </Grid>
              </Grid>
            )}
          </Container>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Team;
