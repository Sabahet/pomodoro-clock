import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import React, { useEffect } from 'react'
import {useState} from 'react'

momentDurationFormatSetup(moment)

const TimeLeft = ({sessionLength,breakLength,timerLabel,handleStartStop,startStopLabel,timeLeft}) => {
  



    const formattedTime = moment.duration(timeLeft,'s').format('mm:ss', {trim: false})
    return (
        <div>
            <p id="timer-lable"> {timerLabel}</p>
            <p id = "time-left" > {formattedTime} </p>
            
            <button onClick = {handleStartStop}>{startStopLabel } </button> 
        </div>
    )
}

export default TimeLeft
