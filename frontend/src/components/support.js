import { Snackbar } from '@mui/material';

/*** GLobal Constants ***/
export const Keyframes = (props) => {
    const {name, frames, ...other} = props;

    const toCss = (cssObject) =>
      typeof cssObject === "string"
        ? cssObject
        : Object.keys(cssObject).reduce((accumulator, key) => {
            const cssKey = key.replace(/[A-Z]/g, v => `-${v.toLowerCase()}`);
            const cssValue = (cssObject)[key].toString().replace("'", "");
            return `${accumulator}${cssKey}:${cssValue};`;
          }, "");
  
    return (
      <style>
        {`@keyframes ${name} {
          ${Object.keys(frames)
            .map(key => {
              return ["from", "to"].includes(key)
                ? `${key} { ${toCss(frames[key])} }`
                : /^_[0-9]+[.]*[0-9]*$/.test(key)
                ? `${key.replace("_", "")}% { ${toCss(frames[key])} }`
                : "";
            })
            .join(" ")}
        }`}
      </style>
    );
  };

export function Notification(props) {
    const {notification, setNotification, duration, ...other} = props;
   
    const {value, notify} = notification;
    const handleClose = () => {setNotification({value: "", notify: false});}

    return (
        <Snackbar 
            {...props}
            open={notify}
            message={value}
            onClose={handleClose}
            autoHideDuration={duration}
            anchorOrigin={{
                vertical: other.vertical? other.vertical : "top", 
                horizontal: other.horizontal? other.horizontal : "right"
            }}
        />
    )
}