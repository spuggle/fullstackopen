import React, { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients."
  ];

  const [ selectedIndex, selectIndex ] = useState(0);
  const [ points, updatePoints ] = useState(Array(anecdotes.length).fill(0));

  const highestVotes = Math.max(...points);
  const highestVotedIndex = points.indexOf(highestVotes);

  const randomizeAnecdote = () => selectIndex(Math.floor(Math.random() * anecdotes.length));
  const increasePoint = () => updatePoints([
    ...points.slice(0, selectedIndex),
    points[ selectedIndex ] + 1,
    ...points.slice(selectedIndex + 1)
  ]);
  
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <div>{anecdotes[ selectedIndex ]}</div>
      <div>Has {points[ selectedIndex ]} votes</div>
      <button onClick={increasePoint}>Vote</button>
      <button onClick={randomizeAnecdote}>Next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[highestVotedIndex]}</div>
      <div>Has {points[ highestVotedIndex ]} points</div>
    </div>
  );
}

export default App;
