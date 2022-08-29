import React, { useState } from "react";

const Button = ({ onClick, label }) => <button onClick={onClick}>{label}</button>

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>This app is used by pressing the buttons</div>
    )
  }

  return (
    <div>Button press history: {allClicks.join(" ")}</div>
  )
}

const App = () => {
  const [ left, setLeft ] = useState(0);
  const [ right, setRight ] = useState(0);
  const [ allClicks, setAll ] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  }
  
  return (
    <>
      {left}
      <Button label="Left" onClick={handleLeftClick} />
      <Button label="Right" onClick={handleRightClick} />
      {right}
      <History allClicks={allClicks} />
    </>
  );
};

export default App;
