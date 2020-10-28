import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import data from "../../json files/data.json";
import './about.module.css'

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
  },
  p:{

  }

})
let abouts = [{eventName:"Nukkad",id:0,about:''}];
for (var key in data) {
  if (data.hasOwnProperty(key)) {
    abouts.push({eventName:key,about:data[key].about});
    abouts.forEach((item, i) => {
      item.id = i + 1;
    }); 
  }
} 
console.log(abouts)

let specificAbout = abouts[1].about;

console.log(specificAbout)
const AboutPage = () => {
  const classes = useStyles();
  return(
    <Card className={classes.card}>
      <h1 className={classes.h1}>About</h1>
      <ul>
        {
          <p>{specificAbout}</p>
        }
      </ul>
    </Card>
)};

export default AboutPage;
