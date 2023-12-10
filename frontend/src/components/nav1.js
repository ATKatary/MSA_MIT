import * as React from 'react';
import "../assets/css/utils.css";

import { useCustomState } from './utils';
import ResponsiveNav from './responsive/nav';
import { SECTIONS, THEME } from '../constants';

import { Col, Container, Row } from 'reactstrap';
import { Alert, IconButton, Link } from '@mui/material';

import MosqueIcon from '@mui/icons-material/Mosque';

function Nav1({setNextPrayer, nextPrayer, ...props}) {
    const {open, setOpen, vertical, itemsLeft, itemsRight, collapsed, windowWidth, ...other} = props;

    return (
        <>
        <ResponsiveNav 
            {...other}
            open={open}
            setOpen={setOpen}
            vertical={vertical}
            collapsed={collapsed}
            itemsLeft={itemsLeft} 
            rightItems={itemsRight}
        >
            {other.children? 
                other.children 
                : 
                <Container
                    className="flex width-100 column"
                    style={{
                        marginTop: "20px",
                        ...other.childContStyle
                    }}
                >
                    <div 
                        className="flex width-100 justify-between align-center"
                    >
                    <section 
                        id="nav-left" 
                        className={`flex ${vertical? "column" : "align-center"}`}
                        style={{...other.leftStyle}}
                    >
                        {other.fillNav? other.fillNav(itemsLeft) : fillNav(itemsLeft)}
                    </section>
                    <section 
                        id="nav-right" 
                        className={`flex ${vertical? "column" : "align-center"}`}
                        style={{...other.rightStyle}}
                    >
                        {other.fillNav? other.fillNav(itemsRight) : fillNav(itemsRight)}
                    </section>    
                </div>
                <Alert 
                    icon={<MosqueIcon />}
                    color="info" 
                    variant="filled"
                    style={{
                        top: "0", 
                        position: "relative", 
                        borderRadius: "0px", 
                        margin: "30px 0 0 0"
                    }}
                >
                    <Container style={{fontWeight: "bold"}}>
                        <span>{nextPrayer}</span>
                    </Container>
                </Alert>
                </Container>
            }
        </ResponsiveNav>
        <div className="respond-max" style={{minWidth: vertical? SECTIONS.NAV.WIDTH : "", minHeight: vertical? "" : THEME.NAV.HEIGHT, display: collapsed? "" : "none"}}></div>
        </>
    )
}

export default Nav1;

function fillNav(items) {
    if (!items) return;
    return items.map((item, i) => {
        const {meta, content, ...rest} = item;
        const {isRow, style, href, isIcon, className, ...other} = meta;
        if (isRow) {
            return (
                <div 
                    {...other} 
                    key={`nav-${i}`}
                    style={{...style}} 
                    className={`width-100 flex align-center ${className}`} 
                >
                    {fillNav(content.items)}
                </div>
            )
        }
        return (
            <Link href={href} style={{color: THEME.SECONDARY, ...style}} {...other} key={`nav-${i}`} className={`${className}`}>
                {isIcon? <content.icon {...other.iconProps}/> : content.title}
            </Link>
        ); 
    })
}