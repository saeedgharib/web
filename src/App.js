import Assignment from "./Assignment";
import Checkout from "./checkout";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <> 
    <Routes>
      
        <Route path="/" element={ <Assignment/>} />
       
        <Route path="/Checkout" element={ <Checkout /> } />
      </Routes>
    </>
  );
}

export default App;
