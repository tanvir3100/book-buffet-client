import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const AddBooks = () => {

    const handleSubmit = event => {
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
        const newBook = { image, name, authorName, quantityOfBooks, description, category, shortDescription, rating }
        console.log(newBook)

        fetch('http://localhost:4500/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Book is Added",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        form.reset();
                    })
                }
            })
    }




    return (
        <div className="">
            <div className="lg:w-3/4 mx-auto bg-slate-100 border rounded-xl">
                <h2 className="text-3xl text-center font-bold pt-5">Add a new Book</h2>
                <form onSubmit={handleSubmit} className="card-body grid grid-cols-1 md:grid-cols-2 pt-0">
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image" name="image" className="input input-bordered shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity of the book</span>
                        </label>
                        <input type="text" placeholder="Quantity of the book" name="quantity" className="input input-bordered shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" placeholder="Author Name" name="author" className="input input-bordered shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="category (Lowercase is required)" name="category" className="input input-bordered shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <input type="text" placeholder="Short description" name="shortDescription" className="input input-bordered shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered shadow-md" required />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <textarea placeholder="Description" name="description" id="" cols="30" rows="10" className="input input-bordered shadow-md p-2" required></textarea>
                    </div>
                    <div className="form-control mt-6 md:col-span-2">
                        <button className="btn bg-gradient-to-r from-slate-600 from-10% via-slate-800 via-30% to-slate-500 to-90% border-none text-white">Add button</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;