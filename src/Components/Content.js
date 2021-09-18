import React from 'react'
import T1 from "../assets/bg1.jpg";
import Button from '@mui/material/Button';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight'; 
import "./Content.css";
import KeyboardArrowRightTwoToneIcon from '@material-ui/icons/KeyboardArrowRightTwoTone';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
const Content = ()=>{
    const classes = useStyles();
    return (
        <div>
             <img className="bg1" src={T1}/>
             <p className="paragraph">Welcome to Beach Travel</p>
             <p className="paragraph1">Discover Your Favaourite</p>
              
             <p className="paragraph1">Place With Us</p>
             <button className="btn1"><a>START TODAY</a>
             <KeyboardArrowRightTwoToneIcon/>
             </button>

             
             
          
             
             
        </div>
    )
}

export default Content;
