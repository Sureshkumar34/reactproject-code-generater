import React from 'react'
import { Grid } from '@mui/material';

function Footer() {
  return (
    <div style={{backgroundColor:"rgb(179, 239, 178)", marginTop:"-2%", paddingLeft:"2%"}}>

        <Grid container spacing={5} style={{marginRight:"8%"}}>
          <Grid item><p>All Right Reserved</p> </Grid>
        </Grid>
        <Grid container spacing={5} style={{marginRight:"8%"}}>
          <Grid item><p>Terms of Service</p></Grid>
          <Grid item><p>Privacy</p></Grid>
        </Grid>
    </div>
  )
}

export default Footer