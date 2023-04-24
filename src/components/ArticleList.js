import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){
    return(
        <main>
            <Article key={blogData.posts.id} title={blogData.posts.title} date={blogData.posts.date} preview={blogData.posts.preview}/>
        </main>
    )
}

export default ArticleList