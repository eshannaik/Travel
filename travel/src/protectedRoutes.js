// import react from 'react';
import {Navigate} from 'react-router-dom';
import {Outlet} from 'react-router'

// rest is the rest of the props like path etc
// component is the page to render
// auth is to check if user is logged in or not

const ProtectedRoute = ({auth}) => {
    const isAuth = auth;

    return isAuth ? <Outlet /> : <Navigate to = "main/signin" />
}

export default ProtectedRoute