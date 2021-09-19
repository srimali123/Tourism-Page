import React from 'react'
import "./Contact.css";
import Logo1 from "../assets/logo21.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import Facebook from "../assets/facebook.png";
import Whatsapp from "../assets/whatsapp.png";
import Linkedin from "../assets/linkedin1.png";

function Contact() {
    return (
        <div>
            <div>
            <img className="logofoot" src={Logo1}/>
            </div>
            
            <div className="social-media1">
            <a href="https://web.facebook.com/xiteb/"><img  className ="icons"src={Facebook}/></a>
            <a href="https://www.youtube.com/channel/UCCV5dO5L4t80MrZte0JOxcA"><img className ="icons" src={Youtube}/></a>
              <a href="#"> <img  className ="icons" src={Twitter} /></a>
              <a href="https://api.whatsapp.com/send/?phone=94727997711&text&app_absent=0"> <img  className ="icons" src={Whatsapp} /></a>
              <a href="https://www.linkedin.com/company/xiteb/"> <img  className ="icons" src={Linkedin} /></a>
               
            </div>
            <div className="leftp">
                <p>Mollit veniam mollit cillum velit in fugiat ea. 
                    Incididunt commodo labore et labore in duis nostrud.</p>

            </div>
            <div>
                <h4 className="part4h1">Contact Us</h4>
                </div>
        </div>

    )
}

export default Contact;
