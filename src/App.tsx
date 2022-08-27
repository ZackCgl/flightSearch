import React from 'react';
import SearchFlight from "./components/SearchFlight"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CheckDetails from './components/CheckDetails';
import FormData from './components/FormData';

function App() {
  return (
    <div className="flex justify-center mx-auto w-9/12 bg-gray-100 min-h-screen text-black">
      <Router>
          <Routes>
            <Route path="/" element={[<SearchFlight />]}></Route>
            <Route path="/form" element={[<FormData />]}></Route>
            <Route path="/overview" element={[<CheckDetails />]}></Route>
          </Routes>
      </Router>
     
    </div>
  );
}

export default App;
