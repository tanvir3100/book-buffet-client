import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddBooks from "../Pages/AddBook/AddBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BorrowBooks from "../Pages/BorrowBooks/BorrowBooks";
import Update from "../Pages/Update/Update";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addBooks',
                element: <AddBooks></AddBooks>
            },
            {
                path: '/allBooks',
                element: <AllBooks></AllBooks>
            },
            {
                path: '/borrowBooks',
                element: <BorrowBooks></BorrowBooks>
            },
            {
                path: '/update',
                element: <Update></Update>
            }

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element:<Register></Register>
    }
]);


export default router;