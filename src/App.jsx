import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"

import Home from "./pages/Home"
import Search from "./pages/Search"
import SingleDog from "./pages/SingleDog"
import Fav from "./pages/Fav"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/Search" element={<Search />}/>
          <Route path="/:name" element={<SingleDog />}/>
          <Route path="/Fav" element={<Fav />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App