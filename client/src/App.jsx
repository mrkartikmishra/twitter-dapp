import { useState } from "react";
import "./App.css";
import Leftbar from "./components/leftbar";
import Navbar from "./components/navbar";
import Rightbar from "./components/rightbar";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import Settings from "./pages/settings";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="bg-gray-800 h-screen">
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Leftbar showSidebar={showSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Rightbar />
    </div>
  );
}

export default App;
