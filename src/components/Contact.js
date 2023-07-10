import React from 'react'
import { useState } from 'react'

export default function Contact() {
    const [fname,setFirstname] = useState('')
    const [lname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [mobno,setMobile] = useState('')
    // const [bio,setBio] = useState('')
    const handleFirstname = (event) => {
        console.log("username changed",event.target.value);
        console.log(event.target);
        setFirstname(event.target.value)
        // username = abcd
    
      }
      const handleLastname = (event) => {
        console.log("username changed",event.target.value);
        console.log(event.target);
        setLastname(event.target.value)
        // username = abcd
    
      }
      const handleUseremail = (event) =>{
        console.log("email change",event.target.value);
        console.log(event.target);
        setEmail(event.target.value)
      }

      const handleMobile = (event) =>{
        setMobile(event.target.value)
      }
    
      // const handleBio = (event) =>{
      //   console.log("handle bio",event.target.value);
      //   setBio(event.target.value)
      // }
    
      const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("submit button clicked",fname);
        setFirstname('')
        setLastname('')
        setEmail('')
        setMobile('')
        // setBio('')
        alert(`Form submitted succesfully thank you Dear ${fname} ${lname},your email is: ${email} and your mobile number is: ${mobno}`)
      }
  return (
    <div className='user-form'>
      <h2>Enquiry form</h2>
      <form onSubmit={handleSubmit}>
        <label>First name:
            <input 
                type="text"
                value={fname}
                onChange={handleFirstname}
            />
        </label>
        <label>Last name:
            <input 
                type="text"
                value={lname}
                onChange={handleLastname}
            />
        </label>
        <label>Email:
            <input 
                type="email"
                value={email}
                onChange={handleUseremail} 
            />
        </label>
        <label>Mobile no.:
              <input 
                    type="text" 
                    value={mobno} 
                    onChange={handleMobile}
              />
        </label>
        {/* <label>Bio:
            <textarea 
                type="text" 
                value={bio}
                onChange={handleBio}
            />
        </label> */}
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
