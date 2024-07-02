import { useState, useCallback } from "react";
import QUESTIONS from '../questions';
import Summary from "./Summary";
import Question from './Question';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const quizIsComplete = userAnswers.length === QUESTIONS.length;
    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prev) => {
            return [...prev, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => {
        setUserAnswers((prev) => [...prev, null]);
    }, []);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}
