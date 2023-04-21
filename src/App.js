import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Student from "./Components/Student/Student";
import Admin from "./Components/Admin/Admin";
import Addbook from "./Components/Admin/Addbook";
import Bookreport from "./Components/Admin/Bookreport";
import Issuebook from "./Components/Admin/Issuebook";
import Issuebookrecord from "./Components/Admin/Issuebookrecord";
import Bookreportstudent from "./Components/Student/Bookreportstudent";
import Requestbook from "./Components/Student/Requestbook";
import Landing from "./Components/Landing/Landing";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/student" element={<Student />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/addbook" element={<Addbook />} />
        <Route exact path="/admin/bookreport" element={<Bookreport />} />  
        <Route exact path="/admin/issuebook" element={<Issuebook />} />
        <Route exact path="/student/bookreportstudent" element={<Bookreportstudent />} />
        <Route exact path="/student/requestbook" element={<Requestbook />} />
      

        <Route
          exact
          path="/admin/issuebookrecord"
          element={<Issuebookrecord />}
        />
      </Routes>
    </div>
  );
}

export default App;
