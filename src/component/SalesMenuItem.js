import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const downicon = {
  transform: "scale(.8)",
};

const doown_sale = (
  <div
    style={{
      display: "flex",
      color: "red",
      alignItems: "center",
      justifyContent: "flex-end",
    }}
  >
    <ArrowDownwardIcon style={downicon} />
    <strong>55%</strong>
  </div>
);
const up_sale = (
  <div
    style={{
      display: "flex",
      color: "green",
      alignItems: "center",
      justifyContent: "flex-end",
    }}
  >
    <ArrowUpwardIcon style={downicon} />
    <strong>8%</strong>
  </div>
);

const rows = [
  createData(
    <strong>1</strong>,
    "Americano Deal 1",
    <strong>Rs 27,944.00</strong>,
    doown_sale,
    56
  ),
  createData(
    <strong>2</strong>,
    "Double Shouble Deal 1",
    <strong>Rs 27,944.00</strong>,
    doown_sale,
    34
  ),
  createData(
    <strong>3</strong>,
    "French Fries",
    <strong>Rs 27,944.00</strong>,
    doown_sale,
    20
  ),
  createData(
    <strong>4</strong>,
    "Americano Deal 1",
    <strong>Rs 27,944.00</strong>,
    doown_sale,
    14
  ),
  createData(
    <strong>5</strong>,
    "Kentucky burger",
    <strong>Rs 27,944.00</strong>,
    up_sale,
    13
  ),
  createData(
    <strong>6</strong>,
    "Americano Deal 1",
    <strong>Rs 27,944.00</strong>,
    doown_sale,
    52
  ),
  createData(
    <strong>7</strong>,
    "Americano Deal 1",
    <strong>Rs 27,944.00</strong>,
    doown_sale,
    23
  ),
  createData(
    <strong>8</strong>,
    "Americano Deal 1",
    <strong>Rs 27,944.00</strong>,
    doown_sale,
    2
  ),
  createData(
    <strong>9</strong>,
    "Americano Deal 1",
    <strong>Rs 27,944.00</strong>,
    doown_sale,
    45
  ),
  createData(
    <strong>10</strong>,
    "Americano Deal 1",
    <strong>Rs 27,944.00</strong>,
    up_sale,
    32
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const tricon = {
  transform: "scale(.9)",
};

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Leaderboard",
  },
  {
    id: "calories",
    label: "Menu item",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Sales",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: <ChangeHistoryIcon style={tricon} />,
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Item Sold",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ borderBottom: "2px solid #fbbe36" }}>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function SalesMenuItem() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          style={{ padding: "10px 30px 0px 30px" }}
        >
          Sales by Menu Item
        </Typography>
          <Grid container spacing={0}>
        <Grid item xs={9} md={10}>
         <Typography
          variant="body1"
          component="div"
          gutterBottom
          style={{ padding: "10px 30px 0px 30px" }}
        >
         Ranking of which menu items are the most and least popular. Use this to see whih of your menu items are trending up or down over time. Note: this report does not include menu item additions like extra toppings.
        </Typography>
        </Grid>
        <Grid item xs={3} md={2} style={{display:'flex', alignItems:"center"}}>
          <Button  endIcon={<DownloadIcon />}>Download Report</Button>
        </Grid>
       
      </Grid>
        {/* <div style={{display:'flex', justifyContent:"space-between"}}>
         <Typography
          variant="body1"
          component="div"
          gutterBottom
          style={{ padding: "10px 30px 0px 30px" }}
        >
         Ranking of which menu items are the most and least popular. Use this to see whih of your menu items are trending up or down over time. Note: this report does not include menu item additions like extra toppings.
        </Typography>
        <Button endIcon={<DownloadIcon />}>Download Report</Button>
        </div> */}
       
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover>
                      <TableCell></TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
