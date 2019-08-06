import React from "react";

function PostInfo({ author, date }) {
  return (
    <div class="post-info">
      <img class="avatar" src={author.avatar + author.name + ".png"} alt="" />
      <div class="datails">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div class="comment">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} class="comment">
          <img
            class="avatar"
            src={comment.author.avatar + comment.author.name + ".png"}
          />
          <p class="comment-content">
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments, img }) {
  return (
    <div class="post">
      <PostInfo author={author} date={date} />
      <p class="post-content">{content}</p>
      <img src={img} alt="" />
      <PostComments key={comments.id} comments={comments} />
    </div>
  );
}

export default PostItem;
