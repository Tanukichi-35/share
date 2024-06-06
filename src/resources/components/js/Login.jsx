import { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../Providers/AuthProvider';
import '../css/login.css'
import Header from './Header'

const Login = memo(() =>
{
  // const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onClickLogin = () => {
    const response = login(email, password, navigate);
    console.log(response);
    // axios.get('http://localhost/sanctum/csrf-cookie').then(response => {
    //   console.log(response);
    //   axios.post("http://localhost/api/login", {
    //       email: email,
    //       password: password,
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       navigate('/');
    //     })
    //     .catch((error) => {
    //       console.log(email,password);
    //       console.log(error);
    //     });
    // });
  }

  return (
    <>
      <Header/>
      <div className='div__login'>
        <div className="div__login-form">
          <h2 className="h2__login-title">ログイン</h2>
          <input type="text" name="email" className="input__email form-input" placeholder='メールアドレス' onChange={onChangeEmail}/>
          <input type="password" name="password" className="input__password form-input" placeholder='パスワード' onChange={onChangePassword}/>
          <button type="button" className='button__login submit-button' onClick={onClickLogin}>ログイン</button>
        </div>
      </div>
    </>
  )
});

export default Login