import { useEffect, useState } from "react"
export default function ProgressBar({ timeOut, onTimeOut, mode }) {

    const [remainingTime, setRemainingTime] = useState(timeOut)

    useEffect(() => {
        const timer = setTimeout(onTimeOut, timeOut)
        return () => {
            clearTimeout(timer)
        }
    }, [timeOut, onTimeOut])

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setRemainingTime((prev) => prev - 100,0)
        }, 100)
        return () => {
            clearInterval(timerInterval)
        }
    }, [])

    useEffect(() => {
        setRemainingTime(timeOut); // Reset remaining time when timeOut changes
    }, [timeOut]);

    return (
        <progress id="question-time"
            value={remainingTime}
            max={timeOut}
            className={mode}
        />
    )
}