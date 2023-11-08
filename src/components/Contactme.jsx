import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com'
import './Contactme.css'
function Contactme() {

  const nav = useNavigate()
  const [name, setName] = useState()
  const [mail, setMail] = useState()
  const [message, setMessage] = useState()
  const [isvalid, setIsvalid] = useState(false)
  const[testmail,setTestmail]=useState(true)
  // const[data,setData] = useState([])
  const formRef = useRef()
  const submitform = (e) => {
    e.preventDefault()
    setTestmail(isvalid)
    if(isvalid){
      console.log('validd')
      emailjs.sendForm('service_qup782i', 'template_ryvb5pb', formRef.current, 'XeRBFKh5BwdgB76jJ')
      .then(res=>console.log(res))
      .catch(err=>console.log("error occured",err))
      nav(-1)
    }
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

      
      <form ref={formRef} onSubmit={submitform}>
        <div className='inputentry'>
          <div>
            <div className='emname'>
              <div className='name'>
                <label>Name</label>
                <input type='text' name='from_name' value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className='email'>
                <label>Email</label>
                <input type='email' name='from_mail' value={mail} onChange={(e) => { setMail(e.target.value); mailverify(e); }} />
              </div>
            </div>

            <div className='warning'>
              {testmail ? <h4>&nbsp;</h4> : <h4>Enter a valid email id</h4>}
            </div>

            <div className='message'>
              <label>Message</label>
              <textarea name='message' style={{ resize: 'vertical' }} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
          </div>
        </div>

        <div className='submit'>
          <span>

          <button type='submit'>Submit</button>
          </span>
        </div>
      </form>
      <div></div>
    </div>
  )
}

export default Contactme 
