import { useEffect, useState } from 'react'
import '../css/share.css'
import axios from 'axios'
import Home from '../components/js/home'
import Comment from '../components/js/comment'
import Register from '../components/js/register'
import Login from '../components/js/login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Share = () => {
  return (
      <div className='div__main'>
        <Router>
            <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/comment/:id" Component={Comment}/>
              <Route path="/login" Component={Login}/>
              <Route path="/register" Component={Register}/>
            </Routes>
        </Router>
      </div>
  )
}

export default Share
