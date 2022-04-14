import './gallery.css';
import {Stack, Button, Typography} from '@mui/material';

export function SlideShow(props) {
    const images = props.images;
    return (
        <Stack id={props.id} direction="row" className="width-100 slideshow scroll margin-10px">
            <div className="flex align-center">
            {images.length > 0 ?
                images.map((item, index) => {
                    return (<img className="margin-5px image box-shadow" key={`pic${index}`} src={item.default} alt=""/>);
                    }) :  <></>}
            </div>
        </Stack>    
    )
}

export function Shuffle(props) {
    const images = props.images
    return (
        <Stack id={props.id} direction="row" className="width-100 shuffle scroll margin-10px">
        {images.length > 0 ?
            images.map((item, index) => {
                return (<img className="margin-5px image" key={`pic${index}`} src={item.default} alt=""/>);
                }) :  <></>}
    </Stack> 
    )
}

export function Rotate(props) {
    const images = props.images;
    return (
        <div id={props.id} className="pause width-100 height-75vw margin-20px flex justify-center">
            {images.map((image, index) => {
              return <Button key={index} className={`project-box box-shadow cycle-start${index}-animation padding-0`} onClick={() => {window.location = image['link']}} sx={{backgroundImage: `url(${image['img']})`}}>
                      <Button className={`${image['color']} opacity-95 width-100 height-100 pointer flex column`}>
                        <Typography className="text-white font-2-5vw">{image['title']}</Typography>
                        <Typography className="text-white font-1-5vw">{image['description']}</Typography>
                      </Button>
                     </Button>
            })}
        </div>
    )
}