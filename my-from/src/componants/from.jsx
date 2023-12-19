import {Link } from "react-router-dom";



const LoginForm = ()=>{
    return(
        <div>
            <div className="container mt-5  col-md-4 bg-light needs-validation pb-5 pt-5">
                <div className="row">
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4" style={{backgroundColor:"white"}}>
                        <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
                    </div>
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4">
                        <Link to="/register" style={{textDecoration: "none"}}> Register </Link>
                    </div>

                </div>

                <label for="validationServer01" class="form-label">Enter username</label>
                <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="username"required/>
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>

                
                <label for="validationServer01" class="form-label">Password</label>
                <input type="password" class="form-control is-valid" id="validationServer01" value="Mark" placeholder="Password"required/>
                <div class="valid-feedback">
                    Looks good!
                </div>

                <div class="mt-3 d-grid gap-2 ms-5 me-5">
                    <button class="btn btn-primary">Login</button>
                </div>

            </div>
        </div>
    )
}

const RegistrationForm = ()=>{
    return(
        <div>
            <div className="container mt-5  col-md-4 bg-light needs-validation pb-5 pt-5 rounded">
                <div className="row">
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4">
                        <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
                    </div>
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4" style={{backgroundColor:"white"}}>
                        <Link to="/register" style={{textDecoration: "none"}} > Register </Link>
                    </div>
                </div>

                <div className="row">
                    <div class="col-md">
                        <label for="validationServer01" class="form-label">First name</label>
                        <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" required/>
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div class="col-md">
                        <label for="validationServer02" class="form-label">Last name</label>
                        <input type="text" class="form-control is-valid" id="validationServer02"  placeholder="Last name" required/>
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                </div>

                <label for="validationServer01" class="form-label">Email</label>
                <input type="email" class="form-control is-valid" id="validationServer01" value="email" placeholder="email" required/>
                <div class="valid-feedback">
                    Looks good!
                </div>

                <div class="mt-3 d-grid gap-2 ms-5 me-5">
                    <button class="btn btn-primary">Register</button>
                </div>

            </div>
        </div>
    )
}


export {LoginForm,RegistrationForm}