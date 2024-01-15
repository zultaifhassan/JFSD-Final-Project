import { Route, Routes } from "react-router-dom";
import Addproduct from "./Components/Addproduct";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import "./Stylings/App.css";
import Producttable from "./Components/Producttable";
import Customertable from "./Components/Customertable";
import SaleProduct from "./Components/SaleProduct";
import SaleproductTable from "./Components/SaleproductTable";
import Querytable from "./Components/Querytable";

function App() {
  return (
    <div className="App-page">
      <div className="Side-Bar">
        <Sidebar />
      </div>
      <div className="maincontent">
        <Topbar />
        <Routes>
          <Route path="/product" element={<Addproduct />} />
          <Route path="/productlist" element={<Producttable />} />
          <Route path="/customertable" element={<Customertable />} />
          <Route path="/saleform" element={<SaleProduct />} />
          <Route path="/saletable" element={<SaleproductTable />} />
          <Route path="/querytable" element={<Querytable />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
