import React from "react";
import  ReactDOM from "react-dom";
import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import Insta from "../assets/insta.png";
import Facebook from "../assets/facebook.png";
import Logo1 from "../assets/logo21.png";
import {IconButton} from "@material-ui/core";
import {  SearchOutlined} from "@material-ui/icons";



const Header = ()=>{
    
    return(
        <div>
     <div className="div-header">
       <section>
           <div className="social-media">
              <a href="#"> <img  className ="icons" src={Twitter} /></a>
               <a href="https://www.youtube.com/channel/UCCV5dO5L4t80MrZte0JOxcA"><img className ="icons" src={Youtube}/></a>
               <a href="https://www.instagram.com/xiteb_official/"><img className ="icons"src={Insta}/></a>
               <a href="https://web.facebook.com/xiteb/"><img  className ="icons"src={Facebook}/></a>

              
            </div>
            <div className ="logo1">
                    <img className="logo" src={Logo1}/>
            </div>
            <div class="row">
            </div>
            <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control"/>
  </div>
  
  

            
                </section>
                    
                </div>
                </div>

    
    )
}

export default Header;