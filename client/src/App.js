import axios from 'axios'
import React, { useEffect, useReducer, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './context/UserProvider.js'
import './App.scss'
import Login from './components/Login.js'
import Signup from './components/Signup/Signup.js'
import Dashboard from './components/Dashboard.js'
import Navbar from './components/Navbar.js'



export const baseURL = process.env.REACT_APP_IS_PRODUCTION ? 'https://helperbeetus.herokuapp.com/api' : `http://localhost:8080/api`

function App() {
  const { user, token, logout, login, signup, } = useContext(UserContext)


  return (
    <div className="app">
      <Routes>
      <Route
          path="/"
          element={token ? <Navigate to="/dashboard"/> : <Login />}
      />
      <Route
        path="/create-account"
        element={<Signup signup={signup}/>}
      />
      <Route
        path="/dashboard"
        element={<Dashboard user={user}/>}
      />
      <Route
        path="/myfoods"
        render={() => <MyFoods />}
      />
      <Route
        path="/mysettings"
        render={() => <Settings />}
      />
      <Route
        path="/calculator"
        render={() => <Calculator />}
      />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
