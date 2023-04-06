import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
const App = () => {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
    </div>
    </Router>
    
    </NoteState>
    </>
  )
}

export default App
