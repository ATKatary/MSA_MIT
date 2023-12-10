import * as React from 'react';
import "../assets/css/utils.css";

import Nav1 from '../components/nav1';
import { IconCard, PersonCard } from '../components/card';
import Header from '../components/header';
import Section from '../components/section';
import { NAV_GC } from '../components/content/nav';
import { Notification } from '../components/support';
import { COLORS, SECTIONS, THEME } from '../constants';
import { HEADER_GC } from '../components/content/headers/landing';
import { getNextPrayer, useCustomState } from '../components/utils';

import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { Col, Row } from 'reactstrap';
import MailingList from '../components/forms/mailingList';
import { Slideshow } from '../components/gallery';

function Landing() {
    const [openNav, setOpenNav] = React.useState(false);
    const {verse, translation, buttons} = HEADER_GC({});
    const [nextPrayer, setNextPrayer] = React.useState(undefined);
    const images = require.context('../assets/media', true);
    const [notification, setNotification] = useCustomState({value: null, notify: false});
    const {NAV_LEFT, NAV_RIGHT, ...NAV_GC_REST} = NAV_GC({setOpen: setOpenNav,});

    const mission = {
        cards: [
            {
                icon: PeopleIcon,
                title: "Community",
                description: "We build community",
                style: {
                    color: COLORS.WHITE
                }
            },
            {
                icon: SchoolIcon,
                title: "Academia",
                description: "We have academia",
                style: {
                    color: COLORS.WHITE
                }
            },
            {
                icon: VolunteerActivismIcon,
                title: "Service",
                description: "We do service",
                style: {
                    color: COLORS.WHITE
                }
            }
        ]
    }

    const team = {
        cards: [
            {
                title: "President",
                name: "Abdurahman Sherif",
                picSrc: images("./ec/2023/sherif.jpeg")
            },
            {
                name: "Mohamed Samb",
                title: "Events Coordinator",
                picSrc: images("./ec/2023/samb.jpeg"),
                media: [
                    {href: "", icon: "fa-twitter"},
                    {href: "", icon: "fa-linkedin"} 
                ]
            },
            
            {
                name: "Abdul Kareem ",
                title: "Academic Chair",
                picSrc: images("./ec/2023/abdulkareem_ahmed.jpeg"),
                media: [
                    {href: "", icon: "fa-twitter"},
                    {href: "", icon: "fa-linkedin"} 
                ]
            }, 
            
            {
                name: "Ahmed Zain",
                title: "Academic Chair",
                picSrc: images("./ec/2023/abdulkareem_ahmed.jpeg"),
                media: [
                    {href: "", icon: "fa-twitter"},
                    {href: "", icon: "fa-linkedin"} 
                ]
                },
            
            {
                name: "Noura Attili",
                title: "External Relations Chair",
                picSrc: images("./ec/2023/noura.jpeg"),
                media: [
                    {href: "", icon: "fa-twitter"},
                    {href: "", icon: "fa-linkedin"} 
                ]
            }, 
            {
                name: "Fedaa Alsoufi",
                title: "Community Service Chair",
                picSrc: images("./ec/2023/fedaa.jpeg"),
                media: [
                    {href: "", icon: "fa-twitter"},
                    {href: "", icon: "fa-linkedin"} 
                ]
            },
            
            {
                name: "Rumaisa Abdulhai",
                title: "Community Service Chair",
                picSrc: images("./ec/2023/rumisa.jpeg"),
                media: [
                    {href: "", icon: "fa-twitter"},
                    {href: "", icon: "fa-linkedin"} 
                ]
            }, {
                name: "Yasmeen A Shabazz",
                title: "Social Media Chair",
                picSrc: images("./ec/2023/yasmeen.jpeg"),
                media: [
                    {href: "", icon: "fa-twitter"},
                    {href: "", icon: "fa-linkedin"} 
                ]
            },
            
            {
                name: "Laiba Shahid",
                title: "Publicity Chair",
                picSrc: images("./ec/2023/laiba.jpeg"),
                media: [
                    {href: "", icon: "fa-twitter"},
                    {href: "", icon: "fa-linkedin"} 
                ]
            }, 
            {
                name: "Amina Abdalla",
                title: "Social Chair",
                picSrc: images("./ec/2023/amina.jpeg"),
                media: [
                    {href: "", icon: "fa-twitter"},
                    {href: "", icon: "fa-linkedin"} 
                ]
            },
        ]
    }

    const sisterNada = {
        name: "Nada Miqdadi El-Alami",
        title: "MSA Advisor and Chaplain",
        picSrc: images("./ec/2022/nada.jpg"),
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const {nextPrayer, nextPrayerTime, nextPrayerHour} = getNextPrayer(position);

        setNextPrayer(`Next prayer is ${nextPrayer.charAt(0).toUpperCase() + nextPrayer.slice(1)} at ${nextPrayerHour > 12 ? (nextPrayerHour - 12) + ":" + (nextPrayerTime.getMinutes() >= 10 ? nextPrayerTime.getMinutes() : "0" + nextPrayerTime.getMinutes()) + "pm" : nextPrayerHour + ":" + nextPrayerTime.getMinutes() + "am"} (${Math.round(Math.abs(new Date() - nextPrayerTime) / 60000)} min)`);
    }) 
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
            
            {/*** Mission ***/}
            <Section 
                style={{backgroundColor: COLORS.GRAY}}
                titleStyle={{color: COLORS.WHITE}}
                title="Mission"
                description={`
                    Representing hundreds of Muslims, MIT Muslim Student Association is a close-knit and friendly community assisting the 
                    diverse Muslims at MIT with their practice of Islam. 
                    We offer social, spiritual, and academic programs and aim at building a strong community for all Muslims on campus.
                `}
            >
                <Row style={{margin: "60px 0 0 0"}} className="flex justify-around width-100">
                    {mission.cards.map((card, i) =>
                        <IconCard 
                            {...card}
                            key={`mission-card-${i}`}
                        />
                    )}
                </Row>
            </Section>
                        
            <Section
                title="Team"
                style={{backgroundColor: COLORS.BLACK, color: COLORS.WHITE}}
            >
                <Row className="width-100 flex justify-around align-center">
                    <PersonCard 
                        {...sisterNada}
                        className="text-center"
                        style={{color: COLORS.WHITE, height: "300px", maxWidth: "350px"}}
                    />
                    <Slideshow
                        style={{width: "350px"}}
                        controls
                        items={
                            team.cards.map((card, i) =>
                                <PersonCard 
                                    {...card}
                                    className="text-center"
                                    style={{color: COLORS.WHITE, width: "200px", height: "300px"}}
                                    key={`team-card-${i}`}
                                />
                            )
                        }
                    />
                </Row>
            </Section>

            {/*** Mailing List ***/}
            <Section
                title="Join mailing list"
                id={SECTIONS.MAILING_LIST.TITLE}
            >
                <MailingList setNotification={setNotification}/>
            </Section>
        </div>
        <Notification notification={notification} setNotification={setNotification} duration={6000}/>
        </>
    )
}

export default Landing;