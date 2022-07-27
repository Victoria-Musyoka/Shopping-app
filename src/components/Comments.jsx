import React ,{useState,useEffect} from 'react'
import CommentForm from './CommentForm'

// const URL= "http://localhost:4000/comments"

const Comments = () => {
const [comments,setcomments]=useState()
useEffect(()=>{
    fetch("http://localhost:4000/comments")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })

  },[])

  return (
    <div>
        <CommentForm/>
    </div>
  )
}

export default Comments