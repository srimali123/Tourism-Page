import React from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";
import Contact from "./Contact";


const Navbar = ()=>{
    return(
        
<div>
<div class="navbar">
  <a class="nav-link nav-link-ltr" href="#">Home</a>
  <a class="nav-link nav-link-ltr" href="#">About</a>
  <a class="nav-link nav-link-ltr" href="#">Solutions</a>
  <a class="nav-link nav-link-ltr" href="#">Get Started</a>
  <a class="nav-link nav-link-ltr" href="#">Research</a>
  <a class="nav-link nav-link-ltr" href="#">Reports</a>
  <a class="nav-link nav-link-ltr" href="#">Branches</a>
  <a class="nav-link nav-link-ltr" href="#">FAQ</a>
  <a a class="nav-link nav-link-ltr" href="/contact" >Contact us</a>

</div>


    
</div>
    
    )
}

export default Navbar;