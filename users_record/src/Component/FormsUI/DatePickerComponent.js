import React, { Fragment, useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker,KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function DatePickerComponent() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <KeyboardDatePicker
        variant="inline"
        label="Date Of Birth"
        inputVariant="outlined"
        format="dd/MM/yyyy"
        InputAdornmentProps={{ position: "start" }}
        value={selectedDate}
        onChange={handleDateChange}
      />
      
      </MuiPickersUtilsProvider> 
    )
}

export default DatePickerComponent
