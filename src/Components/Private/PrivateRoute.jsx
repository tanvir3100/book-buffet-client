/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { ImSpinner2 } from 'react-icons/im';



const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="lg:w-full lg:h-[100vh] flex justify-center items-center text-center"><span className="loading loading-bars loading-lg "><ImSpinner2/></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;