import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./component/Navbar/Nav";
import { Archive } from "./component/Archive/Archive";
import { Bin } from "./component/Bin/Bin";
import { Important } from "./component/Important/Important";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/bin" element={<Bin />} />
          <Route path="/important" element={<Important />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
