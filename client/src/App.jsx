import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Leftbar from "./components/leftbar";
import Navbar from "./components/navbar";
import Rightbar from "./components/rightbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import TrendingPost from "./pages/trending";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const route = useLocation();

  return (
    <div className="bg-gray-800 h-screen text-white">
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Leftbar showSidebar={showSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trending" element={<TrendingPost />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      {route?.pathname !== "/trending" && <Rightbar />}
    </div>
  );
}

export default App;
