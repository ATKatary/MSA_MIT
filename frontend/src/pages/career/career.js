import * as React from 'react';
import "../../assets/css/utils.css";

import Nav1 from '../../components/nav1';
import Header from '../../components/header';
import Section from '../../components/section';
import { NAV_GC } from '../../components/content/nav';
import { COLORS, THEME } from '../../constants';
import { LANDING_GC } from '../../components/content/landing';
import {CAREER_GC} from '../../components/content/career-page/career'
import {HEADER_GC} from '../../components/content/headers/landing';
import { getNextPrayer, useCustomState } from '../../components/utils';

function Career() {
    const images = require.context('../assets/media', true);
    
    const [openNav, setOpenNav] = React.useState(false);
    const {verse, translation, buttons} = HEADER_GC({});
    const [prayerSet, setPrayerSet] = React.useState(false);
    const [nextPrayer, setNextPrayer] = React.useState(undefined);
    const {NAV_LEFT, NAV_RIGHT, ...NAV_GC_REST} = NAV_GC({setOpen: setOpenNav,});
    const {MISSION, TEAM, SISTER_NADA, ...LANDING_REST} = LANDING_GC({images: images});
    const [notification, setNotification] = useCustomState({value: null, notify: false});

    if (!prayerSet) {
        const {nextPrayer, nextPrayerTime, nextPrayerHour} = getNextPrayer();
        setNextPrayer(`Next prayer is ${nextPrayer.charAt(0).toUpperCase() + nextPrayer.slice(1)} at ${nextPrayerHour > 12 ? (nextPrayerHour - 12) + ":" + (nextPrayerTime.getMinutes() >= 10 ? nextPrayerTime.getMinutes() : "0" + nextPrayerTime.getMinutes()) + "pm" : nextPrayerHour + ":" + nextPrayerTime.getMinutes() + "am"} (${Math.round(Math.abs(new Date() - nextPrayerTime) / 60000)} min)`);
        setPrayerSet(true)
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
            {/*** Referrals ***/}
            <Section 
                title={CAREER_GC.REFERRAL_LISTINGS.title}
                description={CAREER_GC.REFERRAL_LISTINGS.description}
                titleStyle={{color: COLORS.WHITE}}
                style={{backgroundColor: COLORS.GRAY}}
            >
                <CAREER_GC.REFERRAL_LISTINGS.component />
            </Section>
        </div>
        </>
    )
}

export default Career;