import React from 'react'

export default function StopWatch() {
const timerIdRef = useRef(0);
const [count , setCount] = useState(0);

const StartHandler = () => {
    if(timerIdRef.current){
        return;
    }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
}

const StopHandler = () => {
    clearInterval(timerIdRef);
    timerIdRef.current = 0;
}

useEffect(() => {
    return () => clearInterval(timerIdRef)
}, []);

  return (
    <div>
      <div>Timer: {count}</div>
      <div>
      <button onClick={StartHandler}>Start</button>
      <button onClick={StopHandler}>Stop</button>
      </div>  
    </div>
  )
}
