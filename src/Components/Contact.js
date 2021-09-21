import React,{useState} from 'react'
import "./Contact.css";
import Logo1 from "../assets/logo21.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import Facebook from "../assets/facebook.png";
import Whatsapp from "../assets/whatsapp.png";
import Linkedin from "../assets/linkedin1.png";

 

function Contact() {
    const [status, setStatus]=useState("SEND");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus("sending....");
        const{name, email, message}=e.target.elements;
        let details ={
            name : name.value,
            email:email.value,
            message:message.value,

        };

        let respone = await fetch("http://localhost:5000/contact",{
            method:"POST",
            headers:{
                "Content-Type": "application/json;charset=utf-8",
            },
            body:JSON.stringify(details),
        });

        setStatus("SEND");
        let result = await Response.json();
        alert(result.status);
    };
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
                    Incididunt commodo labore et labore in duis nostrud.Mollit veniam mollit cillum velit in fugiat ea. 
                    Incididunt commodo labore et labore in duis nostrud.</p>
                    <div className="leftp-left">
                        <h5>Contact Details</h5>
                        <p>Lorem ipsum,</p>
                        <a href="#">Lorem@gmail.com</a><br/>
                    
                        <p className="p1">+94 11 222 3333 <br/>+94 11 222 3333</p>
                       

                    </div>
                    <div className="rightsection">
                        <h5>Quick Links</h5>
                        <a href="#">Home</a><br/>
                        <a href="#">Products</a><br/>
                        <a href="#">About Us</a><br/>
                        <a href="#">Contact Us</a><br/>
                        

                    </div>


            </div>
            <div className ="rightS" >
                <h4 className="part4h1">Contact Us</h4>
                 <form>
                     <div  className="contact_form">
                     <div >
                        
                         <input type="text" id="name" placeholder="Name" style={{  height:"40px",borderColor: 'rgb(38, 153, 0)' , borderWidth:'2px' , borderRadius:'12px', }}  required />
                     </div>
                     <div  className ="email">
                        
                        <input  type="email" id="email"  placeholder="Email" style={{height:"40px", borderColor: 'rgb(38, 153, 0)' , borderWidth:'2px' , borderRadius:'12px', }} required />
                    </div>
                    <div className="style">
                        <input type="text" id="contactnumber"  placeholder="Contact Number" style={{ height:"40px",width: "389px" , borderColor: 'rgb(38, 153, 0)' , borderWidth:'2px' , borderRadius:'12px', }} required />
                    </div>
                    <div className="style">
                        
                        <textarea id="message"  placeholder="Message"  style={{width: "389px", borderColor: "rgb(38, 153, 0)" , borderWidth:'2px' , borderRadius:'12px', height:'150px'}}required />
                    </div>
                    <button className="btnSubmit" type="submit">{status}</button>
                    </div>
                    </form>
                
                </div>
               <div className="footer">
                   <p>Copyright &copy; 2021. Lorem All rights reserved | Site by Xiteb</p>

               </div>
        </div>
       

    )
}

export default Contact;
