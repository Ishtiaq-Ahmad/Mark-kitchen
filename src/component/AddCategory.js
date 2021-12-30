import React,{useState} from 'react'
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

const AddCategory = () => {
     const [_image, set_Image] = useState("");
    return (
        <div>
            <Typography variant="h6" component="div" gutterBottom>
        Add Category Form
      </Typography>
      <Divider />
      <div style={{ padding: "8px" }}>
        <Typography variant="body1" component="div" gutterBottom>
          Category Name
        </Typography>
        <TextField
          id="outlined-basic"
          label="Pizza"
          variant="outlined"
          fullWidth
          size="small"
        />
        <div style={{ display: "flex", marginTop: "15px" }}>
          <div style={{ marginRight: "5px" }}>
            <Typography variant="body1" component="div" gutterBottom>
              Revenue
            </Typography>
             <TextField
          id="outlined-basic"
          placeholder="$1000"
          variant="outlined"
          fullWidth
          size="small"
        />
          </div>
          <div style={{ marginLeft: "5px" }}>
            <Typography variant="body1" component="div" gutterBottom>
              Total Order
            </Typography>
           <TextField
          id="outlined-basic"
          placeholder="150"
          variant="outlined"
          fullWidth
          size="small"
        />
          </div>
        </div>
        <Typography variant="body1" component="div" gutterBottom>
              Price
            </Typography>
         <TextField
          id="outlined-basic"
          placeholder="15"
          variant="outlined"
          fullWidth
          size="small"
        />
        <div className="food_image">
          
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <input
                  type="file"
                  onChange={(e) => {
                    const selectImage = e.target.files[0];
                    set_Image(URL.createObjectURL(selectImage));
                  }}
                  name="image"
                  id="input"
                  accept="image/*"
                />
              </Grid>
              <Grid item xs={7} style={{ textAlign: "center" }}>
                <img src={_image} style={{ width: "100px" }} />
              </Grid>
            </Grid>
          </div>
         
        </div>
         <Button variant="contained" startIcon={<SaveIcon />} style={{
          float: "right",
          margin: "7px",
          color: "black",
          backgroundColor: "#fbbe36",
        }}>Save</Button>
        </div>
    )
}

export default AddCategory
