import React, {useEffect} from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import './App.css';

function App() {

  useEffect(() => {
    document.title = "Authentication App";
  }, []);

  return (
    <div className="App-container">
      <HashRouter >
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/signup" element = {<SignupForm/>} />
        <Route path = "/login" element = {<LoginForm/>} />
        <Route path = "/dashboard" element = {<ProtectedRoute element={<Dashboard/>}/>} />
        <Route path = "/profile" element = {<ProtectedRoute element={<Profile/>}/>}  />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
