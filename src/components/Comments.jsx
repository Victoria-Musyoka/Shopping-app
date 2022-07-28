import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import CommentForm from './CommentForm'

const commenturl='http://localhost:4000/comments'


const Header=styled.div`
margin:3rem;
`
const CommentFormInput=styled.div`
margin:3rem;
`
const Commentsection=styled.div`
margin:3rem;
width:60%;

`
const CommentBody=styled.div`
border:1px solid red;
border-top:none;
border-left:none;
border-right:none;
box-shadow: 0 3px 10px 0 #000;
margin:1.5rem;
`
const Header2=styled.div`
font-size:2.5rem;
color:red;

`
const Header4=styled.div`
font-size:2.5rem;
color:red;

`

function Comments() {
  const [comments, setComments]=useState([])

  useEffect(()=>{
    fetch(commenturl)
    .then(res=>res.json())
    .then(data=>{
      setComments(data)
    })

  },[])
  const displayComments=comments.map((comment)=>(
    <div className='Mycomments' key={comment.id}>
         <CommentBody>
         <Header2>Name: <span className='name'>{comment.name}</span></Header2>
         <Header4> Description:<span className='description'>{comment.description}</span></Header4>
        </CommentBody>

    </div>
  ))
  const onAddReview=(addNewComment)=>{
    setComments([...comments,addNewComment])
  }

  return (
    <div>
      <Header><h1>Add A review</h1></Header>
      <CommentFormInput>
      <CommentForm  onAddReview={onAddReview}/>
      </CommentFormInput>
      <Commentsection>
        <h2 className='commentHeader'>Comment Section</h2>
       { displayComments}
      </Commentsection>

    </div>
  )
}

export default Comments