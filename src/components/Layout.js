import {Outlet, NavLink} from 'react-router-dom'

function Layout (){
    return(
        <>
        <nav className='navbar'>
          <ul className='navlink'>
              <NavLink 
                  style={({isActive})=>{
                  return isActive?{color:'purple'}:{};
                 }} 
                to='/home'>Home</NavLink>
              <NavLink 
                  style={({isActive})=>{
                  return isActive?{color:'purple'}:{};
                  }} 
                to='/posts'>Posts</NavLink>
              <NavLink 
                  style={({isActive})=>{
                  return isActive?{color:'purple'}:{};
                 }} 
                to='/about'>About</NavLink>    
         </ul>
      </nav>
      <Outlet/>
      </>
    )
}

export default Layout