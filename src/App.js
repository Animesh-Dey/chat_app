import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatHome from './Pages/ChatHome'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/"
            element={<Signin />} />
          <Route path="/Signup"
            element={<Signup />} />
          <Route path="/chat-home/:receiverId"
            element={<ChatHome />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App