import * as React from 'react';
import "../../assets/css/utils.css";

import { formatDate } from '../utils';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider, PickersDay } from '@mui/x-date-pickers';
import { COLORS, DATE, THEME } from '../../constants';

export function PassFormField(props) {
    let color = undefined;
    let focused = false;
    let helperText = props.helperText

    if (props.focused) focused = props.focused;
    else if (props.helperText === "good") {color = "success"; props.setHelperText(""); focused = true}
    else if (props.helperText !== "" && props.helperText) {color = "warning"; focused = true}
    else focused = false;

    const [showPassword, setShowPassword] = React.useState(false);
    // console.log(`[PassFormField] (focused) >> ${focused}`)
    return (
        <FormField 
            color={color} 
            focused={focused} 
            value={props.value} 
            label={props.label} 
            style={props.style} 
            marginBottom={"10px"}
            onClick={props.onClick}
            helperText={helperText}
            variant={props.variant} 
            onChange={props.onChange} 
            onKeyDown={props.onKeyDown} 
            type={showPassword? "text" : "password"}
            startAdornment = {
                <InputAdornment position="start">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {setShowPassword(!showPassword)}}
                        style={{color: props.adornmentColor}}
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            }
        />
    )
}

export function SelectedDay(props) {
    const {highlightedDays, highlightedDaysStyle, outsideCurrentMonth, day, ...other} = props;
    const [selected, setSelected] = React.useState(!outsideCurrentMonth && highlightedDays.includes(formatDate(day, DATE.DATE_FORMAT)));
    
    return (
        <PickersDay 
            {...other}
            sx={{...highlightedDaysStyle}}
            outsideCurrentMonth={outsideCurrentMonth} 
            day={day} 
            selected={selected}
        />
    )
}

export function DateFormField(props) {
    const highlightedDays = props.highlightedDays? props.highlightedDays : [];
    const highlightedDaysStyle = props.selectedStyle;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                value={props.value}
                sx={{...props.style}}
                variant={props.variant}
                inputFormat="MM/dd/yyyy"
                onChange={props.onChange}
                label={props.label? props.label : "Birthday"}
                InputProps = {{style: {...props.inputProps}}}
                slots={{
                    day: (props) => <SelectedDay highlightedDays={highlightedDays} highlightedDaysStyle={highlightedDaysStyle} {...props}/>
                }}
                renderInput={(params) => <FormField {...params} variant={"standard"}/>}
            />
        </LocalizationProvider>
    )
}

export function FormField(props) {
    const {required, label, value, onChange, style, ...other} = props;

    return (
        <TextField 
            label={label} 
            value={value} 
            style={{ ...style}} 
            inputProps={{
                style: {
                    color: THEME.SECONDARY,
                    ...other.inputStyle
                },
                ...other.inputProps
            }}
            InputLabelProps={{
                style: {
                    color: THEME.SECONDARY, 
                    ...other.labelStyle
                },
                ...other.InputLabelProps
            }}
            required={required}
            onChange={onChange}
            type ={other.type? other.type : "text"}
            variant={other.variant? other.variant : "standard"} 
            inputRef={(input) => other.focused? input && input.focus() : undefined}
            {...other}
        >
        </TextField>
    )
}

export function SelectField({value, inputStyle, labelStyle, items, style, className, ...props}) {
    return (
        <Select 
            style={{
                backgroundColor: COLORS.GRAY_2,
                ...style
            }}
            value={value}
            className={`${className}`}
            {...props}
            inputProps={{
                style: {
                    ...inputStyle
                }
            }}
            SelectDisplayProps={{
                style: {
                    ...props.displayStyle
                }
            }}
        >
            {items.map((item, i) => 
                <MenuItem {...item} key={`select-${i}-${item.value}`}>{item.name}</MenuItem>
            )}
        </Select>
    )
}