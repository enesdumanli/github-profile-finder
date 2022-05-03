import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Result from "./components/Result";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github-profile-finder" element={<Home />} />
        <Route path="result" element={<Result />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      </Routes>
    </div>
  );
}
