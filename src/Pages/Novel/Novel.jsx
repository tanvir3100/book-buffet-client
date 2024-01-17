import { Link, useLoaderData } from "react-router-dom";


const Novel = () => {

    const books = useLoaderData()
    const params = location.pathname
    const SliceParams = params.slice(1, 6)
    const novels = books.filter((book) => book.category === SliceParams)

    return (
        <div>
            <h2 className="text-white text-center font-bold text-5xl my-10">NOVEL BOOKS SECTION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-10 mx-auto">
                {
                    novels.map(novel => <div key={novel._id} className="card card-compact rounded-none bg-base-100 shadow-xl h-[450px]">
                        <figure><img src={novel.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{novel.name}</h2>
                            <p>BY:{novel.authorName}</p>
                            <p>Rating:{novel.rating}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/details/${novel._id}`}>
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

export default Novel;