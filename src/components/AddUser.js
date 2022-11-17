import SideBar from "./sideNav";
import "../css/AddUser.css";
function AddUser() {

    const registerUser=()=>{
        alert("User is registerd")
        
    }
    return (  
        <div className="row">
            <div className="col-3 md" >
                <SideBar />
            </div>
            <div className="col-9 md" >
            <div className="form">
            <form onSubmit={registerUser}>

          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
            </form>
      </div>
            </div>
        </div>
        
    );
}

export default AddUser;