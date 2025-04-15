
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HtmlAccordian from './components/HtmlAccordian';
import ReactAccordian from './components/ReactAccordian';
import CssAccordian from './components/CssAccordian';
import JavaScriptAccordian from './components/JavascriptAccordian';
import BootstrapAccordian from './components/BootstrapAccordian'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';

function App() {
  return (
   <>
   <Router basename="/PrepInterview">
   <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />   
                <Route path="/htmlpage" element={<HtmlAccordian />} />
                <Route path="/csspage" element={<CssAccordian />} />
                <Route path="/jspage" element={<JavaScriptAccordian />} />
                <Route path="/bootpage" element={<BootstrapAccordian />} />
                <Route path="/reactpage" element={<ReactAccordian />} />
            </Routes>
            </Router>
   </>
  );
}

export default App;
