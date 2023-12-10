import * as React from "react";

import { mod } from "./utils";
import { Keyframes } from "./support";
import { COLORS, THEME } from "../constants";

import { Container, Row } from "reactstrap";
import { IconButton } from "@mui/material";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function FadeIn(props) {
  const {images, imgStyle, duration, ...other} = props;

  const delta = 10;
  const n = images.length;

  return (
    <>
      {images.map((_, i) => {
          const a0 = `_${i*100 / n}`;
          const a1 = `_${i*100 / n + delta}`;

          const frames = {};
          frames[a0] = {opacity: "100%"};
          frames[a1] = {opacity: "100%"};

          
          for (let j = 0; j <= n; j++) {
            if (j == i) continue;
            frames[`_${j*100 / n}`] = {opacity: 0};
          }
          if (i == 0) frames["_100"] = {opacity: "100%"}

          return <Keyframes key={`show-${n}-${i}`} name={`show-${n}-${i}`} frames={frames}/>
        }
      )}
      <Container 
        {...other}
        className={`relative ${other.className}`}
        style={{...THEME.GALLERY.SLIDESHOW.STYLE, ...other.style}}
      >
        {images.map((image, i) => 
          <img 
            key={`img-${n}-${i}`}
            src={image.src} 
            style={{
              ...THEME.GALLERY.SLIDESHOW.IMG.STYLE,
              ...imgStyle, 
              ...image.style,
              animation: `
                show-${n}-${i} 
                ${duration? duration : 5*n}s 
                ${other.timeFunction? other.timeFunction : "ease-in-out"} 
                ${other.iterationCount? other.iterationCount : "infinite"}
              `
            }} 
            className={`absolute ${image.className}`}
          />
        )}
      </Container>
    </>
  )
}

export function Slideshow({items, style, className, ...props}) {
  const [i, setI] = React.useState(0);

  // React.useEffect(() => {setTimeout(() => setI(mod(i - 1, items.length)), 6000)}, [i]);

  return ( 
    <Row
        {...props}
        style={{
          ...style
        }}
        className={`flex justify-center align-center ${className}`}
      >
       {props.controls?
          <IconButton onClick={() => setI(mod(i - 1, items.length))} style={{color: COLORS.WHITE, zIndex: "11"}} className="width-fit">
            <ArrowBackIosIcon /> 
          </IconButton>
          : 
          <></>
        }
        {items[i]}
        {props.controls?
          <IconButton onClick={() => setI(mod(i + 1, items.length))} style={{color: COLORS.WHITE, zIndex: "11"}} className="width-fit">
            <ArrowForwardIosIcon /> 
          </IconButton>
          : 
          <></>
        }
      </Row>
    )
}