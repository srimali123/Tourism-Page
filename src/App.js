

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Cards from './Components/Cards';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

function App() {
  return (
  
    <div className="App">
        
        
      <Header/>
      <Navbar/>
      <Content/>
     <Cards/>
     <Contact/>
     
      

     
      
   
    </div>
    
  );
}

export default App;
