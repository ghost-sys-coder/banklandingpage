import '../src/styles/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from '../src/components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Careers from './components/Careers';
import Requests from './components/Requests';


function App() {
  return (
    <BrowserRouter>
    <div className="app--container">
      <Navigation />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/careers' element={<Careers />} />
          <Route path='/requests' element={<Requests />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
