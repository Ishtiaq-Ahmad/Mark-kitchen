import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: '#ca2129',
     backgroundColor: '#fbbe36',
    color: theme.palette.common.black,
  },
 
}));

const columns = [
  { id: "customer_id", label: "Customer ID", minWidth: 170 },
  { id: "customer_name", label: "Customer Name", minWidth: 100 },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email_id",
    label: "Email ID",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "orderd_item",
    label: "Ordered Item",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "bill",
    label: "Bill",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
function createData(customer_id, customer_name, location, email_id, orderd_item, bill) {
//   const orderd_item = location / email_id;
  return { customer_id, customer_name, location, email_id, orderd_item,bill };
}

const rows = [
    createData('01475', 'Joe', 'street 21', 'ali@gmail.com', 'sandwich', 46),
    createData('02351', 'Max Marsh', 'Hall Street', 'max@gmail.como','Noodles', 56),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),
    createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com','Burger', 49),

  
];


const CustomerList = () => {
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
    <div>
      <Typography variant="h6" gutterBottom component="div">
        CUSTOMERS LIST
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
                      key={row.customer_name}
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
  );
};

export default CustomerList;
