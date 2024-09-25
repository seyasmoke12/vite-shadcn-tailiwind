import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Registration from "./pages/registration/Registration";

function Routeing() {
return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards' element={<Courses />} />
        <Route path="/registration" element={<Registration /> } />
      </Routes>
    </>
)
}

export default Routeing