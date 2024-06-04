import { useEffect, useState, memo } from 'react'
import '../css/header.css'
import logo from '../img/logo.png';
import {Link} from "react-router-dom";
const Header = memo(() => {

  const moveRegister = (event) => {
    setViewStatus(1);
  }

  const moveLogin = (event) => {
    setViewStatus(0);
  }

  return (
    <div className='div__header'>
      <img className='img__logo' src={logo} alt="" />
      <div className="div__header-menu">
        <Link to="/register" className='link__register header-menu' >新規登録</Link>
        <Link to="/login" className='link__login header-menu'>ログイン</Link>
      </div>
    </div>
  )
});

export default Header
