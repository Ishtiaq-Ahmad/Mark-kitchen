import React from "react";
import "../style/menu.scss";
import Categories, { categoryList } from "../component/Categories";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Menu = () => {

  return (
    <div className="menu_div">
     <Typography variant="h5" gutterBottom component="div">
          Categories
        </Typography>
      <Grid container spacing={6}>
        {/* {categoryList.map((item) => { */}
          {/* return ( */}
          
            <Grid item xs={4}  xl={3}  >
              <Categories />
            </Grid>
             <Grid item xs={4}  xl={3} >
              <Categories />
            </Grid>
             <Grid item xs={4}  xl={3} >
              <Categories />
            </Grid>
             <Grid item xs={4}  xl={3} >
              <Categories />
            </Grid>
             <Grid item xs={4}  xl={3} >
              <Categories />
            </Grid>
             <Grid item xs={4}  xl={3}>
              <Categories />
            </Grid>
          {/* ); */}
        {/* })} */}
      </Grid>
    </div>
  );
};

export default Menu;
