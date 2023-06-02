import { Routes, Route } from "react-router-dom";
import { ResumesIndex } from "./ResumesIndex";
import { ResumesShow } from "./ResumesShow";
import axios from "axios";
import { useState, useEffect } from "react";
import { Login } from "./Login.jsx"
import { Signup } from "./Signup.jsx"
import { Logout } from "./Logout.jsx"

export function Content() {
  const [students, setStudents] = useState([]);
  const handleIndexStudents = () => {
    console.log("in handle index students");
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data.first_name);

      setStudents(response.data);
    });
  };
  useEffect(handleIndexStudents, []);
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
