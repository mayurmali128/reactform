import React from "react";
import { logout } from "../loggedslice";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";

const UserHome = ()=>{
    const dispatchRedux = useDispatch();
    let navigate = useNavigate();
    return(
        <div>
            <h1>This is user home page.</h1>
            <button className="btn btn-primary"
            onClick={(e)=>{
                e.preventDefault();
                dispatchRedux(logout());
                navigate('/login');
            }}>Logout</button>
        </div>
    )
}

export default UserHome;