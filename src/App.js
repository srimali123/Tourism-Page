

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Cards from './Components/Cards';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
    
     </header>
     <Navbar/>
     <Content/>
     <Cards/>
     <Contact/>
    </div>
  );
}

export default App;
