import React from 'react'
import {Button} from "@material-ui/core";
import {useFormikContext} from "formik";
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
    custom:{
        borderRadius:50,
        backgroundColor:"black",
        color:"white",
    },
}));
const ButtonWrapper=({children,...otherProps})=> {
    const classes=useStyles();
    const { submitForm } =useFormikContext();

    const handleSubmit=()=>{
        submitForm();
    }
    const configButton={
        ...otherProps,
        variant:'contained',
        color:"primary",
        fullWidth:true,
        onClick:handleSubmit
    }
    return (
        <Button
        className={classes.custom}
        {...configButton}
        >
            {children}
        </Button>
    )
}

export default ButtonWrapper;
