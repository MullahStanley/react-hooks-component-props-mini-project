import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./about";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      < Header />
      <About image= {blogData.image} about ={blogData.about}/>
      <ArticleList />
    </div>
  );
}

export default App;
