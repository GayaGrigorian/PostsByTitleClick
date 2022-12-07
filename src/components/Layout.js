import {Link, Outlet} from 'react-router-dom'

function Layout (){
    return(
        <>
        <nav className='navbar'>
          <ul className='navlink'>
              <Link to='/home'>Home</Link>
              <Link to='/posts'>Posts</Link>
              <Link to='/about'>About</Link>    
         </ul>
      </nav>
      <Outlet/>
      </>
    )
}

export default Layout