import { useState,useEffect } from "react"

export default function Ex1(){
    const [time, setTime] = useState(new Date())

    useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []); 

    return (
        <div className="time">
            <p> {time.toLocaleTimeString()}</p>
        </div>
    )
}