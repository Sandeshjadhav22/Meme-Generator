import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/Home";
import EditPage from "./pages/Edit";


function App() {
  return (
    <div className="container">
      <h1>Meme Generator app</h1>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/edit" element={<EditPage/>} />
      </Routes>
    </div>
  );
}

export default App;
