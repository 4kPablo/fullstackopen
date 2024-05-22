import { useState } from "react";
import "./styles.css";

const App = () => {
  // Guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);

  const clickHandler = (props) => {
    const feedback = props;
    setHasFeedback(true);

    if (feedback === "good") {
      const updatedGood = good + 1;
      setGood(updatedGood);
    }
    if (feedback === "neutral") {
      const updatedNeutral = neutral + 1;
      setNeutral(updatedNeutral);
    }
    if (feedback === "bad") {
      const updatedBad = bad + 1;
      setBad(updatedBad);
    }
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" clickHandler={() => clickHandler("good")} />
      <Button text="neutral" clickHandler={() => clickHandler("neutral")} />
      <Button text="bad" clickHandler={() => clickHandler("bad")} />

      <h2>statistics</h2>
      {hasFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <div>No feedback given</div>
      )}
    </>
  );
};

const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + neutral + bad} />
      <StatisticLine
        text="average"
        value={(good - bad) / (good + neutral + bad)}
      />
      <StatisticLine
        text="positive"
        value={(good / (good + neutral + bad)) * 100 + " %"}
      />
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default App;
