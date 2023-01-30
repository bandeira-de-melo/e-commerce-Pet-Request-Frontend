import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { UserContext } from "./context/UserContext"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  const [user, setUser] = useState({})

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          {
          //<Route path="/sign-in" element={<Produto />} />
          //<Route path="/home" element={<Home />} />
          }
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
