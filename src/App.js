
import './components/accordion/accordion.css'
import { Routes, Route } from 'react-router-dom';
import HtmlAccordian from './components/accordion/HtmlAccordian';
import ReactAccordian from './components/accordion/ReactAccordian';
import CssAccordian from './components/accordion/CssAccordian';
import JavaScriptAccordian from './components/accordion/JavascriptAccordian';
import BootstrapAccordian from './components/accordion/BootstrapAccordian'
import Navbar from './Navbar';
import './App.css';
import Home from './components/accordion/Home';



function App() {
  return (
   <>
   <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />   
                <Route path="/htmlpage" element={<HtmlAccordian />} />
                <Route path="/csspage" element={<CssAccordian />} />
                <Route path="/jspage" element={<JavaScriptAccordian />} />
                <Route path="/bootpage" element={<BootstrapAccordian />} />
                <Route path="/reactpage" element={<ReactAccordian />} />
            </Routes>
        
   </>
  );
}

export default App;
