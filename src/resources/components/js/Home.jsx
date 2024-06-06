import { useEffect, useState, useContext, memo } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MessagesContext } from '../../Providers/MessagesProvider';
import '../css/home.css'
import SideMenu from './SideMenu';
// import axios from 'axios'
import heartImg from '../img/heart.png';
import heartOnImg from '../img/heart_on.png';
import crossImg from '../img/cross.png';
import detailImg from '../img/detail.png';

const Home = memo(() =>
{
  const {messages, loadMessages, deleteMessage} = useContext(MessagesContext);
  // const [messages, setMessages] = useState([])
  const navigate = useNavigate();

  // const loadMessages = () => {
  //   axios
  //     .get("http://localhost/api/message")
  //     .then((response) => {
  //       console.log(response.data.data);
  //       // console.log(messages);
  //       setMessages(response.data.data);
  //     })
  //     .then(() => {
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       navigate('/login');
  //     });
  // }

  // const getUserName = (user_id) => {
  //   axios
  //     .get(`http://localhost/api/user/${user_id}`)
  //     .then((response) => {
  //       console.log(response);
  //       return response.data.name;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // const getLikesCount = (message_id) => {
  //   axios
  //     .get(`http://localhost/api/like/${message_id}`)
  //     .then((response) => {
  //       console.log(response);
  //       return response.data.count;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const onClickDelete = (id) => {
    deleteMessage(id);
  }

  useEffect(loadMessages,[]);
  
  return (
    <>
      <SideMenu/>
      <div className='div__home'>
        <h1 className='h1__home'>ホーム</h1>
        {messages.map((message) => {
          // console.log(message);
          return (
            <div key={message.id} className='div__share'>
              <div className="div__share-header">
                {/* <h2 className="h2__share-user">{getUserName(message.user_id)}</h2> */}
                <h2 className="h2__share-user">test</h2>
                <div className="div__menu-like">
                  <img className='img__like-menu menu-icon' src={heartImg} alt="" />
                  {/* <p className="p__like-count">{getLikesCount(message.id)}</p> */}
                  <p className="p__like-count">0</p>
                </div>
                <img className='img__delete-menu menu-icon' src={crossImg} alt="" onClick={() => onClickDelete(message.id)}></img>
                <Link to={`/comment/${message.id}`}>
                  <img className='img__reply-menu menu-icon' src={detailImg} alt="" />
                </Link>
              </div>
              <p className="p__share-message">{message.text}</p>
            </div>
          )
        })}
      </div>
    </>
  )
});

export default Home
