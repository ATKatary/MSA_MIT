import * as React from 'react';
import "../../assets/css/utils.css";
import "../../assets/css/responsive.css";

import { IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Container } from 'reactstrap';
import { THEME } from '../../constants';

function ResponsiveNav(props) {
    const {open, setOpen, vertical, itemsLeft, itemsRight, collapsed, windowWidth, ...other} = props;

    return (
    <>
    <IconButton 
        className={`respond-min fixed ${vertical? "height" : "width"}-${collapsed? "fit" : "100"}`}
        style={{
            position: "fixed",
            color: THEME.SECONDARY,
            borderRadius: "0%", 
            backgroundColor: THEME.PRIMARY, 
            ...other.style, ...other.closedStyle,

            display: collapsed? open? "none" : "inline-flex" : "none",
        }} 
        onClick={() => setOpen(true)}
    >
        {other.openIcon? <other.openIcon /> : <MenuOpenIcon />}
    </IconButton>
        
    <div 
        style={{
            color: THEME.SECONDARY,
            backgroundColor: THEME.PRIMARY, 
            ...other.style, ...other.openedStyle,

            top: open? "0" : "",
            left: open? "0" : "",
            display: collapsed? open? "flex" : "" : "flex",
        }} 
        className={`respond-max flex justify-between align-center ${collapsed? "fixed" : ""} ${vertical? "column height-100" : "width-100"}`}
    >
        <IconButton 
            className="align-self-end respond-min" 
            style={{
                position: "fixed",
                borderRadius: "0%",
                color: THEME.SECONDARY,
                backgroundColor: THEME.PRIMARY,
                ...other.style, ...other.closedStyle, 
                // left: vertical? "" : "calc(100% - 65px)", 
                top: vertical? "" : `${THEME.NAV.HEIGHT - 25}px`, 
                display: collapsed? "" : "none",
            }}
            onClick={() => setOpen(false)}
        >
            {other.closeIcon? <other.closeIcon /> : <CloseIcon />}
        </IconButton>
        {other.children}
    </div>
    </>
    )

}

export default ResponsiveNav;