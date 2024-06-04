import { useEffect, useState, memo } from 'react'
import '../css/home.css'
import heart from '../img/heart.png';
import heart_on from '../img/heart_on.png';
import cross from '../img/cross.png';
import detail from '../img/detail.png';
import SideMenu from './sideMenu';
import { Link } from 'react-router-dom';

const Home = memo(() => {

  return (
    <>
      <SideMenu/>
      <div className='div__home'>
        <h1 className='h1__home'>ホーム</h1>
        <div className='div__share'>
          <div className="div__share-header">
            <h2 className="h2__share-title">test</h2>
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
            <h2 className="h2__share-title">test</h2>
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
            <h2 className="h2__share-title">test-2</h2>
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
        </div>
      </div>
    </>
  )
});

export default Home
