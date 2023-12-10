import * as React from 'react';
import "../assets/css/utils.css";

import Nav1 from '../components/nav1';
import Header from '../components/header';
import Section from '../components/section';
import { Slideshow } from '../components/gallery';
import { NAV_GC } from '../components/content/nav';
import { Notification } from '../components/support';
import Card, { PrayerCard, ResourceCard } from '../components/card';
import { COLORS, SECTIONS, THEME } from '../constants';
import { HEADER_GC } from '../components/content/headers/life';
import { getNextPrayer, useCustomState } from '../components/utils';

import { Col, Row } from 'reactstrap';
import { Link } from '@mui/material';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

function Life() {
    const [openNav, setOpenNav] = React.useState(false);
    const {verse, translation, buttons} = HEADER_GC({});
    const [nextPrayer, setNextPrayer] = React.useState(undefined);
    const images = require.context('../assets/media', true);
    const [notification, setNotification] = useCustomState({value: null, notify: false});
    const {NAV_LEFT, NAV_RIGHT, ...NAV_GC_REST} = NAV_GC({setOpen: setOpenNav,});


    navigator.geolocation.getCurrentPosition((position) => {
        const {nextPrayer, nextPrayerTime, nextPrayerHour} = getNextPrayer(position);

        setNextPrayer(`Next prayer is ${nextPrayer.charAt(0).toUpperCase() + nextPrayer.slice(1)} at ${nextPrayerHour > 12 ? (nextPrayerHour - 12) + ":" + (nextPrayerTime.getMinutes() >= 10 ? nextPrayerTime.getMinutes() : "0" + nextPrayerTime.getMinutes()) + "pm" : nextPrayerHour + ":" + nextPrayerTime.getMinutes() + "am"} (${Math.round(Math.abs(new Date() - nextPrayerTime) / 60000)} min)`);
    }) 

    const prayerSpaces = {
        cards: [
            {
                name: "W11 Musalla",
                href: "https://whereis.mit.edu/?go=W11",
                rooms: [],
                picSrc: images("./prayer/w11.png"),
            },
            {
                name: "E52 Musalla",
                href: "https://whereis.mit.edu/?go=E52",
                rooms: ["E52-112", "E52-212"],
                picSrc: images("./prayer/e52.jpeg"),
            },
            {
                name: "E51 Musalla",
                href: "https://whereis.mit.edu/?go=E51",
                rooms: ["E51-050"],
                picSrc: images("./prayer/e51.jpeg"),
            }
        ]
    }

    const offCampusResources = [
        {
            name: "Al Bara Market",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            href: "https://www.google.com/maps/dir//al+bara+market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3774cbc96d241:0xa0900dd040979ac5?sa=X&ved=2ahUKEwiZ-66G09OBAxVzlIkEHaOXA-EQ9Rd6BAgsEAA&ved=2ahUKEwiZ-66G09OBAxVzlIkEHaOXA-EQ9Rd6BAg9EAQ"
        },

        {
            name: "Cheema Supermarket",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            href: "https://www.google.com/maps/dir//Cheema+Supermarket/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e379cc736a6c81:0x8504e31b803321bc?sa=X&ved=2ahUKEwjeye2H09OBAxWEkYkEHZGIDa4Q9Rd6BAgmEAA&ved=2ahUKEwjeye2H09OBAxWEkYkEHZGIDa4Q9Rd6BAg7EAM"
        },

        {
            name: "Foodland",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            href: "https://www.google.com/maps?s=web&sca_esv=569774734&lqi=CghGb29kbGFuZCIDiAEBSOWAjtaRuICACFoUEAAYACIIZm9vZGxhbmQqBAgCEACSAQpyZXN0YXVyYW50qgE-EAEqDCIIZm9vZGxhbmQoADIeEAEiGmGH9k00K6Hs_ddpixlTItlroKl1xbuv-iUHMgwQAiIIZm9vZGxhbmTgAQA&vet=12ahUKEwi0mv2C0dOBAxWzFlkFHQF2CPEQ1YkKegQIGxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KXFKQNhAceOJMUYZePeJ9Vin&daddr=13+Highland+Ave,+Malden,+MA+02148"
        },

        {
            name: "Garden Halal Meat",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            href: "https://www.google.com/maps/dir//Garden+Halal+in+Haymarket:/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3708f57c779e1:0xabdcd8c534e5830?sa=X&ved=2ahUKEwjB5rGa09OBAxWgvokEHeN5CkwQ9Rd6BAgjEAA&ved=2ahUKEwjB5rGa09OBAxWgvokEHeN5CkwQ9Rd6BAg6EAM"
        },

         {
            name: "Quality Meat Market",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            href: "https://www.google.com/maps/dir//Quality+Meat+Market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e37ecd015dca3d:0x63cc70ea255344a2?sa=X&ved=2ahUKEwja8qWp09OBAxXupIkEHb6wDtkQ9Rd6BAgoEAA&ved=2ahUKEwja8qWp09OBAxXupIkEHb6wDtkQ9Rd6BAg8EAM"
        },

        {
            name: "Restaurant Depot",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            href: "https://www.google.com/maps/dir//Restaurant+Depot,+82+Boston+St,+Everett,+MA+02149/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e371a919f5ec93:0x6c65ec58835fb760?sa=X&ved=2ahUKEwi069Oy09OBAxXQjYkEHRacDYcQ48ADegQIHxAA&ved=2ahUKEwi069Oy09OBAxXQjYkEHRacDYcQ48ADegQIJBAJ"
        },

        {
            name: "Sayar Market",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            href: "https://www.google.com/maps/dir//Sayar+Market+Halal+Food,+3+Everett+St+%233e,+Revere,+MA+02151/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3710baf54cdb3:0xc5dde7b2635581a2?sa=X&ved=2ahUKEwj445S709OBAxUZjYkEHVvbBusQ48ADegQIEBAA&ved=2ahUKEwj445S709OBAxUZjYkEHVvbBusQ48ADegQIGxAJ"
        }
    ]
    const onCampusResources = []
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
            <Header 
                verse={verse}
                buttons={buttons}
                translation={translation}
                style={{
                    height: `calc(100vh - ${THEME.NAV.HEIGHT}px)`,
                    marginTop: `${THEME.NAV.HEIGHT}px`
                }}
            />

            <Section
                title="Prayer Spaces"
                style={{backgroundColor: COLORS.GRAY_2, color: COLORS.WHITE}}
                contStyle={{paddingBottom: "60px"}}
            >
                <Slideshow 
                    controls
                    className="width-100 justify-between"
                    style={{width: "100%"}} 
                    items={
                        prayerSpaces.cards.map((space, i) =>
                            <PrayerCard
                                {...space}
                                key={`prayer-card-$[i]`}
                            />
                        )
                    }
                />
            </Section>

            <Section 
                className="flex justify-center" 
                contStyle={{width: "100%"}}
            >
                <Row className="flex justify-center width-100">
                    <ResourceCard 
                        resources={onCampusResources} 
                        title="On Campus Resources" 
                        linkClassName="row-reverse justify-end"
                    />
                    <ResourceCard 
                        resources={offCampusResources} 
                        title="Off Campus Resources"
                        linkClassName="justify-end"
                    />
                </Row>
            </Section>
        </div>
        <Notification notification={notification} setNotification={setNotification} duration={6000}/>
        </>
    )
}

export default Life;