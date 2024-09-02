import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';
import Navbar from './Components/Navbar';


function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((data) => data.json()).then((data) => {

      setPosts(data)
    });

  }, []);

  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='user' element={<User />}></Route>
      </Routes>
      {
        posts ?
          (


            
              posts.map(post => {

                return (
                  
                    <div className="card mt-3">
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                
                        <p className="card-text">{post.body}</p>
                        <a href="#" className="btn btn-primary">
                        </a>
                        Go Somewhere
                  
                      </div>
                    </div>
            
                )
              })
            
          ) : (<h3>Loading..</h3>)
      }
    </>

  );

}


export default App;


