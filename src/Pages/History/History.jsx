import { Link, useLoaderData } from "react-router-dom";


const History = () => {
    const books = useLoaderData()
    const params = location.pathname
    const SliceParams = params.slice(1, 8)
    const histories = books.filter((book) => book.category === SliceParams)
    return (
        <div>
            <h2 className="text-white text-center font-bold text-5xl my-10">HISTORY BOOKS SECTION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-10 mx-auto">
                {
                    histories.map(history => <div key={history._id} className="card card-compact bg-base-100 shadow-xl rounded-none h-[450px]">
                        <figure><img src={history.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{history.name}</h2>
                            <p>BY:{history.authorName}</p>
                            <p>Rating:{history.rating}</p>
                            <div className="card-actions justify-end">
                            <Link to={`/details/${history._id}`}>
                                    <button className="badge badge-outline btn rounded-none border border-emerald-500 btn-accent font-bold w-full">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default History;