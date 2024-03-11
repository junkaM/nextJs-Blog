"use client"

import { useState } from "react";
import Blog from "./Blog";


export default function BlogList() {

    let [blogs, setBlogs] = useState([
        { id: 1, title: "The fucking title 1", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis autem nam nulla neque harum tenetur provident sequi nisi cumque maiores, beatae, ea non. Ducimus odio earum corrupti fuga architecto qui." },
        { id: 2, title: "The fucking title 2", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis autem nam nulla neque harum tenetur provident sequi nisi cumque maiores, beatae, ea non. Ducimus odio earum corrupti fuga architecto qui." },
        { id: 3, title: "The fucking title 3", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis autem nam nulla neque harum tenetur provident sequi nisi cumque maiores, beatae, ea non. Ducimus odio earum corrupti fuga architecto qui."}
      ]);

  return (
    <>
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}
