import { Routes, Route } from "react-router-dom";
import { ResumesIndex } from "./ResumesIndex";
import { ResumesShow }  from "./ResumesShow";
import { Login } from "./Login.jsx"
import { Signup } from "./Signup.jsx"
import { Logout } from "./Logout.jsx"
import axios from "axios"
import { useState, useEffect } from "react"

export function Content() {
  const [students, setStudents] = useState([]);

  const handleResumesIndex = () => {
    console.log("handleindex photos")
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data)
      setStudents(response.data)
    })

  }
  
  useEffect(handleResumesIndex, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<ResumesIndex students={students}/>}/>
        <Route path="/show" element={<ResumesShow />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </div>
  );  
}
