import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AllGems from "./components/AllGems";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllGems />} />
      </Routes>
    </div>
  );
}

export default App;