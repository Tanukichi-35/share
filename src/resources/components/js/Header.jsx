import { memo } from 'react'
import { Link } from "react-router-dom";
import '../css/header.css'
import logoImg from '../img/logo.png';

const Header = memo(() => {
  return (
    <div className='div__header'>
      <img className='img__logo' src={logoImg} alt="" />
      <div className="div__header-menu">
        <Link to="/register" className='link__register header-menu' >新規登録</Link>
        <Link to="/login" className='link__login header-menu'>ログイン</Link>
      </div>
    </div>
  )
});

export default Header
