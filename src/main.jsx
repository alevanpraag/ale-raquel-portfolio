import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom"

import Home from './App.jsx'
import ArtPage from './Art.jsx'
import Resume from './Resume.jsx'
import Contact from './Contact.jsx'
import './assets/css/index.css'

export default function App(props) {
  return (
       <div>
        <Router basename="/ale-raquel-portfolio/">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/art" element={<ArtPage/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>          
      </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)