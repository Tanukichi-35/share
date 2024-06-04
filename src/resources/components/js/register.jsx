import { useEffect, useState, memo } from 'react'
import '../css/register.css'
import Header from './header';

const Register = memo(() => {
  return (
    <>
      <Header/>
      <div className='div__register'>
        <div className="div__register-form">
          <h2 className="h2__register-title">新規登録</h2>
          <input type="text" name="name" className="input__name form-input" placeholder='ユーザーネーム'/>
          <input type="text" name="email" className="input__email form-input" placeholder='メールアドレス'/>
          <input type="text" name="password" className="input__password form-input" placeholder='パスワード' />
          <button type="button" className='button__register submit-button'>新規登録</button>
        </div>
      </div>
    </>
  )
});

export default Register
