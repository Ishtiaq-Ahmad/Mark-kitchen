import React from 'react'
import {Outlet } from 'react-router-dom'
import Login from './Login'

const ProtectedRoute = () => {
    const auth = true;
    return auth ? <Outlet /> : <Login/>;
}
export default ProtectedRoute
