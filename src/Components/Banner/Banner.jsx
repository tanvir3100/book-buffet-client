import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div className='bg-black'>
            <AwesomeSlider className='bg-black'>
                <div>
                    <img className='bg-cover' src="https://i.ibb.co/cNhLQX9/library-995182-1280.jpg" alt="" />
                    <div className="absolute h-full flex items-center left-0 top-0 w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-5 lg:w-1/2 pl-5 md:pl-14 lg:pl-24'>
                            <h1 className='text-3xl lg:text-7xl font-bold text-white'>Effortless Book Management and More</h1>
                            <p className='text-white'>Simplify Your Library Administration and Empower Readers. <br /> Elevate Your Library is Efficiency with Our Management Tools.</p>
                            <div className='flex gap-5'>
                                <button className="btn glass border-white text-white">About More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/2Pd6ZLn/susan-q-yin-2-JIvbo-GLeho-unsplash.jpg" alt="" />
                    <div className="absolute h-full flex items-center left-0 top-0 w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-5 lg:w-1/2 pl-5 md:pl-14 lg:pl-24'>
                            <h1 className='text-3xl lg:text-7xl font-bold text-white'>Effortless Book Management and More</h1>
                            <p className='text-white'>Simplify Your Library Administration and Empower Readers. <br /> Elevate Your Library is Efficiency with Our Management Tools.</p>
                            <div className='flex gap-5'>
                                <button className="btn glass border-white text-white">About More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/g3bScyn/library-488679-1280.jpg" alt="" />
                    <div className="absolute h-full flex items-center left-0 top-0 w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-5 lg:w-1/2 pl-5 md:pl-14 lg:pl-24'>
                            <h1 className='text-3xl lg:text-7xl font-bold text-white'>Effortless Book Management and More</h1>
                            <p className='text-white'>Simplify Your Library Administration and Empower Readers. <br /> Elevate Your Library is Efficiency with Our Management Tools.</p>
                            <div className='flex gap-5'>
                                <button className="btn glass border-white text-white">About More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/Ks7j8Jg/inaki-del-olmo-NIJu-EQw0-RKg-unsplash.jpg" alt="" />
                    <div className="absolute h-full flex items-center left-0 top-0 w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-5 lg:w-1/2 pl-5 md:pl-14 lg:pl-24'>
                            <h1 className='text-3xl lg:text-7xl font-bold text-white'>Effortless Book Management and More</h1>
                            <p className='text-white'>Simplify Your Library Administration and Empower Readers. <br /> Elevate Your Library is Efficiency with Our Management Tools.</p>
                            <div className='flex gap-5'>
                                <button className="btn glass border-white text-white">About More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;