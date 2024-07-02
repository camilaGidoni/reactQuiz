import quizImg from '../assets/quiz-logo.png'

export default function Header() {
    return (
        <header>
            <img src= {quizImg} alt="react-quiz"/>
            <h1> React Quiz</h1>
        </header>
    )
}