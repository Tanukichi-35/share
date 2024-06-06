import React from 'react'
import ReactDOM from 'react-dom/client'
import Share from './Share.jsx'
import '../css/sanitize.css'
import '../css/app.css'
import { MessagesProvider } from '../Providers/MessagesProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MessagesProvider>
      <Share />
    </MessagesProvider>
  </React.StrictMode>,
)
