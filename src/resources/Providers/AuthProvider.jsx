import axios from 'axios'

export const register = (name, email, password, nav) => {
  axios
    .post("http://localhost/api/register", {
      name: name,
      email: email,
      password: password,
      password_confirmation: password,
    })
    .then((response) => {
      console.log(response);
      nav('/login');
      return response;
    })
    .catch((error) => {
      console.log(email, password);
      console.log(error);
      return error;
    });
}

export const login = (email, password, nav) => {
  axios
    .get('http://localhost/sanctum/csrf-cookie').then(response => {
    console.log(response);
    axios
      .post("http://localhost/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        nav('/');
      })
      .catch((error) => {
        console.log(email, password);
        console.log(error);
      });
  });
}

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