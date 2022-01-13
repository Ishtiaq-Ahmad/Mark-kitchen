import React from 'react'
import '../style/dashboard.scss'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SplineAreaChart from './charts/SplineAreaChart'


const uparrow = {
  transform: "scale(.7)",
  
};
const uparrow1 = {
  transform: "scale(.7)",
 marginTop:'3px'
  
};

const SalesByDay = () => {
    return (
        <div>
             <div className="sales_section">
               <Typography
          variant="h6"
          component="div"
          gutterBottom

        >
          Sales by Day
        </Typography>
          <Grid container spacing={0}>
        <Grid item xs={9} md={10}>
         <Typography
          variant="body1"
          component="div"
          gutterBottom
        >
         Breakdown of total revenue and order colume per day or per month. Use this to see whether your business is trending upwards or downwards over time
        </Typography>
        </Grid>
        <Grid item xs={3} md={2} style={{display:'flex', alignItems:"center", justifyContent:"flex-end"}}>
          <Button endIcon={<DownloadIcon />}>Download Report</Button>
        </Grid>
       
      </Grid>
      <div style={{display:'flex'}}>
 <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{color:"#fbbe36"}}
        >
          Revenue 
        </Typography>
         <Typography
          variant="h6"
          component="div"
          gutterBottom
          style={{paddingLeft:"80px"}}
        >
          Orders
        </Typography>
      </div>
         <Divider />
         <div style={{display:'flex', justifyContent:"space-between" , }}>
        <div style={{marginBottom:"30px"}}>
             <div style={{ display: "flex", paddingTop:'30px' }}>
            <Typography variant="h6" component="div" gutterBottom>
              Rs 128,051
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              style={{ color: "red", display: "flex", alignItems:"center"}}
            >
              <ArrowDownwardIcon style={uparrow} />
              45%
            </Typography>
            
          </div>
           <Typography variant="h6" component="div" gutterBottom style={{  display: "flex", alignItems:"center", marginTop:'-10px'}}>
              Revenue <InfoOutlinedIcon style={uparrow1}/>
            </Typography>
                <Typography variant="body1" component="div" gutterBottom >
              <strong>04 Jan. -10 Jan.</strong>
            </Typography>
         </div>
        
        <Button endIcon={<ArrowForwardIcon />}>Open End of Day Report </Button>

         </div>
         <SplineAreaChart/>
      </div>
      
        </div>
    )
}

export default SalesByDay
