import React, { useState } from "react";

const postUrl = "https://hurricane-diligent-lipstick.glitch.me/comments";

const CommentForm = ({onAddReview}) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleInput = (event) => {
    setDescription(event.target.value);
    // console.log(event.target.value)
  };
  const handleInputName=(event)=>{
    setName(event.target.value)

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted successfully");

    const inputData = {
      name: name,
      description: description,
    };

    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((addNewComment) => onAddReview(addNewComment));

    setDescription("");
    setName("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"name="text" 
        className="forminput"
         value={name}
         placeholder="Enter Your name"
         onChange={handleInputName}
        /><br/><br/>
        <textarea
          className="forminput"
          type="text"
          placeholder="Leave a comment"
          name="text"
          value={description}
          onChange={handleInput}
        />
        <br/><br/>
        <button type="submit" className="formbutton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
