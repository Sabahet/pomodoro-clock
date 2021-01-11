import moment from 'moment'
import React from 'react'
//import {useState} from 'react'

const Break = ({
    breakLength,
    decBreakLength,
    incBreakLength
}) => {


const breakInMin = moment.duration(breakLength,'s').minutes()
    return (
        <div>
<p id="break-label"> Break </p>
<p id="break-length"> {breakInMin}</p>
<button id = "break-dec" onClick={decBreakLength}> - </button>
<button id = "break-inc " onClick={incBreakLength} >  + </button>

        </div>
        
    )
}

export default Break
