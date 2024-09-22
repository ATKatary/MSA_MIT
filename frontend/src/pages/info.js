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
} from "@mui/material";

import "../assets/css/utils.css";

import Nav1 from "../components/nav1";
import { NAV_GC } from "../components/content/nav";
import { COLORS, THEME } from "../constants";
import { getNextPrayer } from "../components/utils";

const chaplainInfo = {
    name: "Sister Nada Miqdadi El-Alami",
    role: "MIT Muslim Chaplain",
    biography:
        "Sister Nada has been the MIT Muslim Chaplain since 2017, serving the needs of MIT Muslims by providing spiritual programming, supporting students, and advocating for student needs on campus. She holds a BA in psychology, an MA in Administration and Leadership, and is pursuing a second MA in Islamic Leadership at Boston Islamic Seminary. She has been awarded an Ijaza (authenticated certificate) in teaching Qur'anic reading.",
    contact: "40 Massachusetts Avenue, Building W11 - Room 011, (617) 258-9285, mchnada@mit.edu",
};

const masjids = [
    { name: "ISB Islamic Society of Boston", address: "204 Prospect Street, Cambridge" },
    { name: "ICB Islamic Center of Boston, Wayland", address: "126 Boston Post Road, Wayland" },
    {
        name: "ISBCC Islamic Society of Boston Cultural Center",
        address: "100 Malcolm X Boulevard, Roxbury",
    },
    { name: "Masjid Al-Quran", address: "35 Intervale Street, Dorchester" },
    { name: "Mosque for the Praising of Allah", address: "722 Shawmut Avenue, Roxbury" },
    { name: "Yusuf Mosque", address: "186 Chestnut Hill Avenue, Brighton" },
];

const resources = [
    {
        category: "Muslim Mental Health Resources",
        items: [
            { name: "Khalil Center", link: "https://khalilcenter.com/" },
            { name: "Family Youth Institute", link: "https://www.thefyi.org/" },
            { name: "Naseeha", link: "https://naseeha.org" },
        ],
    },
    {
        category: "Qur'an Resources",
        items: [
            { name: "Quran.com", link: "https://quran.com/" },
            { name: "Tanzeel.com", link: "https://www.tanzeel.com/" },
        ],
    },
    {
        category: "Qur'an Exegesis Resources",
        items: [
            {
                name: "Ibn Katheer (audio)",
                link: "https://www.salafisounds.com/tafsir-ibn-kathir-by-abu-hakeem-bilal-davis/",
            },
            { name: "Al-Mawdudi", link: "http://www.englishtafsir.com/" },
            {
                name: "In the Shade of the Qur'an",
                link: "https://alhamdolillah.com/book/in-the-shade-of-the-quran-english-sayyid-qutb-shaheed/",
            },
        ],
    },
    // Include additional resource categories as needed
];

const Info = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState("chaplainInfo");
    const [prayerSet, setPrayerSet] = React.useState(false);
    const [nextPrayer, setNextPrayer] = React.useState(undefined);
    const { NAV_LEFT, NAV_RIGHT } = NAV_GC({ setOpen: setOpenNav });
    const [infoOpen, setInfoOpen] = React.useState(false);
    const toggleInfo = () => setInfoOpen(!infoOpen);
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
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
                return (
                    <Typography paragraph>
                        {chaplainInfo.biography}
                        <br />
                        <br />
                        Contact: {chaplainInfo.contact}
                    </Typography>
                );
            case "masjids":
                return (
                    <List>
                        {masjids.map((masjid, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={masjid.name} secondary={masjid.address} />
                            </ListItem>
                        ))}
                    </List>
                );
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
                <Container maxWidth="md">
                    <FormControl fullWidth style={{ margin: "20px 0" }}>
                        <Select value={selectedCategory} onChange={handleChange}>
                            <MenuItem value="chaplainInfo">Chaplain Information</MenuItem>
                            <MenuItem value="masjids">Local Masjids</MenuItem>
                            <MenuItem value="resources">Resources</MenuItem>
                        </Select>
                    </FormControl>
                    <Paper style={{ padding: "20px", backgroundColor: COLORS.WHITE }}>
                        {renderContent()}
                    </Paper>
                </Container>
            </div>
        </>
    );
};

export default Info;
