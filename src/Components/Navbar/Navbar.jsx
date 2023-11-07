import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Navbar = () => {
    const { user } = useContext(AuthContext)
    const navLink = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/addBooks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
            }
        >
            AddBook
        </NavLink>
        <NavLink
            to="/allBooks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
            }
        >
            AllBooks
        </NavLink>
        <NavLink
            to="/update"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
            }
        >
            Update
        </NavLink>
        <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
            }
        >
            Login
        </NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to="/"><p className='text-2xl font-bold text-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-none'>Book<span className='text-[#971cdf88]'>Buffet</span></p></Link>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLink}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user.photoURL} /> :
                                    <img src="https://i.ibb.co/FVJxkMs/istockphoto-1495088043-612x612-removebg-preview.png" />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;