import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import TrekkingDetails from "./pages/trekkingDetails/TrekkingDetails";
import ProductDetails from "./pages/productDetail/ProductDetails";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TrekkingPage from "./pages/trekkingPage/TrekkingPage";
import ProductPage from "./pages/productPage/ProductPage";
import Footer from "./components/footer/Footer";
import Destinations from "./pages/destinationsPage/Destinations";
import NewsPage from "./pages/newsPage/NewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<LayoutWithNavbar />} />
      </Routes>
      
    </>
  );
}
function LayoutWithNavbar() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trekkings" element={<TrekkingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/trekkings/:trekkingId" element={<TrekkingDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
