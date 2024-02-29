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
import { submitSignUp, getSpecificDay } from "../components/api/ramadan";

import "../assets/css/utils.css";

import Nav1 from '../components/nav1';
import { NAV_GC } from '../components/content/nav';
import { COLORS, THEME } from '../constants';
import { getNextPrayer } from '../components/utils';

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

const Ramadan = () => {
    const [days, setDays] = useState(getNextSevenDays());
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    //   const [userEmail, setUserEmail] = useState(''); // If want to use email
    const [openSnackbar, setOpenSnackbar] = useState(false);
    
    const [openNav, setOpenNav] = React.useState(false);
    const [prayerSet, setPrayerSet] = React.useState(false);
    const [nextPrayer, setNextPrayer] = React.useState(undefined);
    const {NAV_LEFT, NAV_RIGHT} = NAV_GC({setOpen: setOpenNav,});

    if (!prayerSet) {
        const {nextPrayer, nextPrayerTime, nextPrayerHour} = getNextPrayer();
        const timeDifference = Math.abs(new Date() - nextPrayerTime); // Difference in milliseconds
        const hours = Math.floor(timeDifference / 3600000); // Convert milliseconds to hours
        const minutes = Math.round((timeDifference % 3600000) / 60000); // Convert remaining milliseconds to minutes
    
        // Format the next prayer time
        const nextPrayerFormattedTime = `${nextPrayerHour > 12 ? 
            (nextPrayerHour - 12) + ":" + (nextPrayerTime.getMinutes() >= 10 ?
            nextPrayerTime.getMinutes() :
             "0" + nextPrayerTime.getMinutes()) + "pm" :
            nextPrayerHour + ":" + (nextPrayerTime.getMinutes() >= 10 ? 
            nextPrayerTime.getMinutes() : "0" + nextPrayerTime.getMinutes()) + "am"}`;
    
        // Format the time difference message to include both hours and minutes
        const timeDifferenceMessage = `${hours > 0 ? hours + " hour" + (hours > 1 ? "s" : "") + " and " : ""}${minutes} min`;
    
        // Set the next prayer message with the updated time difference format
        setNextPrayer(`Next prayer is ${nextPrayer.charAt(0).toUpperCase() + 
            nextPrayer.slice(1)} at ${nextPrayerFormattedTime} (${timeDifferenceMessage})`);
        setPrayerSet(true);
    }
    
    const fetchDaysData = async () => {
        const dates = getNextSevenDays();
        const daysDataPromises = dates.map(async (date) => {
            try {
                const response = await getSpecificDay(date);
                const signUpCount = response[date] ? response[date].length : 0;
                return { date, signUpCount, availableSlots: 50 - signUpCount };
            } catch (error) {
                console.error("Failed to fetch sign-ups for day:", date, error);
                return { date, signUpCount: "Error", availableSlots: "Error" };
            }
        });

        const daysData = await Promise.all(daysDataPromises);
        setDays(daysData);
    };

    useEffect(() => {
        fetchDaysData();
    }, []);

    const handleSignUpClick = (date) => {
        setSelectedDate(date);
        setOpen(true); // Open the modal
    };

    const submitForm = async () => {
        try {
            await submitSignUp(selectedDate, { name: userName }); // can add email as param
            console.log("Sign-up successful");
            setOpen(false);
            setUserName("");
            //   setUserEmail(''); // uncomment if using email
            await fetchDaysData();
            setOpenSnackbar(true);
        } catch (error) {
            console.error("Failed to sign up:", error);
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

            openedStyle={{height: `${THEME.NAV.HEIGHT}px`}}
            closedStyle={{width: "50px", color: COLORS.BLACK, right: "calc(0% + 50px)"}}
        />
        <div 
            className="flex column width-100"
            style={{
                height: "max-content"
            }}
        >
            {/* <Typography variant="h3" gutterBottom>
                Sign-up for Iftar!
            </Typography> */}
            <TableContainer component={Paper} style={{ width: '80%', maxWidth: '800px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Available Slots</TableCell>
                            <TableCell align="right">Sign Up</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {days.map((day, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {day.date}
                                </TableCell>
                                <TableCell align="right">
                                    {day.availableSlots !== "Error"
                                        ? day.availableSlots
                                        : "Error fetching slots"}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={day.availableSlots <= 0}
                                        onClick={() =>
                                            handleSignUpClick(day.date)
                                        }
                                    >
                                        Sign Up
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Sign Up</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To sign up, please enter your name:
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userName}
                            onChange={(event) =>
                                setUserName(event.target.value)
                            }
                        />
                        {/* New TextField for Email */}
                        {/* <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={userEmail}
                        onChange={(event) => setUserEmail(event.target.value)}
                        /> Add more fields the same way */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={submitForm}>Sign Up</Button>
                    </DialogActions>
                </Dialog>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setOpenSnackbar(false)}
                    message={`Successfully signed up for ${selectedDate}!`}
                    action={
                        <Button
                            color="secondary"
                            size="small"
                            onClick={() => setOpenSnackbar(false)}
                        >
                            Close
                        </Button>
                    }
                />
            </TableContainer>
        </div>
        </>
    );
};

export default Ramadan;
