import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';

import Login from './components/Login';
import Signup from './components/Signup';
import AlertState from './context/alert/AlertState';
import Alert from './components/Alert';

function App() {
  return (

    <AlertState>

    <NoteState>
      

        <BrowserRouter>
          <Navbar />
          <Alert/>
          
          

          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />

            </Routes>
          </div>

        </BrowserRouter>
    </NoteState>
    </AlertState>
  );
}

export default App;
