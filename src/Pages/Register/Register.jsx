import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(name, email, password)


        createUser(email,password)
        .then(result=> {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })


    }




    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className='py-2 pl-2 w-full flex justify-between items-center px-10 mx-auto'>
                <Link to="/"><button className='btn px-10 border rounded-full'>Back</button></Link>
                <Link to="/"><h1 className='text-2xl font-bold text-white btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-none'>Book<span className='text-[#971cdf88]'>Buffet</span></h1></Link>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center flex-1 flex justify-center items-center">
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="text-5xl font-bold text-white">Register now!</h1>
                            <p className="py-6 text-white">Join our community of book lovers! Register now to discover, share, and build your personal bookshelf.<br /> Ready to embark on a literary adventure? Create your account to access a world of books waiting to be explored.</p>
                            <img data-aos="zoom-in-up"
                                data-aos-easing="linear"
                                data-aos-duration="1400" className="w-[50%] flex justify-center items-center" src="https://i.ibb.co/10JTBqQ/replicate-prediction-mrua26bbfatulbjmifba4as4ka.png" alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white flex-1">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Inter your Name" name='name' className="input input-bordered rounded-full" required />
                            </div>
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
                                <button className="btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white border rounded-full">Register</button>
                            </div>
                            <p className='text-center'>If Register ? <Link to="/login"><span className='hover:underline text-red-500'>Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;