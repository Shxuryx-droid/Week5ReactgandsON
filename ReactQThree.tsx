// scorecalculatorapp/src/App.js

import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name={"Steephan"}
        School={"Zphs"}
        Total={280}
        Goal={3}
      />
    </div>
  );
}

export default App;

// scorecalculatorapp/src/Components/CalculateScore.js

import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  return (
    <div>
      <h1>Student Details</h1>
      <p>
        <b>Name:</b> {props.Name}
      </p>
      <p>
        <b>School:</b> {props.School}
      </p>
      <p>
        <b>Total:</b> {props.Total}
      </p>
      <p>
        <b>Goal:</b> {props.Goal}
      </p>
      <p>
        <b>Average:</b> {props.Total / props.Goal}
      </p>
    </div>
  );
}

export default CalculateScore;

// scorecalculatorapp/src/Stylesheets/mystyle.css

body {
  font-family: sans-serif;
  text-align: center;
}

h1 {
  color: green;
}
