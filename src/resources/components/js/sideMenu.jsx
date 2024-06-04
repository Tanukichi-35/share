import { useEffect, useState, memo } from 'react'
import '../css/sideMenu.css'
import logo from '../img/logo.png';
import home from '../img/home.png';
import logout from '../img/logout.png';
import {Link} from "react-router-dom";

const SideMenu = memo(() => {
  return (
    <div className='div__side-menu'>
      <img className='img__logo' src={logo} alt="" />
      <Link to="/" className='link__home header-menu' >
        <div className='div__home-menu side-menu-item'>
            <img className='img__home-menu side-menu-icon' src={home} alt="" />
            <p className='p__home-menu side-menu-text'>ホーム</p>
        </div>
      </Link>
      <Link to="/login" className='link__logout header-menu' >
        <div className='div__logout-menu side-menu-item'>
            <img className='img__logout-menu side-menu-icon' src={logout} alt="" />
            <p className='p__home-menu side-menu-text'>ログアウト</p>
        </div>
      </Link>
      <div className="div__share-form">
        <p className='p__share-form-header'>シェア</p>
        <textarea className='textarea__share-form' name="shareText" id="" placeholder='思った内容をシェアしよう'>
        </textarea>
        <button className='button__share-form submit-button' type="button">シェアする</button>
      </div>
    </div>
  )
});

export default SideMenu
