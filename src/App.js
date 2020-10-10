import React from "react";
import "./App.css";
import Student from "./components/Student";
import leaderboard from './components/images/leaderboard.svg'

function App() {
  return (
    <div className="App">
    <img src={leaderboard} alt="leaderboard" width="200px" height="200px"/>
    <div className="leaderboardWrap">
      <h1 className="leadersboardHeading">Leadersboard
      
      </h1>
      <Student name="Nabeel" univeristy="IBA" score={349} />
      <Student name="Oneeba" univeristy="FAST" score={347} />
      <Student name="Samima" univeristy="IBA" score={346} />
      <Student name="Shahmir" univeristy="IBA" score={345} />
      <Student name="Hamza" univeristy="IBA" score={340} />
      <Student name="Abdullah" univeristy="IBA" score={341} />
      </div>
    </div>
  );
}

export default App;
