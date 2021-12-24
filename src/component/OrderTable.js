import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Typography from "@mui/material/Typography";

const columns = [
  { field: 'id', headerName: 'Order ID', width: 90 },
  { field: 'orderName', headerName: 'Order Name', width: 130 },
  { field: 'customerName', headerName: 'Customer Name', width: 130 },
  {
    field: 'location',
    headerName: 'Location',
    width: 150,
  },
  {
    field: 'orderStatus',
    headerName: 'Order Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'orderName') || ''} ${
    //     params.getValue(params.id, 'customerName') || ''
    //   }`,
  },
   {
    field: 'deliveredTime',
    headerName: 'Delivered Time',
    width: 150,
  },
   {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 100,
  },
];

const rows = [
  { id: 1, customerName: 'Snow', orderName: 'Jon', location: 'Islambad',orderStatus: 'Pending', deliveredTime: '12:05', price: `$20` },
  { id: 2, customerName: 'Lannister', orderName: 'Cersei', location: 'Karchi',orderStatus: 'Cancelled', deliveredTime: '12:05', price: `$20` },
  { id: 3, customerName: 'Lannister', orderName: 'Jaime', location: 'Lahore', orderStatus: 'Delivered', deliveredTime: '12:05', price: `$20` },
  { id: 4, customerName: 'Stark', orderName: 'Arya', location: 'Peshawar', orderStatus: 'Delivered', deliveredTime: '12:05', price: `$20` },
  { id: 5, customerName: 'Targaryen', orderName: 'Daenerys', location: 'Faisal Abad', orderStatus: 'Delivered', deliveredTime: '12:05', price: `$20` },
  { id: 6, customerName: 'Melisandre', orderName: null, location: 'Rawalpindi', orderStatus: 'Delivered', deliveredTime: '12:05', price: `$20` },
  { id: 7, customerName: 'Clifford', orderName: 'Ferrara', location: 'Gujrat',orderStatus: 'Pending', deliveredTime: '12:05', price: `$20` },
  { id: 8, customerName: 'Frances', orderName: 'Rossini', location: 'HaidarAbad', orderStatus: 'Cancelled', deliveredTime: '12:05', price: `$20` },
  { id: 9, customerName: 'Roxie', orderName: 'Harvey', location: 'Sahiwal', orderStatus: 'Cancelled', deliveredTime: '12:05', price: `$20` },
];


const OrderTable = () => {
    return (
        <div className="order_table" >
        <Typography variant="h6" gutterBottom component="div">
          RECENTLY PLACED ORDERS
        </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    )
}

export default OrderTable
