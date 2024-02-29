import * as React from 'react';
import "../assets/css/utils.css";

import Nav1 from '../components/nav1';
import Header from '../components/header';
import Section from '../components/section';
import { Slideshow } from '../components/gallery';
import { NAV_GC } from '../components/content/nav';
import { Notification } from '../components/support';
import { LIFE_GC } from '../components/content/life';
import { COLORS, SECTIONS, THEME } from '../constants';
import { PrayerCard, ResourceCard } from '../components/card';
import { HEADER_GC } from '../components/content/headers/life';
import { getNextPrayer, useCustomState } from '../components/utils';

import { Row } from 'reactstrap';

function Life() {
    const images = require.context('../assets/media', true);

    const [openNav, setOpenNav] = React.useState(false);
    const {verse, translation, buttons} = HEADER_GC({});
    const [prayerSet, setPrayerSet] = React.useState(false);
    const [nextPrayer, setNextPrayer] = React.useState(undefined);
    const {PRAYER_SPACES, RESOURCES, ...LIFE_REST} = LIFE_GC({images: images});
    const {NAV_LEFT, NAV_RIGHT, ...NAV_GC_REST} = NAV_GC({setOpen: setOpenNav,});
    const [notification, setNotification] = useCustomState({value: null, notify: false});


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
            
            {/*** Prayer Spaces ***/}
            <Section
                title={PRAYER_SPACES.title}
                contStyle={{paddingBottom: "60px"}}
                style={{backgroundColor: COLORS.GRAY_2, color: COLORS.WHITE}}
            >
                <Slideshow 
                    controls
                    className="width-100 justify-between"
                    style={{width: "100%"}} 
                    items={
                        PRAYER_SPACES.cards.map((space, i) =>
                            <PrayerCard
                                {...space}
                                key={`prayer-card-$[i]`}
                            />
                        )
                    }
                />
            </Section>
            
            {/*** Resources ***/}
            <Section 
                className="flex justify-center" 
                contStyle={{width: "100%"}}
            >
                <Row className="flex justify-center width-100 respond-row-column">
                    <ResourceCard 
                        title={RESOURCES.ON_CAMPUS.title} 
                        resources={RESOURCES.ON_CAMPUS.cards} 
                        linkClassName="row-reverse justify-end"
                    />
                    <ResourceCard 
                        linkClassName="justify-end"
                        title={RESOURCES.OFF_CAMPUS.title} 
                        resources={RESOURCES.OFF_CAMPUS.cards} 
                    />
                </Row>
            </Section>
        </div>
        <Notification notification={notification} setNotification={setNotification} duration={6000}/>
        </>
    )
}

export default Life;