import { useState } from "react";
import "./app.css";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = (props) => {
    const feedback = props;

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
      <Stat text="good" number={good} />
      <Stat text="neutral" number={neutral} />
      <Stat text="bad" number={bad} />
    </>
  );
};

const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const Stat = ({ text, number }) => {
  return (
    <div>
      {text} {number}
    </div>
  );
};

export default App;
