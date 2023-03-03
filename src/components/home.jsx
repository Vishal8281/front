import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import News from "../components/data/data";
import Article from "./articles";

console.log("newsdata", News);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Card = ({ item}) => {
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Item style={{  height:"400px"}} >
        <h2>{item.title}</h2>
        <img
          style={{ width: "100%",height:"250px" }}
          src={item.image}
          alt="im"
        />
        <Link style={{textDecoration:"none",fontSize:"20px"}} variant="text" to="/article" state={item} >
          Read full Article
        </Link>
      </Item>
    </Grid>
  );
};




const Home = () => {


 
 return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

  
        <Box style={{ margin: "20px", }} sx={{ flexGrow: 1 }}>
          <Grid
          
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {News.map((item) => (
              <Card item={item} />
            ))}
          </Grid>
        </Box>
      
    </div>
  );
};

export default Home;
