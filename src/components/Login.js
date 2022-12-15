import {useEffect,useMemo,useState,} from "react";


function Login(){
    const [email , setEmail] = useState("");     
    const [data, setData]= useState([]);
    const [user, setUser]= useState(localStorage.getItem("user")?JSON.parse( localStorage.getItem( "user")):null)

    const onHandleChange = (e)=>{
        setEmail(e.target.value)
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then(response=> setData(response))  
    },[])


    function handleSubmit(){
        const result = data.find((user)=>
            user.email === email 
        )
        if (result=== -1){
            alert("Enter a valid username/password")           
        }else{
            setUser(result)
           localStorage.setItem("user", JSON.stringify(result) )
        }
           
    }
    
     function handleClick(){
        setUser(null)
        setEmail("")
     }

    return(
         <div className="container">  
         <header className="header">
        {!user ? (
            <>
             <input  type="email" value={email} onChange={onHandleChange}/>
             <button type="submit" onClick={handleSubmit}>Login</button>
             </>
            ):(
            <>  
             <div className="userName">{user.username}</div>
             <button onClick={handleClick} className="logout">Logout</button>
             </> 
         )}
        </header> 
        </div> 
        
    );
}  

export default Login
