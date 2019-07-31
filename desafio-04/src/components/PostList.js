import React, { Component } from "react";
import postItem from "./postItem";

class PostList extends Component {
  state = {
    newPost: "",
    posts: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const posts = localStorage.getItem("posts");

    if (posts) {
      this.setState({ posts: JSON.parse(posts) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.post !== this.state.posts) {
      localStorage.setItem("posts", JSON.stringify(this.state.posts));
    }
  }

  // Executado quando o componente deixa de existir
  // componentWillUnmount() {}

  handleInputChange = e => {
    this.setState({ newPost: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      posts: [...this.state.posts, this.state.newPost],
      newPost: ""
    });
  };

  handleDelete = post => {
    this.setState({ posts: this.state.posts.filter(t => t !== post) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newPost}</h1>
        <ul>
          {this.state.posts.map(post => (
            <Post
              key={post}
              post={post}
              onDelete={() => this.handleDelete(post)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newPost}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default PostList;
