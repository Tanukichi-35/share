import { useEffect, useState, useContext, memo } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ShareMessagesContext } from '../../Providers/ShareMessagesProvider';
import '../css/comment.css'
import SideMenu from './SideMenu';
import ErrorMessage from './ErrorMessage';
import heartImg from '../img/heart.png';
import heartOnImg from '../img/heart_on.png';
import crossImg from '../img/cross.png';

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

  // いいね！
  const onClickGood = (isGood, id) => {
    if (isGood) {
      removeGood(id, () => loadMessageDetails(message_id));
    } else {
      addGood(id, () => loadMessageDetails(message_id));
    }
  }

  // メッセージの削除
  const onClickDelete = () => {
    deleteMessage(message_id, () => nav("/"));
  }
  
  // メッセージとコメントを取得する
  useEffect(() => async function loadData() {
    await loadMessageDetails(message_id);
    setIsLoaded(true);
  } , []);

  return (
    <>
      <SideMenu />
        <div className='div__comment'>
          <h1 className='h1__Comment'>コメント</h1>
          {isLoaded &&
          <div className='div__share'>
            <div className="div__share-container">
              <div className="div__share-header">
                <h2 className={`h2__share-user ${messageDetails.isOwner ? "owner" : ""}`}>{messageDetails.userName}</h2>
                <div className="div__menu-good">
                  <img className='img__good-menu menu-icon' src={messageDetails.isGood ? heartOnImg : heartImg} alt="" onClick={() => onClickGood(messageDetails.isGood, message_id)} />
                  <p className="p__good-count">{messageDetails.goodCount}</p>
                </div>
                {messageDetails.isOwner && <img className='img__delete-menu menu-icon' src={crossImg} alt="" onClick={() => onClickDelete()}></img>}
              </div>
              <p className={`p__share-message ${messageDetails.isOwner ? "owner" : ""}`}>{messageDetails.text}</p>
            </div>
            <div className="div__comment-container">
              <div className="div__share-comment">
                <h3 className='h3__comment-title'>コメント</h3>
                  {messageDetails.comments.map((comment) => {
                    return (
                    <div key={comment.id} className="div__comment">
                      <p className={`p__comment-user ${comment.isOwner ? "owner" : ""}`}>{comment.userName}</p>
                      <p className={`p__comment-text ${comment.isOwner ? "owner" : ""}`}>{comment.text}</p>
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

export default Comment
