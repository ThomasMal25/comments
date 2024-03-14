import React, { useState } from 'react';
function Card(props) {
  const [comments, setComments] = useState(props.comments);
  const [subComment, setSubComment] = useState(false);
  const [textReply, setTextReply] = useState('');

  const handleLikeClick = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].like += 1;
    setComments(updatedComments);
  };

  const reply = (index) => {
    const newComments = [...comments];
    newComments[index].reply = { text: textReply }; // Correct the reply object structure
    setComments(newComments);
    setTextReply('');
    setSubComment((val) => !val); // Clear the reply input field after adding the reply
  };

  const textSetter = (e) => {
    setTextReply(e.target.value);
  };
  const onClose = () => {
    setSubComment((val) => !val);
  };

  return (
    <div>
      {props.comments.map((items, index) => (
        <div
          key={index}
          className="rounded-2xl min-h-max shadow-sm border-2 m-2 w-30 p-4 "
        >
          <p className="m-2">{items.comment} </p>
          {items.reply && <p>{items.reply.text}</p>}
          <button
            className="m-2 items-start"
            onClick={() => handleLikeClick(index)}
          >
            like{items.like}
          </button>
          <button onClick={onClose}>Reply</button>

          {subComment ? (
            <>
              <input type="text" value={textReply} onChange={textSetter} />
              <button onClick={() => setSubComment((val) => !val)}>X</button>
              <button onClick={() => reply(index)}>reply</button>
            </>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
