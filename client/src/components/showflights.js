
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FlightIcon from '@mui/icons-material/Flight';
import { useState,useEffect } from 'react';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        // paddingTop:"2%",
        marginTop:"1%",
        marginLeft:"5%",
        marginRight:"5%",
        backgroundColor: "#e0faff"
    },
}));

export default function ShowFlights() {

    const classes = useStyles();
    const [datas,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/flights")
        .then((res) => {
            const response = res.data;
            setData([response])
        }).catch((error) => {
              console.log(error)
        });
      })

      let cards = "";
      for(let ind in datas){
        cards = datas[ind].map((ele) => (
            <Card className={classes.root} sx={{ minWidth: 275 }}>
            <FlightIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />

            <CardContent className={classes.root}>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                  Flight Name:  {ele.name}
                </Typography>
            
                <Typography varient="body2">
                    From: {ele.from}
                </Typography>
                <Typography variant="body2">
                    To: {ele.to}
                </Typography>
                <Typography varient="body2">
                    Start Date: {ele.startday.toString().slice(0,10)}
                </Typography>
                <Typography variant="body2">
                    Reach Date : {ele.reachday.toString().slice(0,10)}
                </Typography>
            </CardContent>
            <CardActions>
            <Button variant="contained">Book Tickets</Button>
            </CardActions>
            </Card>
        ))
      }
  return (
    <>
    {cards}
    </>
  );
}