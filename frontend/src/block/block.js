import './block.css';
import {Typography} from '@mui/material';

export function TextImage(props) {
    return (
        <div id={props.id} className={`flex align-center box-shadow width-80 padding-30px margin-30px ${props.additionalClasses}`} style={{ background: `${props.backColor}`}}>
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
        <div id={props.key} className={`flex align-center box-shadow width-80 ${props.additionalClasses}`} style={{ background: `${props.backColor}`}}>
            <div className="flex align-center justify-center width-50"><img src={props.imageSrc} className="height-25vw" alt=""/></div>
            <div className="width-50">
                <Typography variant="h1" className="font-7vw" sx={{color: `${props.textColor}`}}>{props.title}</Typography>
                <Typography variant="h4" className="font-2vw" sx={{color: `${props.textColor}`}}>{props.body}</Typography>
            </div>
        </div>
    )
}

export function BlockSlideShow(props) {
    return (
        <div className="width-100 flex align-center justify-center height-40vw pause margin-bottom-10px">
        {props.blocks.map((block, index) => {
            return props.blocks['type'] === "textImage" ?
            <TextImage title={block['title']} body={block['body']} textColor={block['textColor']} backColor={block['backColor']} imageSrc={block['imgSrc']} additionalClasses={`absolute show-block-${index} padding-10px margin-0`} key={`block${index}`}/>
            :
            <ImageText title={block['title']} body={block['body']} textColor={block['textColor']} backColor={block['backColor']} imageSrc={block['imgSrc']} additionalClasses={`absolute show-block-${index} padding-10px margin-0`} key={`block${index}`}/>})} 
        </div>
    )
}