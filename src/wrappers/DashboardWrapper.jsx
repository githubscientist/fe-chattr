import { Navigate, Outlet, useLoaderData } from "react-router";
import NavBar from "../components/NavBar";

const DashboardWrapper = () => {

    const user = useLoaderData();

    console.log(user);

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <NavBar
                user={user.user}
            />
            <Outlet />
        </>
    )
}

export default DashboardWrapper;