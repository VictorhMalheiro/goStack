import React from "react";

function PostComments({ comments }) {
  return (
    <div>
      {/* <div className="divider" /> */}
      {comments.map(comment => (
        <div key={comment.id} class="comment">
          <img
            src={comment.author.avatar + comment.author.name + ".png"}
          />
          <div class="comment-content">
            <strong>{comment.author.name}</strong>
            <span>{comment.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PostInfo({ author, date }) {
  return (
    <div class="post-info">
      <img class="avatar" src={author.avatar + author.name + ".png"} alt="" />
      <div class="details">
        <strong>{author.name} </strong><span>{date}</span>
      </div>
    </div>
  );
}

function PostItem({ author, date, content, comments, img }) {
  return (
    <div class="post">
      <PostInfo author={author} date={date} />
      <p>{content}</p>
      <img src={img} alt="" />
      <PostComments key={comments.id} comments={comments} />
    </div>
  );
}

export default PostItem;
