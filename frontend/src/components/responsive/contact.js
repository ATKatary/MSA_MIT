import * as React from 'react';
import "../../assets/css/utils.css";
import "../../assets/css/responsive.css";

import { Button } from '@mui/material';
import { THEME } from '../../constants';
import { Container, Row } from 'reactstrap';

function ResponsiveContact(props) {
    const {title, headerFields, bodyFields, sendOnClick, headerVertical, bodyVertical, ...other} = props;

    return (
        <>
        <Container className={`respond-contact ${other.className}`} style={{...other.style}}>
            <Row style={{...other.titleStyle}} className={`${other.titleClassName}`}>{title}</Row>
            <Row style={{...other.headerStyle}} className={`${other.headerClassName}`}>{headerFields}</Row>
            <Row style={{...other.bodyStyle}} className={`${other.bodyClassName}`}>{bodyFields}</Row>
            <Row style={{...other.sendStyle}} className={`${other.sendClassName}`}>
            <Button 
                onClick={sendOnClick}
                style={{
                    color: THEME.SECONDARY,
                    backgroundColor: THEME.PRIMARY,
                    ...THEME.CONTACT.STYLE.SEND_BTN,
                    ...other.sendBtnStyle
                }}
                className={`public-sans ${other.sendClassName}`}
                variant={other.sendVariant? other.sendVariant : "contained"} 
            >
                {other.sendText? other.sendText : "Send"}
            </Button>
            </Row>
        </Container>
        </>
    )
}

export default ResponsiveContact;