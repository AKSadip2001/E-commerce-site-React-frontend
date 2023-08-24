import React, {useEffect} from 'react'

import Sidebar from '../../components/sidebar'
import AdminNav from '../../components/admin_navbar'

function UpdateProducts() {
    useEffect(() => {
        document.getElementById('products').className = "nav-link active";
        return () => {
            document.getElementById('dashboard').className = "nav-link";
            document.getElementById('customer-orders').className = "nav-link";
        }
    }, []);

    return (
        <body className="flex min-h-screen">
            <Sidebar/>
            <div className="w-full bg-white">
                <AdminNav/>
                <main className="w-4/6 m-auto text-lg leading-9">
                    <h1 className="mb-3 font-bold text-center"><i className="bi bi-card-checklist text-lg"></i> Add item</h1>
                    <div className="bg-white shadow-lg rounded  border px-3 py-5 mx-auto mb-5">
                        <form className="flex flex-col justify-center" method="post" action="" enctype="multipart/form-data" autocomplete="off">
                            <div className=" mb-3">
                                <input type="text" name="name" placeholder="Product Name"
                                    className="rounded" id="inputName"/>
                            </div>
                            <div className="mb-3">
                                <input type="text" name="price" placeholder="Product Price"
                                    className="rounded" id="inputPrice"/>
                            </div>
                            <div className="mb-3">
                                <input type="file" name="image"
                                    className="rounded label" id="inputPhotoURL"/>
                            </div>
                            <input  type="submit" value="Add" name="add" className="bg-red-500 hover:bg-red-800 hover:bg-red-900 text-white btn-lg px-5 btn-add rounded"/>
                        </form>
                    </div>

                    <h1 className="pt-5 mb-3 font-bold text-center"><i className="bi bi-card-checklist"></i> List of items available</h1>
                    <div className="bg-white shadow-lg rounded px-0 py-5 mx-auto mb-5">
                        <table className="m-auto">
                            <thead>
                                <tr>
                                    <th className="px-5">Product ID</th>
                                    <th className="px-5">Product Name</th>
                                    <th className="px-5">Product Price</th>
                                    <th className="px-5">Product Photo URL</th>
                                    <th className="px-5">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td className="px-5">1</td>
                                        <td className="px-5">Iphone</td>
                                        <td className="px-5">TK 120000/-</td>
                                        <td className="px-5">'pix1.jpg'</td>
                                        <td className="px-5">
                                            <button><i className="bg-green-500 hover:bg-green-800 p-1 rounded bi bi-pencil-square btnEdit me-2"></i></button>
                                            <button><i className="bg-red-500 hover:bg-red-800 p-1 rounded bi bi-archive btnDelete"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5">2</td>
                                        <td className="px-5">Samsung</td>
                                        <td className="px-5">TK 100000/-</td>
                                        <td className="px-5">'pix2.jpg'</td>
                                        <td className="px-5">
                                            <button><i className="bg-green-500 hover:bg-green-800 p-1 rounded bi bi-pencil-square btnEdit me-2"></i></button>
                                            <button><i className="bg-red-500 hover:bg-red-800 p-1 rounded bi bi-archive btnDelete"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5">3</td>
                                        <td className="px-5">Oneplus</td>
                                        <td className="px-5">TK 40000/-</td>
                                        <td className="px-5">'pix3.jpg'</td>
                                        <td className="px-5">
                                            <button><i className="bg-green-500 hover:bg-green-800 p-1 rounded bi bi-pencil-square btnEdit me-2"></i></button>
                                            <button><i className="bg-red-500 hover:bg-red-800 p-1 rounded bi bi-archive btnDelete"></i></button>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </body>
    )
}

export default UpdateProducts