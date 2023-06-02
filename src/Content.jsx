// import { Routes, Route } from "react-router-dom";
import { ResumesIndex } from "./ResumesIndex";
import { ResumesShow } from "./ResumesShow";
import axios from "axios";
import { useState, useEffect } from "react";

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
      {/* <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
      </Routes> */}
    </div>
  );
}
