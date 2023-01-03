import Navbar from "./components/Navbar";
import Maincomp from "./components/Maincomp";
import Login from "./components/Login";
import { Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Routes>
      <Route path="/" element={<Maincomp/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </div>
  );
}

export default App;