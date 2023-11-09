import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const books = useLoaderData();
    const { _id, image, name, authorName, quantityOfBooks, category, shortDescription, description, rating } = books


    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const authorName = form.author.value;
        const quantityOfBooks = form.quantity.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const updateBook = { image, name, authorName, quantityOfBooks, description, category, shortDescription, rating }
        console.log(updateBook)


        fetch(`https://book-buffet-server-site.vercel.app/books/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'done...',
                        text: 'Book updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        form.reset();
                    })
                }
            })
    }




    return (
        <div className="lg:w-3/4 mx-auto bg-slate-100 border rounded-xl">
            <h2 className="text-3xl text-center font-bold pt-5">Add a new Book</h2>
            <form onSubmit={handleUpdate} className="card-body grid grid-cols-1 md:grid-cols-2 pt-0">
                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="Image" name="image" defaultValue={image} className="input input-bordered shadow-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" defaultValue={name} className="input input-bordered shadow-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity of the book</span>
                    </label>
                    <input type="text" placeholder="Quantity of the book" name="quantity" defaultValue={quantityOfBooks} className="input input-bordered shadow-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input type="text" placeholder="Author Name" name="author" defaultValue={authorName} className="input input-bordered shadow-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" placeholder="category" name="category" defaultValue={category} className="input input-bordered shadow-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input type="text" placeholder="Short description" name="shortDescription" defaultValue={shortDescription} className="input input-bordered shadow-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered shadow-md" required />
                </div>
                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <textarea placeholder="Description" name="description" defaultValue={description} id="" cols="30"  className="input input-bordered shadow-md p-2" required></textarea>
                </div>
                <div className="form-control mt-6 md:col-span-2">
                    <button className="btn bg-gradient-to-r from-slate-600 from-10% via-slate-800 via-30% to-slate-500 to-90% border-none text-white">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Update;