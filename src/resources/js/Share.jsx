import { useEffect, useState } from 'react'
import '../css/share.css'
import Home from '../components/js/Home'
import Comment from '../components/js/Comment'
import Register from '../components/js/Register'
import Login from '../components/js/Login'
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
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />}/>
            </Routes>
        </Router>
      </div>
  )
}

export default Share
