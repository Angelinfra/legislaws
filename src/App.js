// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import MoreInfo from "./pages/MoreInfo";
import Laws from "./pages/Laws";
import SubLaw from "./pages/SubLaw";
import SubLawDetails from "./pages/SubLawDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes basename="/Lawyer">
        <Route path="/" index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sub" element={<MoreInfo />} />
        <Route path="/law" element={<Laws />} />
        <Route path="/LawSection" element={<SubLaw />} />
        <Route path="/LawDetails" element={<SubLawDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
