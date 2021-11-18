import * as React from 'react';
import { Typography,Box,Toolbar,AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
const useStyles= makeStyles((theme)=>({
  appBar:{
    backgroundColor:"#0e2f44",
  },
  typography:{
    fontFamily:"Times New Roman",
    alignItems:"center",
    justifyContent:"center",
  },
}))
export default function Header() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>  
            <Typography variant="h5" className={classes.typography} component="div" sx={{ flexGrow: 1 }}>
                User Record Mananagement
            </Typography>
          </Toolbar>
      </AppBar>
    </Box>
  );
}
