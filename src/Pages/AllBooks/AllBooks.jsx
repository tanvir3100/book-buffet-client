import { Link, useLoaderData } from "react-router-dom";


const AllBooks = () => {
    const books = useLoaderData()


    return (
        <div className="px-5 lg:px-10 mx-auto">
            <h2 className="text-5xl text-white text-center my-10"> All Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 mt-10">
                {
                    books.map(book => <div key={book._id} className="card card-compact rounded-none bg-base-100 shadow-xl h-[450px]">
                        <figure><img className="h-52 w-full" src={book.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{book.name}</h2>
                            <p>BY:{book.authorName}</p>
                            <p>Rating:{book.rating}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/update/${book._id}`}>
                                    <button className="btn badge badge-outline rounded-none border border-emerald-500 btn-accent font-bold w-full">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllBooks;