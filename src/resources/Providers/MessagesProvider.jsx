import { createContext, useState } from "react";
import axios from 'axios'

export const MessagesContext = createContext({});
export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const loadMessages = () => {
    axios
      .get("http://localhost/api/message")
      .then((response) => {
        setMessages(response.data.data);
      })
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
        navigate('/login');
      });
  }

  const postMessage = (text) => {
    axios
      .get("http://localhost/api/authUser")
      .then((response) => {
        // console.log(response);
        const authUser = response.data;
        axios
          .post("http://localhost/api/message", {
            user_id: authUser.id,
            text: text,
          })
          .then((response) => {
            console.log(response);
            loadMessages();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteMessage = (id) => {
    axios
      .delete(`http://localhost/api/message/${id}`)
      .then((response) => {
        console.log(response);
        loadMessages();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <MessagesContext.Provider value={{messages, loadMessages, postMessage, deleteMessage}}>{children}</MessagesContext.Provider>;
}