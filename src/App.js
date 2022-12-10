
import { useEffect, useState } from 'react';
import './App.css'
import Login from './components/Login';
import Posts from './components/Posts';
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home';
import PostTitles from './components/PostTitles';
import NotFound from './components/NotFound';

function App() {
const[posts, setPosts]=useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp=>resp.json())
    .then(response=>setPosts((response).slice(0,10)))
},[])

  return (
    <div>
      <Login/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/posts' element={<PostTitles data={posts}/> }/>
          <Route path='/posts/:id' element={<Posts/> }/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        </Routes>     
    </div>
  );
}

export default App;
