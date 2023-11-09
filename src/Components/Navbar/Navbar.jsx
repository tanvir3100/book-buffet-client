import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    const navLink = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-600 font-bold" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/addBooks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-600 font-bold" : ""
            }
        >
            AddBook
        </NavLink>
        <NavLink
            to="/allBooks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-600 font-bold" : ""
            }
        >
            AllBooks
        </NavLink>
        <NavLink
            to="/borrowBooks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-600 font-bold" : ""
            }
        >
            BorrowBooks
        </NavLink>
        <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-teal-600 font-bold" : ""
            }
        >
            Login
        </NavLink>
    </>
    return (
        <div>
            {
                user ? <div className="bg-slate-700 text-center flex justify-center items-center py-2">
                    <p className="text-white font-bold">Thank You @</p>
                    {
                        user ? <p className="text-white font-bold">{user.displayName}</p> : ''
                    }
                    <p className="text-white font-bold">@ For Stay With Us</p>
                </div> : ''
            }
            <div className="navbar bg-gradient-to-r from-black via-black to-black h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to="/"><p className='text-2xl font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent'>Book<span className="text-white">Buffet</span></p></Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5 text-xl text-white">
                            {navLink}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex justify-center items-center">
                            <div className="w-16 rounded-full">
                                {
                                    user ? <img src={user.photoURL} /> :
                                        <img src="https://i.ibb.co/FVJxkMs/istockphoto-1495088043-612x612-removebg-preview.png" />
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a onClick={handleLogOut}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;