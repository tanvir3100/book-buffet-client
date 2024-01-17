import video from "../../assets/library_-_846 (Original).mp4"
import { BsSearch } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Poster = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="object-cover w-full relative">
            <video src={video} autoPlay loop muted />
            <div className="absolute w-[100%] h-[100%] top-0 flex justify-center items-center left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.8)]">
                <div className="lg:space-y-5">
                    <h1 data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text text-3xl lg:text-7xl">
                        Welcome To Our Library</h1>
                    <p className="text-xl lg:text-4xl font-bold text-center text-white " data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500">We are Always With You</p>
                    <div className="w-full flex justify-center items-center">
                        <form className="border-none rounded-full">
                            <div>
                                <input className="p-1 lg:p-2 rounded-l-full lg:w-64" type="search" placeholder="search..." name="search" />
                                <button className="float-right border border-none border-cyan-600 text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 lg:p-2 rounded-r-full w-20 h-8 lg:h-10 flex justify-center items-center"><BsSearch className="text-black font-bold"></BsSearch></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poster;