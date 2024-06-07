import { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom';
import { register } from '../../Providers/AuthProvider';
import '../css/register.css'
import Header from './Header';

const Register = memo(() => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate();

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onClickRegister = () => {
    register(name, email, password, nav);
  }

  return (
    <>
      <Header/>
      <div className='div__register'>
        <div className="div__register-form">
          <h2 className="h2__register-title">新規登録</h2>
          <input type="text" name="name" className="input__name form-input" placeholder='ユーザーネーム' onChange={onChangeName}/>
          <input type="text" name="email" className="input__email form-input" placeholder='メールアドレス' onChange={onChangeEmail}/>
          <input type="password" name="password" className="input__password form-input" placeholder='パスワード' onChange={onChangePassword}/>
          <button type="button" className='button__register submit-button' onClick={onClickRegister}>新規登録</button>
        </div>
      </div>
    </>
  )
});

export default Register
