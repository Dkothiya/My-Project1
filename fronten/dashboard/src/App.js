import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import Privatecomponent from "./Components/Privatecomponent";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import Productlist from "./Components/Productlist";
import UpdateProduct from "./Components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Privatecomponent />}>
            <Route path="/" element={<Productlist />} />
            <Route path="/add" element={<AddProduct />} />
            <Route
              path="/update/:id"
              element={<UpdateProduct/>}
            />
            <Route path="/logout" element={<h1>Logout Components</h1>} />
            <Route path="/profile" element={<h1>profile Components</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
