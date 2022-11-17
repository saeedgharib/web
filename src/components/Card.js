
import * as React from 'react';

import Users from "./Users";
function MediaCard(props) {

    const Delete=(id)=>{
        
        props.setTimezones(props.timezones.filter((std) => 
        std.id !== id));
 
        console.log("student with id "+id+"deleted");
       
    }
  return (
    <div className='bg' style={{display:"flex"}}>

    
    {
        props.Timezones.map((timezone) =>
        <div class="card text-center col-2" style={{width: "15rem"}}>
  <div class="card-body">
    <h5 class="card-title">{timezone.Country}</h5>
    <p class="card-text">{timezone.Hours}
    </p>
    <button class="btn btn-danger">Delete</button>
  </div>
</div>
  )}
    </div>
  );
}

export default MediaCard;