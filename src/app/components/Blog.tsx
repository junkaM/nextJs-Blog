import Link from "next/link";

export default function Blog({ blog }) {
  return (
    <>
      <Link href={`blog/${blog.id}`}>
        
        <div key={blog.id}>

          <h1 className="title">{blog.title}</h1>

          <p className="content">{blog.content}</p>
          
        </div>
      </Link>
    </>
  );
}
