import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { UserContext } from "./context/UserContext"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import AuthContext from "./context/AuthContext";

function App() {

  const [user, setUser] = useState({})

  const [token, setToken] = useState('')
  const [name, setName] = useState('')

  const Auth = localStorage.setItem("token")


  function storageToken(token) {
    if (token !== null) {
      setToken(token)
      localStorage.setItem("token", token)
    }
  }

  function storageName(name) {
    if (name !== null) {
      setName(name)
      localStorage.setItem("name", name)
    }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ token, setToken, storageToken, storageName, Auth, name, setName }}>
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
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
