

const Update = () => {
    return (
        <div className="lg:w-3/4 mx-auto bg-slate-300">
            <h2 className="text-3xl text-center font-bold pt-5">Update Book</h2>
            <form className="card-body grid grid-cols-1 md:grid-cols-2 pt-0">
                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="Image" name="image" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" placeholder="Brand Name" name="brandName" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <input type="text" placeholder="Type" name="type" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input type="text" placeholder="Short description" name="shortDescription" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6 md:col-span-2">
                    <button className="btn bg-gray-600 border-none text-white">Add button</button>
                </div>
            </form>
        </div>
    );
};

export default Update;