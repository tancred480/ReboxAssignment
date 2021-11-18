import React from 'react'
import UserRecordForm from './UserRecordForm'
import UserRecordTable from './UserRecordTable'
import { Grid } from '@material-ui/core';
function HomePage() {
    return (
        <Grid container spacing={2}>
          <Grid item lg={4} xs={12}>
            <UserRecordForm/>
          </Grid>
          <Grid item lg={8} xs={12}>
            <UserRecordTable/>
          </Grid>
        </Grid>
    )
}

export default HomePage
