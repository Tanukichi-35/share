import { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../Providers/AuthProvider';
import '../css/login.css'
import Header from './Header'
import ErrorMessage from './ErrorMessage';

const Login = memo(() => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessages, setErrorMessages] = useState({
    email: [],
    password: []
  })
  const nav = useNavigate();
  
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onClickLogin = () => {
    login(email, password, nav)
      .then((errors) => {
        if (errors != null)
          setErrorMessages(errors);
      });
  }

  return (
    <>
      <Header/>
      <div className='div__login'>
        <div className="div__login-form">
          <h2 className="h2__login-title">ログイン</h2>
          <input type="text" name="email" className="input__email form-input" placeholder='メールアドレス' onChange={onChangeEmail}/>
          <ErrorMessage isError={errorMessages.email != null} messages={errorMessages.email} />
          <input type="password" name="password" className="input__password form-input" placeholder='パスワード' onChange={onChangePassword}/>
          <ErrorMessage isError={errorMessages.password != null} messages={errorMessages.password} />
          <button type="button" className='button__login submit-button' onClick={onClickLogin}>ログイン</button>
        </div>
      </div>
    </>
  )
});

export default Login
