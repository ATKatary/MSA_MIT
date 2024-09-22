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
        category: "Qur’an Resources",
        items: [
            { name: "Quran.com", link: "https://quran.com/" },
            { name: "Tanzeel.com", link: "https://www.tanzeel.com/" },
        ],
    },
    {
        category: "Qur’an Exegesis Resources",
        items: [
            {
                name: "Ibn Katheer (audio)",
                link: "https://www.salafisounds.com/tafsir-ibn-kathir-by-abu-hakeem-bilal-davis/",
            },
            { name: "Al-Mawdudi", link: "http://www.englishtafsir.com/" },
            {
                name: "In the Shade of the Qur’an",
                link: "https://alhamdolillah.com/book/in-the-shade-of-the-quran-english-sayyid-qutb-shaheed/",
            },
        ],
    },
    {
        category: "Hadith Resources",
        items: [
            { name: "Sunnah.com", link: "https://sunnah.com/" },
            {
                name: "Forty Hadith Nawawi",
                link: "https://d1.islamhouse.com/data/en/ih_books/single2/en-hadith-nawawy-sahih.pdf",
            },
        ],
    },
    {
        category: "Seerah / Life Story of Prophet Muhammad",
        items: [
            {
                name: "Meeting Muhammad (videos)",
                link: "https://www.youtube.com/playlist?app=desktop&amp;list=PLQ02IYL5pmhHvZ02LKQVeey8H-2XBKMGb",
            },
            {
                name: "Seerah by Yasir Qadhi (videos)",
                link: "https://www.youtube.com/watch?v=95K8HQbbeS0&amp;list=PLAEA99D24CA2F9A8F",
            },
            {
                name: "Men and Women Around the Messenger",
                link: "https://www.kalamullah.com/Books/Men%20And%20Women%20Around%20the%20Messenger.pdf",
            },
        ],
    },
    {
        category: "Theology",
        items: [
            {
                name: "Al-Sanusi",
                link: "https://sunnianswers.files.wordpress.com/2011/08/sanusicreed-abuadam.pdf",
            },
            {
                name: "Al-Hanbali’s The Keys to Paradise",
                link: "https://maktabahassunnahblog.files.wordpress.com/2015/10/the-key-to-paradise.pdf",
            },
            {
                name: "Dehlevi’s Perfection of Faith",
                link: "https://archive.org/details/PerfectionOfFaith/page/n15/mode/2up",
            },
        ],
    },
    {
        category: "Women",
        items: [
            {
                name: "Female Scholars",
                link: "https://muslimmatters.org/2021/03/15/two-questions-about-the-dictionary-of-female-scholars/",
            },
            {
                name: "Upheld by Allah (videos)",
                link: "https://yaqeeninstitute.org/yaqeen-institute/trailer-upheld-by-allah-women-in-the-quran",
            },
            {
                name: "Yasmin Mogahed (video)",
                link: "https://www.youtube.com/watch?v=m5Wt_h7_WPQ",
            },
            {
                name: "Female Companions",
                link: "https://ayeina.com/stories-of-sahabiyat/",
            },
            {
                name: "Islamic Ruling on Hijab",
                link: "https://yaqeeninstitute.org/read/paper/is-hijab-religious-or-cultural-how-islamic-rulings-are-formed",
            },
        ],
    },
    {
        category: "Purification",
        items: [
            {
                name: "Purification of the Heart",
                link: "https://data.nur.nu/Kutub/English/Hamza-Yusuf_Purification-of-the-Heart.pdf",
            },
            {
                name: "Heart Therapy by Albarghouthi",
                link: "http://www.kalamullah.com/Books/Heart%20Therapy.pdf",
            },
        ],
    },
    {
        category: "General Topics",
        items: [
            { name: "About Islam", link: "https://aboutislam.net/" },
            { name: "Yaqeen Institute", link: "https://yaqeeninstitute.org/" },
            { name: "Muslim Matters", link: "http://muslimmatters.org/" },
        ],
    },
    {
        category: "Questions about Islam and Muslims",
        items: [
            {
                name: "ING - Answers to FAQs about Islam and Muslims",
                link: "https://ing.org/resources/for-all-groups/answers-to-frequently-asked-questions/answers-to-frequently-asked-questions-about-islam-and-muslims/",
            },
            {
                name: "Towards Eternity (videos)",
                link: "https://www.youtube.com/@TowardsEternity/videos",
            },
            {
                name: "Institute of Social Policy and Understanding",
                link: "https://www.ispu.org/",
            },
            {
                name: "American Muslims: Facts vs. Fiction",
                link: "https://www.upf.tv/films/american-muslim-facts/",
            },
        ],
    },
    {
        category: "Ramadan and Eid",
        items: [
            { name: "Ramadan", link: "https://www.whyislam.org/ramadan/" },
            { name: "Eid-al-Adha", link: "https://www.whyislam.org/eidaladha/" },
        ],
    },
    {
        category: "Just for Fun",
        items: [
            {
                name: "Fit for Allah",
                link: "https://www.instagram.com/zainab_fitforallah/?hl=en",
            },
            { name: "Aida Azlin", link: "https://www.aidaazlin.com/" },
            {
                name: "Deen and Chai",
                link: "https://www.youtube.com/channel/UCiTGEEhMAaBu6LPuPXsDYYQ/featured",
            },
        ],
    },
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
