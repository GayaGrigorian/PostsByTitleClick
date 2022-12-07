import { useContext } from "react"
import UserContext from "../context/UserContext"

function Home(props){
    const name=useContext(UserContext)
    return(
        <div className="titles">
            <h1>Welcome {name}</h1>
        </div>
    )
}

export default Home