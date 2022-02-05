import React, { useEffect, useState } from "react";
import Board from "./Board";
import { getQuestion } from "../api/OpenTriviaAPI";

/**
 * Returns the component that handles and stores the current state of the game.
 * Game component passes game state info to the Board component which will
 * distribute that info to the necessary children components.
 *
 * @returns {JSX.Element} The Game component.
 */
export default function Game() {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);

  // Get the question, answer, and incorrect answers
  useEffect(() => {
    getQuestion()
      .then(data => {
        console.log(data);
        setQuestion(data.results[0].question);

        let correct_answer = data.results[0].correct_answer;
        setCorrectAnswer(correct_answer);

        let possible_answers = data.results[0].incorrect_answers;
        possible_answers.push(correct_answer);
        setAnswers(possible_answers);
      })
      .catch(err => {
        console.log(err);
        setQuestion("");
        setCorrectAnswer(null);
        setAnswers([]);
      });
  }, []);

  return (
    <>
      <Board question={question} />
    </>
  );
}

/**
 * Returns an array that is a shuffled version of the input array.
 *
 * @param {Array} array The array to be shuffled.
 * @returns A new array with the same elements but shuffled.
 */
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}