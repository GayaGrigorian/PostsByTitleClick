import { useEffect, useMemo, useState } from "react"

export default function Check (){
    const[posts, setPosts]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp=>resp.json())
        .then(response=>setPosts({posts:response}))
    },[])

    const title=useMemo(()=>posts.map((post)=> 
        <li key={post.id}>
            {post.title}
        </li>
    ),[posts])
    

    return ( 
        <> 
        <ul>{title}</ul>
        </>
        
    )
}