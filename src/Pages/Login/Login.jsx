import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                console.log(res.user)
                toast('login Successful,go to home page')
            })
            .catch(error => {
                console.log(error)
                toast(error.message)
            })


    }






    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className='py-2 pl-2 w-full flex justify-between items-center px-10 mx-auto'>
                <Link to="/"><button className='btn px-10 border rounded-full'>Back ot Home</button></Link>
                <Link to="/"><h1 className='text-2xl font-bold text-white btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-none'>Book<span className='text-[#971cdf88]'>Buffet</span></h1></Link>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center flex-1 flex justify-center items-center">
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="text-5xl font-bold text-white mt-5 md:mt-0">Login now!</h1>
                            <p className="py-6 text-white">Welcome to our literary haven. Log in to embark on your reading journey <br /> and unlock the world of books.Access a world of stories, <br /> knowledge, and imagination. Login now to dive into the pages of your favorite books.</p>
                            <img data-aos="zoom-in-up"
                                data-aos-easing="linear"
                                data-aos-duration="1400" className="w-[50%] flex justify-center items-center" src="https://i.ibb.co/10JTBqQ/replicate-prediction-mrua26bbfatulbjmifba4as4ka.png" alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white flex-1">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered rounded-full" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white border rounded-full">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning bg-white text-black border rounded-full"><FcGoogle></FcGoogle>Login With Google</button>
                            </div>
                            <p className='text-center'>If Not Register ? <Link to="/register"><span className='hover:underline text-red-500'>Register</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;