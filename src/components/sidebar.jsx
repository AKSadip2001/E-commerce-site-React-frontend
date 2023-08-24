import React from 'react'
import {Link} from "react-router-dom"

import './sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar flex flex-col shrink-0 pt-5 px-5 md:px-3 font-bold">
            <ul className="nav-pills flex-col mb-auto mt-3">
                <li className="nav-item text-lg">
                    <Link className="nav-link" to='/dashboard' id='dashboard'>
                        <i className="bi bi-house-door me-2"></i>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="nav-item text-lg">
                    <Link className="nav-link" to='/products' id='products'>
                        <i className="bi bi-menu-down me-2"></i>
                        <span>Products</span>
                    </Link>
                </li>
                <li className="nav-item text-lg">
                    <Link className="nav-link" to='/customer-orders' id='customer-orders'>
                        <i className="bi bi-view-list me-2"></i>
                        <span>Customer Orders</span>
                    </Link>
                </li>
                <li className="nav-item text-lg">
                    <Link className="nav-link">
                        <i className="bi bi-envelope-open me-2"></i>
                        <span>Feedbacks</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar