"use client";

import { usePathname } from "next/navigation";
import "./blogId.css"
import BlogList from "@/app/components/BlogList";
import { useState } from "react";
import Blog from "@/app/components/Blog";

export default function BlogPage() {

    let [blogs, setBlogs] = useState([
        { id: 1, title: "The fucking title 1", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis autem nam nulla neque harum tenetur provident sequi nisi cumque maiores, beatae, ea non. Ducimus odio earum corrupti fuga architecto qui." },
        { id: 2, title: "The fucking title 2", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis autem nam nulla neque harum tenetur provident sequi nisi cumque maiores, beatae, ea non. Ducimus odio earum corrupti fuga architecto qui." },
        { id: 3, title: "The fucking title 3", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis autem nam nulla neque harum tenetur provident sequi nisi cumque maiores, beatae, ea non. Ducimus odio earum corrupti fuga architecto qui."}
      ]);


    const pathname = usePathname();
    const id = pathname ? pathname.split("/").pop() : null;

    const blogsCopy = [...blogs];

    const filterBlog = blogsCopy.filter( (e) => e.id == Number(id));

    return (
        <>
            <div className="container">
            <div className="leftbar">
                <BlogList />
            </div>
            <div>
                <Blog key={filterBlog[0].id} blog={filterBlog[0]} />
            </div>
            </div>
        </>

    );
}