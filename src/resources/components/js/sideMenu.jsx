import { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/sideMenu.css'
import axios from 'axios'
import logo from '../img/logo.png';
import home from '../img/home.png';
import logout from '../img/logout.png';
import {Link} from "react-router-dom";

const SideMenu = memo(() => {
  const [shareText, setShareText] = useState('')
  const navigate = useNavigate();

  const onChangeShareText = (event) => {
    setShareText(event.target.value)
  }

  const onClickLogout = () => {
    axios
      .post("http://localhost/api/logout")
      .then((response) => {
        console.log(response);
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onClickShare = () => {
    axios
      .get("http://localhost/api/authUser")
      .then((response) => {
        console.log(response);
        const authUser = response.data;
        axios
          .post("http://localhost/api/message", {
            user_id: authUser.id,
            text: shareText,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='div__side-menu'>
      <img className='img__logo' src={logo} alt="" />
        <div className='div__home-menu side-menu-item'>
          <img className='img__home-menu side-menu-icon' src={home} alt="" />
          <Link to="/" className='link__home header-menu' >
            <p className='p__home-menu side-menu-text'>ホーム</p>
          </Link>
        </div>
      <div className='div__logout-menu side-menu-item'>
          <img className='img__logout-menu side-menu-icon' src={logout} alt="" />
          <p className='p__logout-menu side-menu-text' onClick={onClickLogout}>ログアウト</p>
      </div>
      <div className="div__share-form">
        <p className='p__share-form-header'>シェア</p>
        <textarea className='textarea__share-form' name="shareText" id="" placeholder='自分の思いや考えを皆とシェアしよう' onChange={onChangeShareText}>
        </textarea>
        <button className='button__share-form submit-button' type="button" onClick={onClickShare}>シェアする</button>
      </div>
    </div>
  )
});

export default SideMenu
