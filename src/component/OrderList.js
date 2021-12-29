import React from 'react'
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import '../style/order.scss'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fbbe36",
    color: theme.palette.common.black,
  },
}));

const columns = [
  { id: "order_id", label: "Oorder ID", minWidth: 100 },
  { id: "order_name", label: "Order Name", minWidth: 170 },
  {
    id: "customer_name",
    label: "Customer Name",
    minWidth: 170,
  },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
  },
  {
    id: "order_status",
    label: "Order Status",
    minWidth: 170,
  },
  {
    id: "delivered_time",
    label: "Delivered Time",
    minWidth: 170,
  },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
  },
];

function createData(order_id, order_name, customer_name, location,order_status,  delivered_time,price) {
  return { order_id, order_name, customer_name, location,order_status, delivered_time, price };
}

const rows = [
  createData("1", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("2", "Mango Pie", 'Krisiten',"Old Town", <span className="canceled_order">Cancelled</span>, '10:05', 10),
  createData("3", "Fried Edd Sandwich", 'Jack Suit',"Islambad", <span className="delivered_order">Delivered</span>, '10:05', 10),
  createData("4", "Lemon Yogurt", 'Alesdro ',"Peshawar", <span className="delivered_order">Delivered</span>, '10:05', 10),
  createData("5", "Spicy Grill Sanswich", 'Jacob Sahwny',"Lahore", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("6", "Sandwich", 'Jhon Leo',"Karachi", <span className="canceled_order">Cancelled</span>, '10:05', 10),
  createData("7", "Spaghetti", 'Multan',"Ishtiaq Ahmad", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("8", "Fried Rice", 'Faisal Abad',"Sohail Ahmad", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("9", "Noodles", 'Jhon Leo',"M Ibrahim", <span className="delivered_order">Delivered</span>, '10:05', 10),
  createData("10", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("11", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("12", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("13", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("14", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("15", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10),
  createData("16", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10),

  
];


const OrderList = () => {
      const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    return (
        <div className="order">
        <div className="order_head">
             <Typography variant="h6" component="div" gutterBottom>
          ORDER LIST
        </Typography>
        </div>
      <Divider />
      <div style={{padding:'30px'}}>
      <Paper sx={{ width: "100%", overflow: "hidden" }} >
        <TableContainer sx={{ maxHeight: 640 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.order_id}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      </div>
        </div>
    )
}

export default OrderList
