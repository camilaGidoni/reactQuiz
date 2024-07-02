import { useRef } from "react";

export default function Answers ({answers, selectedAnswer, answerState, onSelectAnswer}) {
    const shuffleAnswers = useRef();

    if(!shuffleAnswers.current){
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }

    function markAnswerByColor(ans) {
        const isSelected = selectedAnswer === ans;
        if (answerState === 'answered' && isSelected) {
            return 'answered';
        }
        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
            return answerState;
        }
        return '';
    }

    return (
        <ul id="answers">
            {shuffleAnswers.current.map((ans) => (
                <li key={ans} className="answer">
                    <button
                        onClick={() => {
                            onSelectAnswer(ans);
                        }}
                        className={markAnswerByColor(ans)}
                        disabled={answerState !== ""}
                    >
                        {ans}
                    </button>
                </li>
            ))}
        </ul>
    );
}
