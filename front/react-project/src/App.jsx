import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import TrekkingDetails from "./pages/trekkingDetails/TrekkingDetails";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:trekkingId" element={<TrekkingDetails/>} />

      </Routes>
    </>
  );
}

export default App;
