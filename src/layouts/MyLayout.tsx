import { Navigate, Outlet } from 'react-router-dom'

const MyLayout = () => {

    const token = localStorage.getItem('token');


    if (!token) return <Navigate to="/login" />

    return (
        <div>
            <h1>This is MyLayout {token}</h1>
            <Outlet />
        </div>
    )
}

export default MyLayout