
import './App.css';
import Session from "./components/Session";
import Break from "./components/Break";
import TimeLeft from "./components/TimeLeft";
import {useState}from 'react';
import {useEffect} from 'react';
import {useRef} from 'react'

function App() {
  const audioElement = useRef(null)
  const [currentSessionType, setCurrentSessionType] = useState('Session')
  const [intervalID,setIntervalId] = useState(null)
  const [breakLength,setBreakLength] = useState(300);
  const [sessionLength,setSessionLength] = useState(60*25);

  const isStarted = intervalID != null;
  const [timeLeft,setTimeLeft] = useState(sessionLength);


  useEffect(() => {
  setTimeLeft(sessionLength)
  
  }, [sessionLength])

  const handleStartStop = () => {
    if(isStarted){
    
    clearInterval(intervalID)
    setIntervalId(null)
    
    }else{
    
    
        const newIntervalId = setInterval(() => {
            setTimeLeft(prevTimeleft => {
            const newTimeLeft = prevTimeleft-1
            if(newTimeLeft >=0){
                return prevTimeleft

            }
audioElement.current.play()

            if(currentSessionType === 'Session'){
    setCurrentSessionType('Break')
    return breakLength
            }
    else if(currentSessionType === 'Break'){
        setCurrentSessionType('Session')
        return sessionLength
    }
    
    
        });
        
    
    setTimeLeft(prevTimeleft => prevTimeleft-1)
        },1000)
    setIntervalId(newIntervalId)
    }
    
    
    }



  const decSessionLength = () => {
  const newLength =sessionLength-60;
  
  if(newLength > 0){
  
      setSessionLength(newLength)
  }
  
  }
  
  const incSessionLength = () =>{
const newLength = sessionLength+60
if(sessionLength <= 60*60)
  setSessionLength(newLength)
  
  }


  const decBreakLength = () => {
  const newLength =breakLength-60;
  
  if(newLength>0){
    setBreakLength(newLength)
  }
  
  }
  
  const incBreakLength = () =>{
    const newLength = breakLength+60
    if(newLength <= 60*60)
  setBreakLength(newLength)
  
  }
  
  const HandleResetButtonClick = () => {
clearInterval(intervalID)
setIntervalId(null)
setCurrentSessionType('Session')
setSessionLength(60*25)
setBreakLength(60*5)
setTimeLeft(60*25)
audioElement.current.load()


  }
  
  return (
    <div className="App">
      <Break
      breakLength = {breakLength}
      decBreakLength = {decBreakLength}
      incBreakLength = {incBreakLength}
      
      />

<TimeLeft 
sessionLength = {sessionLength}
breakLength = {breakLength}
timerLabel = {currentSessionType}
handleStartStop = {handleStartStop}
startStopLabel = {isStarted? 'Stop' : 'Start'}
timeLeft = {timeLeft}

/>
      <Session
      sessionLength = {sessionLength}
      decSessionLength = {decSessionLength}
      incSessionLength = {incSessionLength}
      />

      <button id= "reset" onClick = {HandleResetButtonClick}>Reset</button>
      <audio id ="beep" ref = {audioElement}> 
      <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
