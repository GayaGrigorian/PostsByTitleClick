import {useEffect,useMemo,useState,} from "react";


function Login(){
    const [email , setEmail] = useState("");     
    const [userId,setUserId]=useState("");
    const [data, setData]= useState([]);

    const onHandleChange = (e)=>{
        setEmail(e.target.value)
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then(response=> setData(response))  
    },[])


    function handleSubmit(){
        const result = data.map((user)=>
            user.email === email? true:false 
        )
        return result.includes(true)
            ?setUserId(data[result.indexOf(true)].id)
            :alert("Enter a valid username/password")           
    }


    const userName=useMemo(()=>{
        return userId===""? "": data[userId-1].username
    },[userId])

    return(
         <div className="container">  
         <header className="header">
         {!Object.keys(userName).length ? (
            <>
             <input  type="email" value={email} onChange={onHandleChange}/>
             <button type="submit" onClick={handleSubmit}>Login</button>
             </>
            ):(
            <>  
             <div className="userName">{userName}</div> 
             </> 
         )}
        </header> 
        </div>
        
        
    );
}  

export default Login