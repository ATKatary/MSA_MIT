import * as React from 'react';
import "../assets/css/utils.css";
import { API, PRAYERS } from '../constants';
import { prayTimes } from '../assets/js/prayerTimes';

export function useCustomState(initialState) {
    const [state, setState] = React.useState(initialState);
    const setCustomSate = (newState) => {
        setState((prevState) => ({...prevState, ...newState}))
    };
    
    return [state, setCustomSate];
}

export function formatDate(date, format) {
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();

    return format.toLowerCase().replace("mm", month).replace("dd", day).replace("yyyy", year);
}

export function post(url, body, handleRes) {
    fetch(url, {
      method: API.POST,
      headers: {
        'Content-Type': API.APPLICATION_JSON,
        'X-CSRFToken': API.CSRF_TOKEN()
      },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    }).then(handleRes)
}

export function get(url, args, handleRes) {
    url += "?";
    for (const [arg, value] of Object.entries(args)) {
        url += `${arg}=${value}&`
    }

    fetch(url, {
      method: API.GET,
      headers: {
        'Content-Type': API.APPLICATION_JSON
      },
    }).then(handleRes)
}

export function getNextPrayer(position) {
    const today = new Date();
    prayTimes.setMethod('ISNA'); 
    const times = prayTimes.getTimes(today, [position.coords.latitude, position.coords.longitude]);

    
    let todayDateTime = today.toISOString();
    const todayDate = todayDateTime.split('T')[0];
    
    let nextPrayer = "fajr";
    let nextPrayerTime = new Date(todayDate + 'T' + times["fajr"]);

    for (const prayer of PRAYERS.NAMES) {
        const prayerTime = new Date(todayDate + 'T' + times[prayer]);
        const diff = prayerTime - today;

        // console.log("[getNextPrayer] (prayer) >>", prayer);
        // console.log("[getNextPrayer] (prayerTime) >>", prayerTime);
        // console.log("[getNextPrayer] (diff) >>", diff);

        if (diff < 0) continue;

        if (diff < (nextPrayerTime - today) || (nextPrayerTime - today) < 0) {
            nextPrayerTime = prayerTime;
            nextPrayer = prayer;
        }
    }
    if (!nextPrayerTime) {
        nextPrayerTime = new Date(todayDate + 'T' + times["fajr"]);
        nextPrayer = "fajr";
    }
    return  {
        nextPrayer: nextPrayer,
        nextPrayerTime: nextPrayerTime, 
        nextPrayerHour: nextPrayerTime.getHours()
    };
}

export function mod(a, b) {
    return a - b*Math.floor(a / b);
}