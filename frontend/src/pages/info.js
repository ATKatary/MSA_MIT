import React from "react";
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
    Typography,
    Container,
    List,
    ListItem,
    ListItemText,
    Link,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Box,
} from "@mui/material";

import "../assets/css/utils.css";

import Nav1 from "../components/nav1";
import { NAV_GC } from "../components/content/nav";
import { COLORS, THEME } from "../constants";
import { getNextPrayer } from "../components/utils";
import { resources } from "../constants";
import ChaplainInfo from "../components/chaplainInfo";

const Info = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState("chaplainInfo");
    const [prayerSet, setPrayerSet] = React.useState(false);
    const [nextPrayer, setNextPrayer] = React.useState(undefined);
    const { NAV_LEFT, NAV_RIGHT } = NAV_GC({ setOpen: setOpenNav });
    const [infoOpen, setInfoOpen] = React.useState(false);
    const toggleInfo = () => setInfoOpen(!infoOpen);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
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
    const renderContent = () => {
        switch (selectedCategory) {
            case "chaplainInfo":
                return <ChaplainInfo />;
            case "resources":
                return resources.map((resource, index) => (
                    <div key={index}>
                        <Typography variant="h6">{resource.category}</Typography>
                        <List dense>
                            {resource.items.map((item, i) => (
                                <ListItem key={i}>
                                    <Link href={item.link} target="_blank" rel="noopener">
                                        {item.name}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                ));
            default:
                return <Typography>Error: Category not found.</Typography>;
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
                closedStyle={{ width: "50px", color: COLORS.BLACK, right: "calc(0% + 50px)" }}
            />
            <div
                className="flex column width-100 justify-content-center align-items-center"
                style={{
                    height: "max-content",
                    marginTop: "200px",
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        {/* Navigation Sidebar */}
                        <Grid item xs={12} md={3}>
                            <Paper elevation={3} style={{ padding: "20px" }}>
                                <Typography variant="h6" gutterBottom>
                                    Categories
                                </Typography>
                                <List component="nav">
                                    <ListItem
                                        button
                                        selected={selectedCategory === "chaplainInfo"}
                                        onClick={() => handleCategoryChange("chaplainInfo")}
                                    >
                                        <ListItemText primary="Chaplain Information" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        selected={selectedCategory === "resources"}
                                        onClick={() => handleCategoryChange("resources")}
                                    >
                                        <ListItemText primary="Resources" />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        {/* Content Area */}
                        <Grid item xs={12} md={9}>
                            <Paper style={{ padding: "20px", backgroundColor: COLORS.WHITE }}>
                                {renderContent()}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default Info;
