import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const LayoutWrapper = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default LayoutWrapper;