import { Col, Row } from "reactstrap";
import { COLORS } from "../constants";
import { Button, IconButton, Link } from "@mui/material";

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export function IconCard({title, description, href, style, ...props}) {
    return (
        <Col 
            className="flex align-center column text-center justify-around"
            style={{
                margin: "20px",
                padding: "20px",
                minWidth: "200px",
                ...style
            }}
            {...props}
        >
            <props.icon 
                style={{
                    fontSize: "50px"
                }}
            />
            <h4><b>{title}</b></h4>
            <p>{description}</p>
            <Link
                href={href}
                style={{
                    backgroundColor: COLORS.TRANSPARENT
                }}
            >
                Learn More
            </Link>
        </Col>
    )
}

export function PersonCard({name, title, social, picSrc, style, ...props}) {
    return (
        <Col 
            className="flex align-center column text-center justify-around"
            style={{
                margin: "20px",
                padding: "20px",
                width: "200px",
                ...style
            }}
            {...props}
        >
            <img 
                src={picSrc}
                style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "50%",
                }}
            />
            <h4 style={{marginTop: "10px"}}>{name}</h4>
            <p><b>{title}</b></p>
        </Col>
    )
}

export function PrayerCard({href, name, rooms, picSrc, style, className, ...props}) {
    return (
        <Row    
            style={{
                marginTop: "30px",
                ...style
            }}
            className={`flex justify-between respond-card ${className}`}
            {...props}
        >
            <Col className="width-fit">
                <Link href={href} className="flex align-center" style={{textDecoration: "none"}} target="_blank">
                    <h2 style={{color: COLORS.WHITE, fontWeight: "bolder"}}>{name}</h2>
                    <FmdGoodOutlinedIcon style={{fontSize: "28px", margin: "0 0 5px 5px", color: COLORS.WHITE}}/>
                </Link>
                <span className="flex">
                    {rooms.map(room => <p style={{margin: "5px", fontWeight: "bold", color: COLORS.GRAY}}>{room}</p>)}
                </span>
            </Col>
            <img 
                src={picSrc} 
                style={{
                    padding: "0",
                    height: "200px", 
                    objectFit: "cover", 
                    borderRadius: "20px",
                    margin: "10px 0 10px 0",
                    width: "min(300px, 100%)", 
                }}
            />
        </Row>
    )
}

export function ResourceCard({resources, title, ...props}) {
    return (
        <Col style={{width: "45%"}} className="text-center" {...props}>
            <h4 className="title">{title}</h4>
            {resources.map((resource, i) => 
                <Link href={resource.href} className={`flex align-center ${props.linkClassName}`} style={{textDecoration: "none"}} target="_blank">
                    <resource.icon style={{fontSize: "24px", margin: "0 0 5px 5px", color: COLORS.ORANGE}}/>
                    <h4 style={{color: COLORS.GRAY, fontWeight: "400", margin: "10px 5px 10px 5px"}}>{resource.name}</h4>
                    <FmdGoodOutlinedIcon style={{fontSize: "24px", margin: "0 0 5px 5px", color: COLORS.GREEN}}/>
                </Link>
            )}
        </Col>
    )
}