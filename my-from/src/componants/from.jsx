import { useReducer } from "react";
import {Link } from "react-router-dom";



const LoginForm = ()=>{
    const init ={
        username :{value:"",valid:false, touch:false, error:""},
        password :{value:"",valid:false, touch:false, error:""},
    }
    const reducer = (state,action)=>{
        if(action.type==="update"){
            return {...state,[action.fld]:action.val};
        }
        else{
            return init;
        }
    }

    const [cust,dispatch] = useReducer(reducer,init);

    const checkValid = (fld,v)=>{
        var ch = true;
        var msg = "Looks good!";
        switch(fld){
            case "username":
                var exp1  = /^[0-9a-zA-Z]{4,15}$/
                if(!exp1.test(v)){
                    ch = false;
                    msg = "Username should be between 4 to 15 characters and contains only digit and characters."
                }
                break;
            case "password":
                var exp2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
                if(!exp2.test(v)){
                    ch = false;
                    msg = "Password must contain Minimum 8 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                }
                break;
        }
        return {ch,msg};
    }

    const handleChange= (f,v)=>{
        const{ch,msg} = checkValid(f,v);
        dispatch({type:"update",fld:f,val:{value:v,valid:ch,touch:true,error:msg}});
    }

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

                <label for="validationServer01" class="form-label ">Enter username</label>
                <div class="input-group has-validation">
                    {/* <label for="validationServer01" class="form-label">Enter username</label> */}
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" className={cust.username.touch?(cust.username.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="username"required
                    value={cust.username.value} onChange={(e)=>{handleChange("username",e.target.value)}}/>
                    <div id="validationServerUsernameFeedback" className={cust.username.valid?"valid-feedback":"invalid-feedback"}>
                        {cust.username.error}
                    </div>
                </div>

                
                <label for="validationServer01" class="form-label pt-4">Password</label>
                <div class="input-group has-validation">
                    {/* <label for="validationServer01" class="form-label">Password</label> */}
                    <input type="password" className={cust.password.touch?(cust.password.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServer01" placeholder="Password"required
                    value={cust.password.value} onChange={(e)=>{handleChange("password",e.target.value)}}/>
                    <div className={cust.password.valid?"valid-feedback":"invalid-feedback"}>
                        {cust.password.error}
                    </div>
                </div>

                <div class="mt-3 d-grid gap-2 ms-5 me-5 pt-4">
                    <button className={cust.username.valid&&cust.password.valid ? "btn btn-primary":"btn btn-primary disabled"}>Login</button>
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