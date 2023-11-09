import { useLoaderData } from "react-router-dom";


const Details = () => {
    const books = useLoaderData();
    const { image, name, authorName, description, rating } = books

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <p className="py-6 font-bold">{authorName}</p>
                        <p className="py-6 font-bold">{rating}</p>
                        <button className="btn">borrow</button>
                        <button className="btn">read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;