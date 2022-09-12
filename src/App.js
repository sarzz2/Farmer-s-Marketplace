import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      {/* <Route path="/" element={<Home/>} */}
    </Routes>
  </Router>
  );
}

export default App;
