import { Routes, Route } from "react-router-dom";
import { ResumesIndex } from "./ResumesIndex";
import { ResumesShow } from "./ResumesShow";
import axios from "axios";
import { useState, useEffect } from "react";
import { Login } from "./Login.jsx"
import { Signup } from "./Signup.jsx"

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

      <ResumesIndex students={students} />
      <ResumesShow />
      <Routes>
        <Route path="/" element={<ResumesIndex />}/>
        <Route path="/show" element={<ResumesShow />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );  
}
