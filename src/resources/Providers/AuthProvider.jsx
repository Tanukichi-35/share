import axios from 'axios'

// 会員登録
export const register = async(name, email, password, nav) => {
  const errors = await axios
    .post("http://localhost/api/register", {
      name: name,
      email: email,
      password: password,
      password_confirmation: password,
    })
    .then((response) => {
      console.log(response);
      nav('/login');
    })
    .catch((error) => {
      console.log(error);
      return error.response.data.errors;
    });
  
  return errors;
}

// ログイン
export const login = async(email, password, nav) => {
  const errors = await axios
    .get('http://localhost/sanctum/csrf-cookie').then( async() => {
      const errs = await axios
        .post("http://localhost/api/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          nav('/');
        })
        .catch((error) => {
          console.log(error);
          return error.response.data.errors;
        });
      
      return errs;
    })
    .catch((error) => {
      console.log(error);
    });
  
  return errors;
}

// ログアウト
export const logout = (nav) => {
  axios
    .post("http://localhost/api/logout")
    .then((response) => {
      console.log(response);
      nav('/login');
    })
    .catch((error) => {
      console.log(error);
    })
}