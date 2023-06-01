import { Routes, Route } from "react-router-dom";
import { ResumesIndex } from "./ResumesIndex";

export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <ResumesIndex />
      {/* <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
      </Routes> */}
    </div>
  );
}
