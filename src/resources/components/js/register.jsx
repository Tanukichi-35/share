import { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/register.css'
import Header from './header';

const Register = memo(() =>
{
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

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
    axios
      .post("http://localhost/api/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: password,
      })
      .then((response) => {
        console.log(response);
        navigate('/login');
      })
      .catch((error) => {
        console.log(email, password);
        console.log(error);
      });
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
