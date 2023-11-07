import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Main = () => {
    return (
        <div className="container mx-auto bg-gray-700">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;