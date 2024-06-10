import React from 'react'
import ReactDOM from 'react-dom/client'
import Share from './Share.jsx'
import '../css/sanitize.css'
import '../css/app.css'
import { ShareMessagesProvider } from '../Providers/ShareMessagesProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShareMessagesProvider>
      <Share />
    </ShareMessagesProvider>
  </React.StrictMode>,
)
