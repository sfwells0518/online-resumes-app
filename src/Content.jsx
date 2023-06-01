import { Routes, Route } from "react-router-dom";
import { ResumesIndex } from "./ResumesIndex";
import { ResumesShow }  from "./ResumesShow";
import { Login } from "./Login.jsx"
import { Signup } from "./Signup.jsx"
import {LogoutLink} from "./LogoutLink.jsx"

export function Content() {
  return (
    <div>
      <ResumesIndex />
      <ResumesShow />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <LogoutLink/>
    </div>
  );
}
