import React from 'react'

export const Contact = () => {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type='text' placeholder='Full Name' required />
            <input type='email' placeholder='Type Your E-mail' required />
            <textarea type="text" placeholder='Type something....' name='message'> </textarea>
            <input type='submit' value='Send' />
        </form>
    </div>
  )
}
