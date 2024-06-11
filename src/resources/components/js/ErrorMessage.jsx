import { memo } from 'react'
import '../css/ErrorMessage.css'

const ErrorMessage = memo(({ isError, messages }) => {
  if (isError) {
    return (
      <div className='div__error-message error-message'>
        <ul>
          {messages.map((message) => {
            return <li>{message}</li>
          })}
        </ul>
      </div >
    );
  } else {
    return null;
  }
});

export default ErrorMessage;