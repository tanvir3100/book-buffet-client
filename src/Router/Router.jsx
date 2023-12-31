import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddBooks from "../Pages/AddBook/AddBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BorrowBooks from "../Pages/BorrowBooks/BorrowBooks";
import Update from "../Pages/Update/Update";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/Error/ErrorPage";
import Novel from "../Pages/Novel/Novel";
import History from "../Pages/History/History";
import Drama from "../Pages/Drama/Drama";
import Thriller from "../Pages/Thriller/Thriller";
import PrivateRouter from "../Components/Private/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addBooks',
                element: <PrivateRouter><AddBooks></AddBooks></PrivateRouter>
            },
            {
                path: '/allBooks',
                element: <AllBooks></AllBooks>,
                loader: () => fetch('https://book-buffet-server-site.vercel.app/books')
            },
            {
                path: '/borrowBooks',
                element: <PrivateRouter><BorrowBooks></BorrowBooks></PrivateRouter>,
                loader: () => fetch('https://book-buffet-server-site.vercel.app/booksCart')
            },
            {
                path: '/update/:id',
                element: <PrivateRouter><Update></Update></PrivateRouter>,
                loader: ({ params }) => fetch(`https://book-buffet-server-site.vercel.app/books/${params.id}`)
            },
            {
                path: '/novel',
                element: <Novel></Novel>,
                loader: () => fetch('https://book-buffet-server-site.vercel.app/books')
            },
            {
                path: '/history',
                element: <History></History>,
                loader: () => fetch('https://book-buffet-server-site.vercel.app/books')
            },
            {
                path: '/drama',
                element: <Drama></Drama>,
                loader: () => fetch('https://book-buffet-server-site.vercel.app/books')
            },
            {
                path: '/thriller',
                element: <Thriller></Thriller>,
                loader: () => fetch('https://book-buffet-server-site.vercel.app/books')
            },
            {
                path: '/details/:id',
                element: <PrivateRouter><Details></Details></PrivateRouter>,
                loader: ({ params }) => fetch(`https://book-buffet-server-site.vercel.app/books/${params.id}`)
            }

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
]);


export default router;