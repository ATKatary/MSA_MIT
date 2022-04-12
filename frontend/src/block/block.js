import './block.css';
import {Typography} from '@mui/material';

export function TextImage(props) {
    const title = props.title;
    const body = props.body;
    const imageSrc = props.imageSrc;
    return (
        <div className="flex align-center box-shadow width-80 padding-30px margin-30px gray">
            <div className="width-50">
                <Typography variant="h1" className="text-black font-7vw">{title}</Typography>
                <Typography variant="h4" className="text-black font-2vw">{body}</Typography>
            </div>
            <div className="flex align-center justify-center width-50"><img src={imageSrc} className="height-20vw" alt=""/></div>
        </div>
    )
}

export function ImageText() {
    return (
      <>
      
      </>
    )
}