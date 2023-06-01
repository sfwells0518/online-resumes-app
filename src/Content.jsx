import { Routes, Route } from "react-router-dom";
import { ResumesIndex } from "./ResumesIndex";
import { ResumesShow }  from "./ResumesShow";
import { Login } from "./Login.jsx"
import { Signup } from "./Signup.jsx"

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ResumesIndex />}/>
        <Route path="/show" element={<ResumesShow />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );  
}
