

import React, { useState } from 'react';


function Std() {
        const [users, setusers] = useState(4);
       

    const [student, setStudent] = useState([
        {
            id: 1,
            name: "Muhammad Saeed",
            username: "umair123",
            Email:"Maliksaeed54321@gmail.com",
            password:"abc123",
        },
        {
            id: 2,
            name: "kashif",
            username: "umair123",
            Email:"Maliksaeed54321@gmail.com",
            password:"abc123",
        },

        {
            id: 3,
            name: " shahwaiz",
            username: "umair123",
            Email:"Maliksaeed54321@gmail.com",
            password:"abc123",
        },
        {
            id: 4,
            name: "umair",
            username: "umair123",
            Email:"Maliksaeed54321@gmail.com",
            password:"abc123",
        },
    ]);

    const Delete=(id)=>{
        
        setStudent(student.filter((std) => 
        std.id != id));
 
        console.log("student with id "+id+"deleted");
        setusers(prevState => prevState - 1);
    }
    function increment() {
        setusers(prevState => prevState + 1);
      }

    
    return(
   
        <div>
        
        <div className="col-2 md">
                      
                    </div>
                    <div className="col-10 md" style={{display:"flex",justifyContent:"center"}}>
                    <div>
                    <h2>Users</h2>
                    <table className="table table-bordered">
                        <tr>
                            <thead>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Delete User</th>
                                
                            </thead>
                            <tbody>
                            {
        
                        student.map((student) =>
                                <tr tr key={student.id} >
                                        
                                    <td style={{textAlign:"center"}}>{student.id}</td>
                                    <td style={{textAlign:"center"}}>{student.name}</td>
                                    <td style={{textAlign:"center"}}>{student.username}</td>
                                    <td style={{textAlign:"center"}}>{student.Email}</td>
                                    <td style={{textAlign:"center"}}>{student.password}</td>
                                    <td>
                                    <button className="btn btn-danger" 
                                        onClick={() => Delete (student.id)}>
                                                    Delete
                                            </button>
                                    </td>
                                </tr>
                            )
                                    
                            }
                            
                            </tbody>
                        </tr>
                    </table>
                    {/* <Card Tusers={student}/>
                    <button onClick={increment}>Add</button> */}
                    {/* <button onClick={()=>{toCard()}}>View</button> */}
                </div>
                
                    </div>
                    
                    <div>
                    
                    </div>
                </div>  
      
        
    );
}

export default Std;