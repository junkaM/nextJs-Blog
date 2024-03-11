import Link from "next/link";
import "./styles/blog.css"

export default function Blog({ blog }) {
  return (
    <>
      <Link href={`blog/${blog.id}`}>
        
        <div key={blog.id} className="blog">

          <h3 className="title">{blog.title}</h3>

          <p className="content">{blog.content}</p>
          
        </div>
      </Link>
    </>
  );
}
