import { useEffect, useState, memo } from 'react'
import '../css/comment.css'
import heart from '../img/heart.png';
import heart_on from '../img/heart_on.png';
import cross from '../img/cross.png';
import SideMenu from './sideMenu';

const Comment = memo(() => {
  return (
    <>
      <SideMenu/>
      <div className='div__home'>
        <h1 className='h1__home'>コメント</h1>
        <div className='div__share'>
          <div className="div__share-header">
            <h2 className="h2__share-user">test</h2>
            <div className="div__menu-like">
              <img className='img__like-menu menu-icon' src={heart} alt="" />
              <p className="p__like-count">1</p>
            </div>
            <img className='img__delete-menu menu-icon' src={cross} alt="" />
          </div>
          <p className="p__share-message">test message</p>
        </div>
        <div className="div__comment">
          <div className="div__share-comment">
            <h3 className='h3__comment-title'>コメント</h3>
            <div className="div__comment">
              <p className="p__comment-user">test</p>
              <p className="p__comment-text">test comment</p>
            </div>
          </div>
          <div className="div__comment-form">
            <textarea className='textarea__share-comment' name="commentText" id="" placeholder='他人がシェアした内容にコメントしてみよう'>
            </textarea>
            <button className='button__share-comment submit-button' type="button">コメントする</button>
          </div>
        </div>
      </div>
    </>
  )
});

export default Comment
