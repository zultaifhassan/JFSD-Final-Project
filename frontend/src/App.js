import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Addtocart from "./components/Addtocart";
import Whishlist from "./components/Whishlist";
import Allproducst from "./components/Allproducts";
import Navbar from './components/Navbar';
import Prenav from './components/Prenav';
import Footer from './components/Footer';
import Allsaleproducts from './components/Allsaleproduct';
import Admin from './components/Admin';
import Customer from './components/Customer';


function App() {
  return (
    <>
    <Prenav />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/addcart" element={<Addtocart />} />
      <Route path="/whistlist" element={<Whishlist />} />
      <Route path="/allproducts" element={<Allproducst />} />
      <Route path="/allsaleproducts" element={<Allsaleproducts />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/customer" element={<Customer />} />

    </Routes>
    <Footer />
    </>
  );
}

export default App;
