import { useState } from "react";
import "./app.css";

const App = () => {
  // guarda los clics de cada botón en su propio estado
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
        <div>
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="all" value={good + neutral + bad} />
          <Statistics
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <Statistics
            text="positive"
            value={(good / (good + neutral + bad)) * 100 + " %"}
          />
        </div>
      ) : (
        <div>No feedback given</div>
      )}
    </>
  );
};

const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const Statistics = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};

export default App;
