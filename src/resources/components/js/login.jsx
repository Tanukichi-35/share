import { useEffect, useState, memo } from 'react'
import '../css/login.css'
import Header from './header';

const Login = memo(() => {
  return (
    <>
      <Header/>
      <div className='div__login'>
        <div className="div__login-form">
          <h2 className="h2__login-title">ログイン</h2>
          <input type="text" name="email" className="input__email form-input" placeholder='メールアドレス' />
          <input type="text" name="password" className="input__password form-input" placeholder='パスワード' />
          <button type="button" className='button__login submit-button'>ログイン</button>
        </div>
      </div>
    </>
  )
});

export default Login
