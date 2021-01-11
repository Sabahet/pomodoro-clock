import moment from 'moment'
import React from 'react'
//import {useState} from 'react'

const Session = ({
        sessionLength,
        decSessionLength,
        incSessionLength
}) => {

const sessionInMin = moment.duration(sessionLength,'s').minutes()
    return (
        <div>
<p id="session-label"> Session </p>
<p id="session-length"> {sessionInMin}</p>
<button id = "session-dec" onClick={decSessionLength}> - </button>
<button id = "session-inc " onClick={incSessionLength} >  + </button>

        </div>
        
    )
}

export default Session
