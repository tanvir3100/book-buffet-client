import { useLoaderData } from "react-router-dom";


const Thriller = () => {

    const books = useLoaderData()
    const params = location.pathname
    const SliceParams = params.slice(1, 9)
    const thrillers = books.filter((book) => book.category === SliceParams)

    return (
        <div>
            <h2 className="text-white text-center font-bold text-5xl my-10">THRILLER BOOKS SECTION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-10 mx-auto">
                {
                    thrillers.map(thriller => <div key={thriller._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={thriller.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{thriller.name}</h2>
                            <p>BY:{thriller.authorName}</p>
                            <p>Rating:{thriller.rating}</p>
                            <div className="card-actions justify-end">
                                <button className="badge badge-outline btn rounded-full border border-emerald-500 btn-accent font-bold w-full">Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Thriller;