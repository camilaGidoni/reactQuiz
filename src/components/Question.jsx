import { useState, useEffect } from "react";
import Answers from "./Answers";
import QUESTIONS from '../questions';
import ProgressBar from './ProgressBar';

export default function Question({
    index,
    onSelectAnswer,
    onSkipAnswer,
}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    useEffect(() => {
        if (answer.selectedAnswer) {
            const timer = setTimeout(() => {
                onSelectAnswer(answer.selectedAnswer);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                onSkipAnswer();
            }, 15000);

            return () => clearTimeout(timer);
        }
    }, [answer.selectedAnswer, index, onSkipAnswer]);

    function handleSelectAnswer(ans) {
        setAnswer((prev) => {
            const newState = {
                ...prev,
                selectedAnswer: ans,
                isCorrect: QUESTIONS[index].answers[0] === ans
            };
            return newState;
        });
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }


    return (
        <div id="question">
            <ProgressBar
                timeOut={answerState === '' ? 15000 : 2000}
                onTimeOut={onSkipAnswer}
                mode={answerState}
            />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>
    );
}
