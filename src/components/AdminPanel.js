
import SideBar from "./sideNav";
import { useState } from "react";

function AdminPanel() {
    const [description, setDescription] = useState('');
    const [task, setTasks] = useState([]);
    const myStyle={
            width:"50rem",
            display:"flex",

    }
    const Delete=(description)=>{
        
        setTasks(task.filter((task) => 
        task.description!= description));

    }
    return ( 
        <div className="row">
            <div className="col-4 md" >
                <SideBar/>
            </div>                  
            <div className="col-8 md" style={{display:"flex",alignItems:"center",height:"90vh",}}>
                <div>
                <div class="card text-white bg-dark mb-3" style={myStyle}>
  <div class="card-header">TO DO LIST</div>
  <div class="card-body">
    <h5 class="card-title">Tasks<input
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
     <button onChange={() => {
        setDescription(' ');
        task.push({
          description:description,
        });
      }}>Add</button></h5>
    <p class="card-text"><ul>
        {task.map(task => (
            <li >{task.description} 
            <button className="btn btn-danger"
                                onClick={() => Delete(task.description)}>
                                remove
                            </button></li>
                 
        ))
        
        }
      </ul></p>
  </div>
</div>
                    
                </div>
            </div>
        </div>

     );
}

export default AdminPanel;