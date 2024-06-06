import { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import axios from 'axios'
import heart from '../img/heart.png';
import heart_on from '../img/heart_on.png';
import cross from '../img/cross.png';
import detail from '../img/detail.png';
import SideMenu from './sideMenu';
import { Link } from 'react-router-dom';

const Home = memo(() =>
{
  const [messages, setMessages] = useState([])
  const navigate = useNavigate();

  const loadMessages = () => {
    axios
      .get("http://localhost/api/message")
      .then((response) => {
        console.log(response.data.data);
        // console.log(messages);
        setMessages(response.data.data);
      })
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
        navigate('/login');
      });
  }

  const getUserName = (user_id) => {
    axios
      .get(`http://localhost/api/user/${user_id}`)
      .then((response) => {
        console.log(response);
        return response.data.name;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getLikesCount = (message_id) => {
    axios
      .get(`http://localhost/api/like/${message_id}`)
      .then((response) => {
        console.log(response);
        return response.data.count;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(loadMessages,[]);
  
  return (
    <>
      <SideMenu/>
      <div className='div__home'>
        <h1 className='h1__home'>ホーム</h1>
        {messages.map((message) => { 
          console.log(message);
          return (
            <div className='div__share'>
              <div className="div__share-header">
                <h2 className="h2__share-user">{getUserName(message.user_id)}</h2>
                {/* <h2 className="h2__share-user">test</h2> */}
                <div className="div__menu-like">
                  <img className='img__like-menu menu-icon' src={heart} alt="" />
                  <p className="p__like-count">{getLikesCount(message.id)}</p>
                  {/* <p className="p__like-count">0</p> */}
                </div>
                <img className='img__delete-menu menu-icon' src={cross} alt="" />
                <Link to={`/comment/${message.id}`}>
                  <img className='img__reply-menu menu-icon' src={detail} alt="" />
                </Link>
              </div>
              <p className="p__share-message">{message.text}</p>
            </div>
          )
        })}

        {/* <div className='div__share'>
          <div className="div__share-header">
            <h2 className="h2__share-user">test</h2>
            <div className="div__menu-like">
              <img className='img__like-menu menu-icon' src={heart} alt="" />
              <p className="p__like-count">1</p>
            </div>
            <img className='img__delete-menu menu-icon' src={cross} alt="" />
            <img className='img__reply-menu menu-icon' src={detail} alt="" hidden/>
          </div>
          <p className="p__share-message">test message</p>
        </div>
        <div className='div__share'>
          <div className="div__share-header">
            <h2 className="h2__share-user">test</h2>
            <div className="div__menu-like">
              <img className='img__like-menu menu-icon' src={heart} alt="" />
              <p className="p__like-count">3</p>
            </div>
            <img className='img__delete-menu menu-icon' src={cross} alt="" />
            <img className='img__reply-menu menu-icon' src={detail} alt="" hidden/>
          </div>
          <p className="p__share-message">test message-2</p>
        </div>
        <div className='div__share'>
          <div className="div__share-header">
            <h2 className="h2__share-user">test-2</h2>
            <div className="div__menu-like">
              <img className='img__like-menu menu-icon' src={heart} alt="" />
              <p className="p__like-count">2</p>
            </div>
            <img className='img__delete-menu menu-icon' src={cross} alt="" hidden />
            <Link to="/comment/1">
              <img className='img__reply-menu menu-icon' src={detail} alt="" />
            </Link>
          </div>
          <p className="p__share-message">test message-3</p>
        </div> */}
      </div>
    </>
  )
});

export default Home
