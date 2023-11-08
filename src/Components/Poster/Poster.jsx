import video from "../../assets/library_-_846 (Original).mp4"
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
            <div className="absolute w-[100%] h-[100%] top-0 flex justify-center items-center">
                <div className="lg:space-y-10">
                    <h1 data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text text-3xl lg:text-7xl">
                        Welcome To Our Library</h1>
                    <p className="text-xl lg:text-4xl font-bold text-center text-white " data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1800">We are Always With You</p>
                    <div className="w-full flex justify-center items-center">
                        <button className="btn btn-outline border border-cyan-600 text-white rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poster;