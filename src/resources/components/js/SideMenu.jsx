import { useEffect, useState, useContext, memo } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MessagesContext } from '../../Providers/MessagesProvider';
import { logout } from '../../Providers/AuthProvider';
import '../css/sideMenu.css'
import axios from 'axios'
import logoImg from '../img/logo.png';
import homeImg from '../img/home.png';
import logoutImg from '../img/logout.png';
import ErrorMessage from './ErrorMessage';

const SideMenu = memo(() => {
  const {postMessage} = useContext(MessagesContext);
  const [shareText, setShareText] = useState('')
  const [errorMessages, setErrorMessages] = useState({
    text: []
  })
  const nav = useNavigate();

  const onChangeShareText = (event) => {
    setShareText(event.target.value)
  }

  const onClickLogout = () => {
    logout(nav);
  }

  const onClickShare = () => {
    postMessage(shareText)
      .then((errors) => {
        if (errors != null) {
          setErrorMessages(errors);
        }
        else {
          setErrorMessages({text:[]});
          setShareText('');
        }
      });
  }

  return (
    <div className='div__side-menu'>
      <img className='img__logo' src={logoImg} alt="" />
      <div className="div__menu-container">
        <Link to="/" className='link__home-menu side-menu-item' >
          {/* <div className='div__home-menu side-menu-item'> */}
          <img className='img__home-menu side-menu-icon' src={homeImg} alt="" />
            <p className='p__home-menu side-menu-text'>ホーム</p>
          {/* </div> */}
        </Link>
        <div className='div__logout-menu side-menu-item' onClick={onClickLogout}>
            <img className='img__logout-menu side-menu-icon' src={logoutImg} alt="" />
            <p className='p__logout-menu side-menu-text'>ログアウト</p>
        </div>
      </div>
      <div className="div__share-form">
        <p className='p__share-form-header'>シェア</p>
        <textarea className='textarea__share-form' name="shareText" id="" placeholder='自分の思いや考えを皆とシェアしよう' onChange={onChangeShareText} value={shareText}>
        </textarea>
        <ErrorMessage isError={errorMessages.text != null} messages={errorMessages.text} />
        <button className='button__share-form submit-button' type="button" onClick={onClickShare}>シェアする</button>
      </div>
    </div>
  )
});

export default SideMenu
