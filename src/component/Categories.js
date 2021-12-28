import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pizza from '../assets/images/pizza.jpg';
import '../style/menu.scss'

export const categoryList =[
    {
        product_img : Pizza,
        product_name: 'Pizza',
        product_price: 15,
        totalOrder: 150,
        Revenue: 1000,
    },
    // {
    //     product_img : Pizza,
    //     product_name: 'Sandwiches',
    //     product_price: 23,
    //     totalOrder: 150,
    //     Revenue: 1000,
    // },
    // {
    //     product_img : Pizza,
    //     product_name: 'Fries',
    //     product_price: 20,
    //     totalOrder: 100,
    //     Revenue: 2000,
    // },
]

const Categories = () => {
    return (
        <div>
        {
            categoryList.map((item) => {
                return (
                <Card sx={{ maxWidth: 345 }} key = {item.product_price}>
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
            <span className="product_price">${item.product_price}</span>
          </Typography>
          </div>
          <div className="name_price">
          <Typography variant="body1">
            Total Order: <strong >{item.totalOrder}</strong>
          </Typography>
          <Typography variant="body1">
            Revenue: <strong >${item.Revenue}</strong>
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  fullWidth style={{color:'black',background:'#fbbe36'}}>
          See More
        </Button>
      </CardActions>
    </Card>)

            })
            
        }
             
        </div>
    )
}

export default Categories
