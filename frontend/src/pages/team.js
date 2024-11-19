import React from "react";
import { Typography, Container, Paper, Grid } from "@mui/material";
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

    if (!prayerSet) {
        const { nextPrayer: prayerName, nextPrayerTime, nextPrayerHour } = getNextPrayer();
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
                closedStyle={{ width: "50px", color: COLORS.BLACK, right: "calc(0% + 50px)" }}
            />

            <div
                className="flex column width-100 justify-content-center align-items-center"
                style={{
                    height: "max-content",
                }}
            >
                <ContentWrapper>
                    <Container maxWidth="lg">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Paper style={{ padding: "20px", backgroundColor: COLORS.WHITE }}>
                                    <ChaplainInfo />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </ContentWrapper>
            </div>
        </>
    );
};

export default Team;
