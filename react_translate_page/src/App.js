import React from "react";
import InitialPage from "./pages/InitialPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <Router>
        <Routes> 
          <Route path='/' element={<InitialPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
