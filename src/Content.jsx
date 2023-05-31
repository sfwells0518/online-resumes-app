import { Routes, Route } from "react-router-dom";
import { Index } from ./"Index";

export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Donate />} />
      </Routes>
    </div>
  );
}
