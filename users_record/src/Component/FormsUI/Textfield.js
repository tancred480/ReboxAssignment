import React from 'react'
import { TextField } from "@material-ui/core";
import {useField} from "formik";

function Textfield({name,...otherProps}) {
    const [field,meta]=useField(name);
//meta data contains touch or true
    const configTextfield={
        ...field,
        ...otherProps,
        fullWidth:true,
        variant:'outlined'
    }
    
    if(meta && meta.touched && meta.error){
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <div>
            <TextField {...configTextfield} />
        </div>
    )
}

export default Textfield;
