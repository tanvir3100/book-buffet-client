import { Link } from "react-router-dom";


const BestSell = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/mFq0NzP/91-F3-C16-EB111-FCADFC0155715-A5-BC877-E6356-E7-B.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="text-white">
                        <h1 className="text-5xl font-bold">Our Best Sell!</h1>
                        <p className="py-6">50 Years of Ms. the best of the pathfinding <br /> Magazine that lgnited a Revolution This is Our best sell in 2024.</p>
                        <Link to={`/history`}>
                            <div className="badge badge-outline btn rounded-none border border-emerald-500 btn-accent font-bold w-full">Start Now</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSell;