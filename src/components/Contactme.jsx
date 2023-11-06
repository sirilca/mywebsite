import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contactme.css'
function Contactme() {

  const nav = useNavigate()
  const [name, setName] = useState()
  const [mail, setMail] = useState()
  const [message, setMessage] = useState()
  const [isvalid, setIsvalid] = useState(false)
  const[testmail,setTestmail]=useState(true)
  // const[data,setData] = useState([])

  const submitform = () => {
    setTestmail(isvalid)
  }
  
  
  const mailverify = (e) => {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/
    const inputvalue = e.target.value
    setIsvalid(regex.test(inputvalue))
    setMail(inputvalue)
  }


  return (

    <div className='contact'>

      <div className='imageicon'>
        <img src={require('./Images/siril-high-resolution-logo-transparent.png')}></img>
        <div className='bbutton'>
          <span style={{cursor:'pointer'}}onClick={() => { nav(-1) }}><i className="fa-solid fa-x"></i></span>
        </div>
      </div>

      <hr className='line'></hr>




      <div className='heading'>
        <h1>Thanks for taking the time to reach out. How can I help you today?</h1>
      </div>


      <div className='inputentry'>

        <div>
          <div className='emname'>

            <div className='name'>
              <label>Name</label>
              <input type='text' onChange={(e) => { setName(e.target.value) }} ></input>
            </div>

            <div className='email'>
              <label>Email</label>
              <input type='email' onChange={(e) => mailverify(e)}></input>
            </div>


          </div>

          <div className='warning'>
            {testmail ? <h4>&nbsp;</h4> : <h4>Enter a valid email id</h4>}
          </div>

          <div className='message'>
            <label>Message</label>
            <textarea style={{ resize: 'vertical' }} onChange={(e) => { setMessage(e.target.value) }}></textarea>
          </div>
        </div>

      </div>

      <div className='submit'>
        <span onClick={submitform}>Submit</span>
      </div>

      <div></div>
    </div>
  )
}

export default Contactme 