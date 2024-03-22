import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import Prenav from "./components/Prenav";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Addtocart from "./components/Addtocart";
import Whishlist from "./components/Whishlist";
import Context from "./components/Context";
function App() {
  return (
    <>
      <Prenav />
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/context" element={<Context />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/addcart" element={<Addtocart />} />
      <Route path="/whistlist" element={<Whishlist />} />
      

    </Routes>
    <Footer />
    </>
  );
}

export default App;
