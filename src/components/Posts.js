import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Posts (){
    const{id}=useParams()
    const [posts, setPosts]=useState()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp=>resp.json())
        .then(response=>setPosts(response))
    },[id])

    return ( 
        <div> 
        {posts &&(
            <>
            <h1 className="titles">{posts.title}</h1>
            <p className="post">{posts.body}</p>
            </>
        )}
        </div>
        
    )
}