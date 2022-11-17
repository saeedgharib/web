import { Route, Routes } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import Users from "./components/Users";
import AdminPanel from "./components/AdminPanel";
import AddUser from "./components/AddUser";
import Settings from "./components/Settings";
import Misc from "./components/Misc";
import Std from "./std";



function App() {
  return (



<Routes>
        <Route path="/" element={<AdminPanel/>} />
          <Route path="/Register" element={<AddUser/>} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Misc" element={<Misc />} />
          <Route path="/Std" element={<Std />} />
      </Routes>
      
    

  );
}
export default App;