import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

export default function Summary({ userAnswers }) {
    
    const skippedAnswers = userAnswers.filter(ans => ans === null);
    const correctAnswers = userAnswers.filter((ans, index) => ans === QUESTIONS[index].answers[0]);

    const skippedShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongShare = 100 - skippedShare - correctShare;

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="complete quiz" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctShare}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongShare}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((ans, index) => {
                    let css = 'user-answer';
                    if (!ans) {
                        css += ' skipped';
                    } else if (ans === QUESTIONS[index].answers[0]) {
                        css += ' correct';
                    } else {
                        css += ' wrong';
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={css}>{ans ?? 'Skipped'}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
