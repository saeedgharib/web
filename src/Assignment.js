//import "./Menubar.css";
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

function Assignment() { 
    
    const [Quantity, setQuantity] = useState(1)


    function Increment() {
        setQuantity(prevState => prevState + 1);
    }
    function Decrement() {
        setQuantity(prevState => prevState - 1);
    }
        return ( 
       <>
       <div className='col-4 md'>

<div className="card " style={{ width: "20rem",border:"solid-Black"}}>
<img src={require('./images.jpeg')} className="card-img" alt="img" style={{width:"250px",}} />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Checkout" ><button id="CBtn">Buy</button> </Link>
    <button onClick={Increment}>
        +
      </button>
      {" "+Quantity+" "}
      <button onClick={Decrement}>
        -
      </button>
  </div>
</div>
       </div>
    <div className="card" style={{ width: "20rem",border:"solid-Black"}}>
<img src={require('./images.jpeg')} className="card-img" alt="img" style={{width:"250px",}} />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Checkout" ><button id="CBtn">Buy</button> </Link>
    <button onClick={Increment}>
        +
      </button>
      {Quantity}
      <button onClick={Decrement}>
        -
      </button>
  </div>
</div>    
</>
 );
}

export default Assignment;