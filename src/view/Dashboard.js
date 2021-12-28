import React from "react";
import "../style/dashboard.scss";
import Chart from "../component/charts/UserChart";
import Grid from "@mui/material/Grid";
import DailyeSale from "../component/charts/DailyeSale";
import TotalOrder from "../component/charts/TotalOrder";
import OrderTable from "../component/OrderTable";
import RecentOrder from '../component/RecentOrder'

const Dashboard = () => {
  return (
    <div className="dashboard_div">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Chart />
        </Grid>
        <Grid item xs={4}>
          <DailyeSale />
        </Grid>
        <Grid item xs={4}>
          <TotalOrder />
        </Grid>
      </Grid>
      <div className="dashboard_table">
        <OrderTable />
      </div>
      <div style={{marginTop:'35px'}}>
<Grid container spacing={2} >
        <Grid item xs={6}>
          <RecentOrder />
        </Grid>
       
      </Grid>
      </div>
      
    </div>

  );
};

export default Dashboard;
