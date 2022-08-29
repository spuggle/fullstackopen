import React, { useState } from "react";

const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;

const Feedback = ({ incrementGood, incrementNeutral, incrementBad }) => (
  <div>
    <h1>Give Feedback</h1>
    <Button label="Good" onClick={incrementGood} />
    <Button label="Neutral" onClick={incrementNeutral} />
    <Button label="Bad" onClick={incrementBad} />
  </div>
);

const StatisticLine = ({ label, statistic }) => <tr><td>{label}</td><td>{statistic}</td></tr>

const Display = ({ good, neutral, bad }) => {
  const totalReviews = good + neutral + bad;
  const averageScore = (good - bad) / totalReviews;
  const positivePercentage = (good / totalReviews) * 100;

  if (totalReviews === 0) {
    return <div>No feedback given</div>;
  }
  
  return (
    <div>
      <h1>Statistics</h1>
      <table>
      <tbody>
        <StatisticLine label="Good" statistic={good} />
        <StatisticLine label="Neutral" statistic={neutral} />
        <StatisticLine label="Bad" statistic={bad} />
        <StatisticLine label="Total" statistic={totalReviews} />
        <StatisticLine label="Average" statistic={averageScore} />
        <StatisticLine label="Positive" statistic={positivePercentage} />
      </tbody>
      </table>
    </div>
  );
}

function App() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);
  
  return (
    <>
      <Feedback
        incrementGood={incrementGood}
        incrementNeutral={incrementNeutral}
        incrementBad={incrementBad}
      />

      <Display good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
