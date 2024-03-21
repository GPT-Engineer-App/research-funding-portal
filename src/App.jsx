import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
