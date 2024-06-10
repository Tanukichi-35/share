import { createContext, useState } from "react";
import axios from 'axios'

export const MessagesContext = createContext({});
export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [messageDetails, setMessageDetails] = useState({
    userName: '',
    text: '',
    goodCount: 0,
    isGood: false,
    comments: [],
  });

  // Home画面用のメッセージリストを取得
  const loadMessages = (nav) => {
    axios
      .get("http://localhost/api/messageList")
      .then((response) => {
        console.log(response.data.data);
        const messageArray = [];
        response.data.data.map((data) => {
          messageArray.push({
            id: data.message.id,
            userName: data.user.name,
            text: data.message.text,
            goodCount: data.goods.length,
            isGood: data.good_flag,
          });
        });
        setMessages(messageArray);
      })
      .catch((error) => {
        console.log(error);
        nav('/login');
      });
  }

  // メッセージの投稿
  const postMessage = async(text) => {
    const errors = await axios
      .post("http://localhost/api/message", {
        text: text,
      })
      .then((response) => {
        console.log(response);
        loadMessages();
      })
      .catch((error) => {
        console.log(error);
        return error.response.data.errors;
      });

    return errors;
  }

  // メッセージを削除
  const deleteMessage = (id, reload) => {
    axios
      .delete(`http://localhost/api/message/${id}`)
      .then((response) => {
        console.log(response);
        reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }


  // Comment画面用のメッセージ詳細を取得
  const loadMessageDetails = (id) => {
    axios
      .get(`http://localhost/api/messageDetails/${id}`)
      .then((response) => {
        const commentList = [];
        response.data.data.comments.map((comment) => {
          commentList.push({
            id: comment.comment.id,
            userName: comment.user.name,
            text: comment.comment.text,
          });
        });
        setMessageDetails({
          userName: response.data.data.user.name,
          text: response.data.data.message.text,
          goodCount: response.data.data.goods.length,
          isGood: response.data.data.good_flag,
          comments: commentList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  // コメントの投稿
  const postComment = async(message_id, text) => {
    const errors = await axios
      .post("http://localhost/api/comment", {
        message_id: message_id,
        text: text,
      })
      .then((response) => {
        console.log(response);
        loadMessageDetails(message_id);
      })
      .catch((error) => {
        console.log(error);
        return error.response.data.errors;
      });
 
    return errors;
 }
  
  // いいねの追加
  const addGood = (message_id, reload) => {
    axios
      .post("http://localhost/api/good", {
        message_id: message_id,
      })
      .then((response) => {
        console.log(response);
        reload();
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  // いいねの削除
  const removeGood = (message_id, reload) => {
    axios
      .delete(`http://localhost/api/good/${message_id}`)
      .then((response) => {
        console.log(response);
        reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <MessagesContext.Provider value={{messages, loadMessages, postMessage, deleteMessage, messageDetails, setMessageDetails, loadMessageDetails, postComment, addGood, removeGood}}>{children}</MessagesContext.Provider>;
}