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
import MainLogin from "./components/MainLogin"
import Dashboard from "./pages/Dashboard"
import DashbordHome from "./components/DashbordHome"
import DashboardCourses from "./components/DashboardCourses"
import DashboardAssessment from "./components/DashboardAssessment"
import DashboardResource from "./components/DashboardResource"
import DashboardProfile from "./components/DashboardProfile"

// import 'antd/dist/reset.css'; // For Ant Design v5



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
          <Route path="/login" element={<MainLogin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="dashboardhome" element={<DashbordHome/>}/>
            <Route path="dasboardcourse" element={<DashboardCourses/>}/>
            <Route path="dashboardassessment" element={<DashboardAssessment/>}/>
            <Route path="dashboardresource" element={<DashboardResource/>}/>
            <Route path="dashboardprofile" element={<DashboardProfile/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
