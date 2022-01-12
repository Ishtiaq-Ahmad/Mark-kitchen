import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Grid from "@mui/material/Grid";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#fbbe36" : "#308fe8",
  },
}));
const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "black" : "#308fe8",
  },
}));

const uparrow = {
  transform: "scale(.8)",
};
const PreviousPeriod = () => {
  return (
    <div style={{ background: "#ffff", padding: "15px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox {...label} />
        <Typography variant="body1" component="div" gutterBottom>
          compare with Previous Period
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              style={{ paddingRight: "25px" }}
            >
              Rs 67,974
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
              Cash
            </Typography>
            <BorderLinearProgress variant="determinate" value={100} />
          </div>

          <Typography
            variant="body1"
            component="div"
            gutterBottom
            style={{ display: "flex", alignItems: "center" }}
          >
            <strong>vs.</strong>
          </Typography>
          <div>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              style={{ paddingLeft: "25px" }}
            >
              Rs 60,077
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              Online
            </Typography>
            <BorderLinearProgress1 variant="determinate" value={100} />
          </div>
        </div>
        {/* </div> */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography variant="h6" component="div" gutterBottom>
                Rs 67,97
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                Dilevery
              </Typography>
            </div>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0px 25px 0px 25px",
              }}
            >
              <strong>vs.</strong>
            </Typography>
            <div>
              <Typography variant="h6" component="div" gutterBottom>
                Rs 60,077
              </Typography>
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                Pick up
              </Typography>
            </div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={10}>
              <BorderLinearProgress variant="determinate" value={100} />
            </Grid>
            <Grid item xs={6} md={2}>
              <BorderLinearProgress1 variant="determinate" value={100} />
            </Grid>
          </Grid>
        </div>

        {/* *****************blaasss */}
        <div>
          {" "}
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" gutterBottom>
              Rs 816
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              style={{ color: "green", display: "flex" }}
            >
              <ArrowUpwardIcon style={uparrow} />
              16%
            </Typography>
          </div>
          <Typography variant="body1" component="div" gutterBottom>
            Avg. basket size
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default PreviousPeriod;
