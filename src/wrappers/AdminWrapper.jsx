import { Navigate, Outlet, useLoaderData } from "react-router";
import NavBar from "../components/NavBar";

const AdminWrapper = () => {

    const user = useLoaderData();

    if (!user) {
        return <Navigate to="/login" />
    }

    if (user.user.role != 'admin') {
        return <Navigate to="/dashboard" />
    }

    return (
        <>
            <NavBar
                user={user.user}
            />
            <Outlet />
        </>
    );
}

export default AdminWrapper;