import React from "react";

import { Outlet,Navigate } from "react-router-dom";

function ProtectedRoutes(){
    const auth = true;
    return auth? <Outlet/> : <Navigate to='/login'/>
}