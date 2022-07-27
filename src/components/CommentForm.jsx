import React from 'react'

const CommentForm = () => {
  return (
    <div>
        <h1>Add Comment</h1>
        <form>
            <input type="text" name="name"placeholder='Enter your name'/><br/>
            <textarea className='forminput' type='text' placeholder='Leave a comment' name='text' /><br/>
            <button type="submit" className='formbutton'>Write</button>
        </form>
    </div>
  )
}

export default CommentForm