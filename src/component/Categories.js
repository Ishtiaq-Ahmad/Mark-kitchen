import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Pizza from "../assets/images/pizza.jpg";
import Sandwiches from '../assets/images/sandwich1.jpg'
import Fries from '../assets/images/Fries.jpg';
import Burger from '../assets/images/burger.jpg';
import Grilled from '../assets/images/grilled.jpg';
import Dumplings from '../assets/images/dumplings.jpg';
import "../style/menu.scss";
import Grid from "@mui/material/Grid";

export const categoryList = [
  {
    product_img: Pizza,
    product_name: "Pizza",
    product_price: 15,
    totalOrder: 150,
    Revenue: 1000,
  },
  {
    product_img: Sandwiches,
    product_name: "Sandwiches",
    product_price: 23,
    totalOrder: 150,
    Revenue: 1000,
  },
  {
    product_img: Fries,
    product_name: "Fries",
    product_price: 20,
    totalOrder: 100,
    Revenue: 2000,
  },
  {
    product_img: Burger,
    product_name: "Fries",
    product_price: 80,
    totalOrder: 100,
    Revenue: 2000,
  },
  {
    product_img: Grilled,
    product_name: "Fries",
    product_price: 90,
    totalOrder: 100,
    Revenue: 2000,
  },
  {
    product_img: Dumplings,
    product_name: "Fries",
    product_price: 91,
    totalOrder: 100,
    Revenue: 2000,
  },
];

const Categories = () => {
  return (
    <div style={{ padding:"20px"}}>
    <Typography variant="h4" gutterBottom component="div">
          Categories
        </Typography>
    <Grid container spacing={6}>
      {categoryList.map((item) => {
        return ( 
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} xxl={2}>
              <Card  key={item.product_price} className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.product_img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <div className="name_price">
                      <Typography gutterBottom variant="h5" component="div">
                        {item.product_name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        <span className="product_price">
                          ${item.product_price}
                        </span>
                      </Typography>
                    </div>
                    <div className="name_price">
                      <Typography variant="body1">
                        Total Order: <strong>{item.totalOrder}</strong>
                      </Typography>
                      <Typography variant="body1">
                        Revenue: <strong>${item.Revenue}</strong>
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    fullWidth
                    style={{ color: "black", background: "#fbbe36" }}
                  >
                    See More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          
        );
      })
      }</Grid>
    </div>
  );
};

export default Categories;
