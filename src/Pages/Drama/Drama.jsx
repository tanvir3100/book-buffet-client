import { useLoaderData } from "react-router-dom";


const Drama = () => {
    const books = useLoaderData()
    const params = location.pathname
    const SliceParams = params.slice(1, 6)
    const dramas = books.filter((book) => book.category === SliceParams)
    return (
        <div>
            <h2 className="text-white text-center font-bold text-5xl my-10">DRAMA BOOKS SECTION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-10 mx-auto">
                {
                    dramas.map(drama => <div key={drama._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={drama.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{drama.name}</h2>
                            <p>BY:{drama.authorName}</p>
                            <p>Rating:{drama.rating}</p>
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

export default Drama;