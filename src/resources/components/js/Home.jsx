import { useEffect, useState, useContext, memo } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ShareMessagesContext } from '../../Providers/ShareMessagesProvider';
import '../css/home.css'
import SideMenu from './SideMenu';
// import axios from 'axios'
import heartImg from '../img/heart.png';
import heartOnImg from '../img/heart_on.png';
import crossImg from '../img/cross.png';
import detailImg from '../img/detail.png';

const Home = memo(() => {
  const { messages, loadMessages, deleteMessage, addGood, removeGood } = useContext(ShareMessagesContext);
  const nav = useNavigate();

  // goodボタン
  const onClickGood = (isGood, id) => {
    if (isGood) {
      removeGood(id, loadMessages);
    } else {
      addGood(id, loadMessages);
    }
  }

  // messageの削除
  const onClickDelete = (id) => {
    deleteMessage(id, loadMessages);
  }

  // messageを取得
  useEffect(() => loadMessages(nav),[]);
  
  return (
    <>
      <SideMenu/>
      <div className='div__home'>
        <h1 className='h1__home'>ホーム</h1>
        {messages.map((message) => {
          return (
            <div key={message.id} className='div__share'>
              <div className="div__share-header">
                <h2 className="h2__share-user">{message.userName}</h2>
                {/* <h2 className="h2__share-user">test</h2> */}
                <div className="div__menu-good">
                  <p>{message.isGood}</p>
                  <img className='img__good-menu menu-icon' src={message.isGood ? heartOnImg : heartImg} alt="" onClick={() => onClickGood(message.isGood, message.id)} />
                  <p className="p__good-count">{message.goodCount}</p>
                  {/* <p className="p__good-count">0</p> */}
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
