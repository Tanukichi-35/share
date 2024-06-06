import { useEffect, useState } from 'react'
import '../css/share.css'
import Home from '../components/js/home'
import Comment from '../components/js/comment'
import Register from '../components/js/register'
import Login from '../components/js/login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Share = () =>
{
  return (
      <div className='div__main'>
        <Router>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/comment/:id" element={<Comment />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
      </div>
  )
}

export default Share
