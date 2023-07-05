import { useState } from 'react';
import './contact.scss';


export default function Contact() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] =useState();
  const [textArea, setTextArea] = useState();

 

   const handleSubmit = (e)=>{
    e.preventDefault();
     setMessage(true)
    setEmail('');
    setTextArea('')
    setTimeout(hideMessage, 1000);
    }
    function hideMessage(){
      setMessage(false);
      setEmail();
      setTextArea();
    }

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.jpg" alt="err" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' name='email' value={email} placeholder='Email' required/>
          <textarea placeholder='Message' name='textarea' value={textArea} required></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, for your query</span> }
        </form>
      </div>
    </div>
  )
}
