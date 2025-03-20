import { useEffect, useState } from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Route, Routes} from 'react-router-dom'
import Courses from "./pages/Courses"
import CourseDetails from "./pages/CourseDetails"
import Footer from "./components/Footer"
import Auth from "./pages/Auth"
import { AuthFormDataProvider } from "./context/AuthFormDataContext"

import 'antd/dist/reset.css'; // For Ant Design v5



function App() {
  
  return (
    <div className="w-[100%] h-auto m-auto">
      <Navbar/>
      <div className="min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/:id" element={<CourseDetails/>}/>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
