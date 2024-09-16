import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CreateTodo from "./pages/CreateTodo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
