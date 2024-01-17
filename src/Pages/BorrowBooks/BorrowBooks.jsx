import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BorrowBooks = () => {
    const borrowBooks = useLoaderData()
    // const { image, name, authorName, quantityOfBooks, description, category, shortDescription, rating, userName, userEmail, returnDate } = borrowBooks
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://book-buffet-server-site.vercel.app/booksCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Book deleted successfully',
                                'success'
                            ).then(() => {
                                location.reload()
                            })

                        }
                    })
            }
        })
    }
    return (
        <div>
            <h1 className="text-5xl text-center text-white mb-5">All Book You Borrow</h1>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className="text-2xl">Customer Name</th>
                            <th className="text-2xl">Author Name</th>
                            <th className="text-2xl">Return Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        borrowBooks.map(book => <tbody key={book._id}>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={book.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{book.userName}</div>
                                            <div className="text-sm opacity-50">{book.userEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {book.authorName}
                                    <br />
                                    <span className="badge badge-ghost">{book.name}</span>
                                </td>
                                <td>{book.returnDate}</td>
                                <th>
                                    <button onClick={() => handleDelete(book._id)} className="btn">delete</button>
                                </th>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default BorrowBooks;

