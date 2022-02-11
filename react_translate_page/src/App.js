import React from "react";
import InitialPage from "./pages/InitialPage/InitialPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RightAlternative from "./pages/InitialPage/RightAlternative/RightAlternative";


function App() {
  return (
    <div className="App">
        <Router>
        <Routes> 
          <Route path='/' element={<InitialPage/>}/>
          <Route path='/rightalternative' element={<RightAlternative/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
