import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode })
{
    const [remaningTime, setRemaningTime] = useState(timeout);

    useEffect(() => {
        console.log("settimeout");
        const timer = setTimeout(onTimeout, timeout);

        return() => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);
    
    
    useEffect(() => {
        console.log("setinterval");
        const interval = setInterval(() => {
            setRemaningTime(prevTime => prevTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    

    return(
        <progress id="question-time" max={timeout} value={remaningTime} className={mode}/>
    );
}