import {Link, Route, Routes} from "react-router-dom";
import './App.css';
import Home  from "./routes/Home"
import Cart  from "./routes/Cart"
import Liked  from "./routes/Liked"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="flex">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/liked">liked</Link>
        </div>
      </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/liked" element={<Liked/>}/>
    </Routes>
    </div>
  );
}

export default App;
