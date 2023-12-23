import React from "react";
import { useSelector } from "react-redux"

import { Outlet,Navigate } from "react-router-dom";

function ProtectedRoutes(){
    const mystate = useSelector(state=>state.logged);
    const auth = mystate;
    return auth? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;