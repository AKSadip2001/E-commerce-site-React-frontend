import React, {useEffect} from 'react'

import Sidebar from '../../components/sidebar'
import AdminNav from '../../components/admin_navbar'

function CustomerOrders() {
    useEffect(() => {
        document.getElementById('customer-orders').className = "nav-link active";
        return () => {
            document.getElementById('dashboard').className = "nav-link";
            document.getElementById('products').className = "nav-link";
        }
      }, []);
    return (
        <body className="flex min-h-screen">
            <Sidebar/>
            <div className="w-full bg-white">
                <AdminNav/>
                <main className="flex flex-col m-auto py-5 text-lg leading-9 w-4/6">
                    <h1 className="mb-3 font-bold text-center display-flex"><i className="bi bi-view-list fs-1"></i> Order List</h1>
                    <table>
                        <thead className='bg-red-600 text-white'>
                            <tr>
                            <th>OrderID</th>
                            <th>Customer ID</th>
                            <th>Order List</th>
                            <th>Total</th>
                            <th>Order Date</th>
                            <th>Order Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td>Order1</td>
                                <td>01738389415</td>
                                <td>Iphone</td>
                                <td>120000 tk</td>
                                <td>24/08/2023</td>
                                <td>
                                    <button type="button" className="bg-green-600 hover:bg-green-900 rounded px-2 text-white">Delivered</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Order2</td>
                                <td>01738389416</td>
                                <td>Oneplus</td>
                                <td>40000 tk</td>
                                <td>24/08/2023</td>
                                <td>
                                    <button type="button" className="bg-blue-600 hover:bg-blue-900 rounded px-2 text-white">Pending</button>
                                </td>
                            </tr>               
                        </tbody>
                    </table>
                </main>
            </div>
        </body>
    )
}

export default CustomerOrders