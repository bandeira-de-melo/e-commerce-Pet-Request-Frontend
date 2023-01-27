import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { UserContext } from "./context/UserContext"

function App() {
  const [user, setUser] = useState({})

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          {/* <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/product" element={<Produto />} />
          <Route path="/home" element={<Home />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
