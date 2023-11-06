import React from 'react'
import { useNavigate } from 'react-router-dom'

function Aboutme() {
    const nav = useNavigate()
  return (
    <div> 

          <button onClick={() => { nav(-1) }}>GO BACK</button>
    </div>
  )
}

export default Aboutme