import { useEffect, useState, useContext, memo } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ShareMessagesContext } from '../../Providers/ShareMessagesProvider';
import '../css/comment.css'
import SideMenu from './SideMenu';
import axios from 'axios'
import heartImg from '../img/heart.png';
import heartOnImg from '../img/heart_on.png';
import crossImg from '../img/cross.png';
import ErrorMessage from './ErrorMessage';

const Comment = memo(() => {
  const { messageDetails, loadMessageDetails, postComment, deleteMessage, addGood, removeGood } = useContext(ShareMessagesContext);
  const [isLoaded, setIsLoaded] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [errorMessages, setErrorMessages] = useState({
    text: []
  })
  const params = useParams();
  const message_id = params.id;
  const nav = useNavigate();

  const onChangeCommentText = (event) => {
    setCommentText(event.target.value)
  }

  // コメント投稿
  const onClickComment = (message_id) => {
    // if (commentText === '') return

    // postComment(message_id, commentText);
    // setCommentText('');

    postComment(message_id, commentText)
      .then((errors) => {
        if (errors != null) {
          setErrorMessages(errors);
        }
        else {
          setErrorMessages({text:[]});
          setCommentText('');
        }
      });
  }

  // goodボタン
  const onClickGood = (isGood, id) => {
    if (isGood) {
      removeGood(id, () => loadMessageDetails(message_id));
    } else {
      addGood(id, () => loadMessageDetails(message_id));
    }
  }

  // messageの削除
  const onClickDelete = (id) => {
    deleteMessage(id, () => nav("/"));
  }
  
  // idからmessageを取得する
  useEffect(() => async function loadData() {
    await loadMessageDetails(message_id);
    setIsLoaded(true);
  } , []);

  return (
    <>
      <SideMenu />
      {isLoaded &&
        <div className='div__home'>
          <h1 className='h1__home'>コメント</h1>
          <div className='div__share'>
            <div className="div__share-header">
              <h2 className="h2__share-user">{messageDetails.userName}</h2>
              <div className="div__menu-good">
                <img className='img__good-menu menu-icon' src={messageDetails.isGood ? heartOnImg : heartImg} alt="" onClick={() => onClickGood(messageDetails.isGood, message_id)} />
                <p className="p__good-count">{messageDetails.goodCount}</p>
              </div>
              <img className='img__delete-menu menu-icon' src={crossImg} alt="" onClick={() => onClickDelete(message_id)}></img>
            </div>
            <p className="p__share-message">{messageDetails.text}</p>
          </div>
          <div className="div__comment-container">
            <div className="div__share-comment">
              <h3 className='h3__comment-title'>コメント</h3>
                {messageDetails.comments.map((comment) => {
                  return (
                  <div key={comment.id} className="div__comment">
                    <p className="p__comment-user">{comment.userName}</p>
                    <p className="p__comment-text">{comment.text}</p>
                  </div>
                  )
                })}
            </div>
            <div className="div__comment-form">
              <textarea className='textarea__share-comment' name="commentText" id="" placeholder='他人がシェアした内容にコメントしてみよう' onChange={onChangeCommentText} value={commentText}>
              </textarea>
              <ErrorMessage isError={errorMessages.text != null} messages={errorMessages.text} />
              <button className='button__share-comment submit-button' type="button" onClick={() => onClickComment(message_id)}>コメントする</button>
            </div>
          </div>
        </div>
      }
    </>
  )
});

export default Comment
