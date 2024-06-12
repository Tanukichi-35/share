import { useEffect, useState, useContext, memo } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ShareMessagesContext } from '../../Providers/ShareMessagesProvider';
import '../css/home.css'
import SideMenu from './SideMenu';
import heartImg from '../img/heart.png';
import heartOnImg from '../img/heart_on.png';
import crossImg from '../img/cross.png';
import detailImg from '../img/detail.png';

const Home = memo(() => {
  const { messages, loadMessages, deleteMessage, addGood, removeGood } = useContext(ShareMessagesContext);
  const [isLoaded, setIsLoaded] = useState(false)
  const nav = useNavigate();

  // いいね！
  const onClickGood = (isGood, id) => {
    if (isGood) {
      removeGood(id, loadMessages);
    } else {
      addGood(id, loadMessages);
    }
  }

  // メッセージの削除
  const onClickDelete = (id) => {
    deleteMessage(id, loadMessages);
  }

  // メッセージリストを取得する
  useEffect(() => async function loadData() {
    const isError = await loadMessages(nav);
    if(!isError){
      setIsLoaded(true);
    }
  } , []);
  
  return (
    <>
      <SideMenu/>
      <div className='div__home'>
        <h1 className='h1__home'>ホーム</h1>
        {isLoaded && messages.map((message) => {
          return (
            <div key={message.id} className='div__share'>
              <div className="div__share-header">
                <h2 className={`h2__share-user ${message.isOwner ? "owner" : ""}`}>{message.userName}</h2>
                <div className="div__menu-good">
                  <img className='img__good-menu menu-icon' src={message.isGood ? heartOnImg : heartImg} alt="" onClick={() => onClickGood(message.isGood, message.id)} />
                  <p className="p__good-count">{message.goodCount}</p>
                </div>
                {message.isOwner && <img className='img__delete-menu menu-icon' src={crossImg} alt="" onClick={() => onClickDelete(message.id)}></img>}
                <Link to={`/comment/${message.id}`}>
                  <img className='img__reply-menu menu-icon' src={detailImg} alt="" />
                </Link>
              </div>
              <p className={`p__share-message ${message.isOwner ? "owner" : ""}`}>{message.text}</p>
            </div>
          )
        })}
      </div>

      <style>
        {`
          .owner {
            color: #fc8;
          }
        `}
      </style>
    </>
  )
});

export default Home
