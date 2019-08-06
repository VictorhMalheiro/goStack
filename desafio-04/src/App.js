import React from "react";
import "./App.css";

import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <CreatePost />
      <PostList />
    </>
  );
}

export default App;
