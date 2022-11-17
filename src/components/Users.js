
import Card from './Card';
import { useNavigate, useNavigation } from 'react-router-dom';
import React, { useState } from 'react';

import SideBar from './sideNav';

function Users() {
        const [users, setusers] = useState(4);
       

    const [timezones, setTimezones] = useState([
        {
            id: 2,
            Country: "Pakistan",
            Hours: "01",
           
        },
        {
            id: 3,
            Country: "London",
            Hours: "10",
           
        },
        {
            id: 4,
            Country: "Turkey",
            Hours: "06",
           
        },
        {
            id: 5,
            Country: "Europe",
            Hours: "07",
           
        },
        
    ]);

    const Delete=(id)=>{
        
        setTimezones(timezones.filter((std) => 
        std.id !== id));
 
        console.log("student with id "+id+"deleted");
        setusers(prevState => prevState - 1);
    }
    function increment() {
        setusers(prevState => prevState + 1);
      }
    
    return(
   <>

            {/* <Card Timezones={timezones} setTimezones={setTimezones}/> */}
            <div className='bg' style={{display:"flex"}}>

    
{
    timezones.map((timezone) =>
    <div class="card text-center col-2" style={{width: "15rem"}}>
<div class="card-body">
<h5 class="card-title">{timezone.Country}</h5>
<p class="card-text">{timezone.Hours}
</p>
<button className="btn btn-danger"
                                onClick={() => Delete(timezone.id)}>
                                Delete
                            </button>
</div>
</div>
)}
</div>
   </>
        
    );
}

export default Users;