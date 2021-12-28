import React from "react";
import "../style/menu.scss";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddProduct from "./AddProduct";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #fbbe36",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: '#ca2129',
    backgroundColor: "#fbbe36",
    color: theme.palette.common.black,
  },
}));

const columns = [
  { id: "product_id", label: "Produt ID", minWidth: 170 },
  { id: "product_name", label: "Product Name", minWidth: 100 },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(product_id, product_name, quantity, status, price) {
  //   const price = quantity / status;
  return { product_id, product_name, quantity, status, price };
}

const rows = [
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
  createData("01475", "French Fries", 1324, "In Stock", 200),
];
const MenuList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="menu_div">
      <Typography variant="h6" gutterBottom component="div">
        PRODUCT LIST
      </Typography>
      <Divider />
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
        style={{
          float: "right",
          margin: "10px",
          color: "black",
          backgroundColor: "#fbbe36",
        }}
      >
        Add Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddProduct />
        </Box>
      </Modal>
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
                      key={row.product_name}
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

export default MenuList;
