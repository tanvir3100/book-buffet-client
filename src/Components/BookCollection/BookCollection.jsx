import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookCollection = () => {

    const [booksCategory, setBooksCategory] = useState([]);

    useEffect(() => {
        fetch('https://book-buffet-server-site.vercel.app/booksCategory')
            .then(res => res.json())
            .then(data => setBooksCategory(data));
    }, [])



    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl text-center text-white my-10">Our Books Collections</h1>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-0 mx-auto">
                {
                    booksCategory.map(book => <div key={book._id}>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1400"
                            className="card bg-base-100 shadow-xl mb-10">
                            <figure><img className="w-full h-96" src={book.image} alt="Photo" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {book.name}
                                </h2>
                                <div className="w-full">
                                    <Link to={`/${book.name}`}>
                                        <div className="badge badge-outline btn rounded-full border border-emerald-500 btn-accent font-bold w-full">go to {book.name}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BookCollection;