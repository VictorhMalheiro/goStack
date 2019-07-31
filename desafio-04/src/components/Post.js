import React from "react";
import PropTypes from "prop-types";

import profile from "./assets/profile.png";

function Post({ post, onDelete }) {
  return (
    <li>
      {post}
      {/* <img src={profile} alt={}/> */}
      <button onClick={onDelete} type="button">
        Remover
      </button>
      <div class="info">
        <strong>Victor Malheiro</strong>
        <small>04 Jun 2019</small>
        <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
      </div>
    </li>
  );
}

Post.defaultProps = {
  post: "Oculto"
};

Post.PropTypes = {
  post: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};
export default Post;
