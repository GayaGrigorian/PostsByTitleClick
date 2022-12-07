import { useMemo } from "react";
import {Link} from 'react-router-dom'

function PostTitles ({data}){

    const titles= useMemo(()=>data.map((post)=>
        <>
        <Link to={`/posts/${post.id}`}>
            <ul key={post.id}>
             <li>{post.title}</li>
            </ul>
        </Link>
        </>   
        ),[data])

    return ( 
        <div className="titles"> 
        <h1>POST TITLES</h1>  
       {titles}
        </div>
    )
}

export default PostTitles;