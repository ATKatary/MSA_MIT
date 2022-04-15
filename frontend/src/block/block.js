import './block.css';
import {Typography} from '@mui/material';

export function TextImage(props) {
    return (
        <div id={props.id} className="flex align-center box-shadow width-80 padding-30px margin-30px" style={{ backgroundColor: `${props.backColor}`}}>
            <div className="width-50">
                <Typography variant="h1" className="font-7vw" sx={{color: `${props.textColor}`}}>{props.title}</Typography>
                <Typography variant="h4" className="font-2vw" sx={{color: `${props.textColor}`}}>{props.body}</Typography>
            </div>
            <div className="flex align-center justify-center width-50"><img src={props.imageSrc} className="height-20vw" alt=""/></div>
        </div>
    )
}

export function ImageText(props) {
    return (
        <div id={props.id} className="flex align-center box-shadow width-80 padding-30px margin-30px" style={{ backgroundColor: `${props.backColor}`}}>
            <div className="flex align-center justify-center width-50"><img src={props.imageSrc} className="height-25vw" alt=""/></div>
            <div className="width-50">
                <Typography variant="h1" className="font-7vw" sx={{color: `${props.textColor}`}}>{props.title}</Typography>
                <Typography variant="h4" className="font-2vw" sx={{color: `${props.textColor}`}}>{props.body}</Typography>
            </div>
        </div>
    )
}