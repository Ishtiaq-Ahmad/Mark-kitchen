import React from 'react'
import PreviousPeriod from './PreviousPeriod'
import '../style/dashboard.scss'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import RevenueByHour from './charts/RevenueByHour'

const SalesByHour = () => {
    return (
        <div>
           <PreviousPeriod/> 
           <div className="sales_section">
               <Typography
          variant="h6"
          component="div"
          gutterBottom

        >
          Sales by Menu Item
        </Typography>
          <Grid container spacing={0}>
        <Grid item xs={9} md={10}>
         <Typography
          variant="body1"
          component="div"
          gutterBottom
        >
         Ranking of which menu items are the most and least popular. Use this to see whih of your menu items are trending up or down over time. Note: this report does not include menu item additions like extra toppings.
        </Typography>
        </Grid>
        <Grid item xs={3} md={2} style={{display:'flex', alignItems:"center", justifyContent:"flex-end"}}>
          <Button endIcon={<DownloadIcon />}>Download Report</Button>
        </Grid>
       
      </Grid>
      <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{color:"#fbbe36"}}
        >
          Revenue by hour
        </Typography>
         <Divider />
         <RevenueByHour/>

           </div>
        </div>
    )
}

export default SalesByHour
