import Link from "next/link";
import "./styles/blog.css"
import { usePathname } from "next/navigation";

export default function Blog({ blog }) {

  let pathName = usePathname();
  
  const checkPath = (id) =>{
     if(pathName != "/home"){

        return `${id}`

     }else{
        return `blog/${id}`
     }
  }

  return (
    <>
      <Link href={checkPath(blog.id)}>
        
        <div key={blog.id} className="blog">

          <h3 className="title">{blog.title}</h3>

          <p className="content">{blog.content}</p>
          
        </div>
      </Link>
    </>
  );
}
