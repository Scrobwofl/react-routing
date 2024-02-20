import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserPage from "./UserPage";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import NavBar from "./NavBar";
import Cats from "./Cats";

export default function App() {
  return (
    <>
      <NavBar />
      <div>
        <h1>Welcome!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/users/:username" element={<UserPage />} />
        </Routes>
      </div>
    </>
  );
}
