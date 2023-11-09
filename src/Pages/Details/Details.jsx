/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const Details = () => {
    const books = useLoaderData();
    const { image, name, authorName, description, rating, quantityOfBooks, category, shortDescription } = books
    const { user } = useContext(AuthContext)

    const handleAddCart = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const returnDate = form.date.value;
        console.log(userName, userEmail, returnDate)

        const bookCart = { image, name, authorName, quantityOfBooks, description, category, shortDescription, rating, userName, userEmail, returnDate }
        fetch('https://book-buffet-server-site.vercel.app/booksCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    location.reload();
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl w-full" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <p className="py-6 font-bold">{authorName}</p>
                        <p className="py-6 font-bold">{rating}</p>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn badge badge-outline rounded-full border border-emerald-500 btn-accent mr-2" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div>
                                    <form onSubmit={handleAddCart} method="dialog">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="text" placeholder="email" defaultValue={user.email} name="email" className="input input-bordered shadow-md" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Return date</span>
                                                </label>
                                                <input type="date" name="date" className="input input-bordered shadow-md" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" placeholder="name" defaultValue={user.displayName} name="name" className="input input-bordered shadow-md" required />
                                            </div>
                                        </div>
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn badge badge-outline rounded-full border border-emerald-500 btn-accent">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <button className="btn badge badge-outline rounded-full border border-emerald-500 btn-accent" onClick={() => document.getElementById('my_modal_3').showModal()}>Read</button>
                        <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">{name}</h3>
                                <p className="py-4">{description}</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn badge badge-outline rounded-full border border-emerald-500 btn-accent">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;