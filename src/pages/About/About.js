import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  card:{
    padding:"25px",
    display:"flex",
    flexDirection:"column",
    '&:hover':{
      backgroundColor:"blue",
    }
  },
  h1:{
    marginBottom:"20px",
  }
})

const AboutPage = () => {
  const classes = useStyles();

  return(
  <Card className={classes.card}>
    <h1 className={classes.h1}>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate labore, deleniti enim tenetur sed reiciendis recusandae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate labore, deleniti enim tenetur sed reiciendis recusandae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate labore, deleniti enim tenetur sed reiciendis recusandae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate labore, deleniti enim tenetur sed reiciendis recusandae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate labore, deleniti enim tenetur sed reiciendis recusandae.</p>
  </Card>
)};

export default AboutPage;
