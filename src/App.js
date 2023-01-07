import Maincomp from "./components/Maincomp";
import Login from "./components/Login";
import { Routes,Route} from "react-router-dom";
import Details from "./components/Details";
import Otp from "./components/Otp";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Maincomp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Otp" element={<Otp/>} />
      <Route path="/details" element={<Details/>} />
    </Routes>
    </div>
  );
}

export default App;