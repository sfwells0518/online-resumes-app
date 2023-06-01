// import { Routes, Route } from "react-router-dom";
import { ResumesIndex } from "./ResumesIndex";
// import { ResumesShow }  from "./ResumesShow";

import { ResumesShow } from "./ResumesShow";
export function Content() {
  return (
    <div>
      <ResumesIndex />
      <ResumesShow />
      {/* <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
      </Routes> */}
    </div>
  );
}
