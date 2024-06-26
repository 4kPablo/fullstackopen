import { useState } from "react";
import "./styles.css";

const App = () => {
  const [points, setPoints] = useState(new Array(8).fill(0));
  const [selected, setSelected] = useState(getRandomInt(8));
  const [mostVoted, setMostVoted] = useState(null);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const voteHandler = () => {
    const updatedPoints = [...points];
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
    selectMostVoted(updatedPoints);
  };

  const selectMostVoted = (points) => {
    let mostVotedIndex = null;
    let highestVotes = 0;

    points.forEach((votes, i) => {
      if (votes > highestVotes) {
        highestVotes = votes;
        mostVotedIndex = i;
      }
    });

    setMostVoted(anecdotes[mostVotedIndex]);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button
        onClick={() => {
          voteHandler();
        }}
      >
        vote
      </button>
      <button
        onClick={() => {
          setSelected(getRandomInt(8));
        }}
      >
        next anecdote
      </button>

      <h2>Anecdote with most votes</h2>
      <div>{mostVoted}</div>
    </>
  );
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export default App;
