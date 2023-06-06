import React, {useEffect} from 'react';
import Navigation from "./components/NavBar/Navigation";
import {Route, Routes} from "react-router-dom";
import ContainerArchive from "./components/Archive/ContainerArchive";
import ContainerMyCompetitions from "./components/MyCompetitions/ContainerMyCompetitions";
import ContainerCurrentCompetitions from "./components/CurrentCompetitions/ContainerCurrentCompetitions";

function App() {

  return (
    <div className="App container">
      <Navigation/>
      <Routes>
        <Route path="/" element={<ContainerArchive/>}/>
        <Route path="/archive" element={<ContainerArchive/>}/>
        <Route path="/my-competitions" element={<ContainerMyCompetitions/>}/>
        <Route path="/current-competitions" element={<ContainerCurrentCompetitions/>}/>
      </Routes>
    </div>
  );
}

export default App;
