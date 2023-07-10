import Home from './components/Home'
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './components/Style.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/Courses' Component={Courses}/>
          <Route path='/About' Component={About}/>
          <Route path='/Contact' Component={Contact}/>
        </Routes>
        
            <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
