import React from 'react'

import brandIcon from "../assets/logos/logo.png";
import './admin_navbar.css';
import { Link } from 'react-router-dom';

function AdminNav() {
    return (
        <nav class="navbar bg-white text-lg">
            <div class="flex justify-between container px-10">
                <Link class="navbar-brand text-red-600 font-bold flex items-center" to='/dashboard'>
                    <img src={brandIcon} alt="Logo" width="36"
                        class="inline-block align-text-top me-2"/>
                    E-commerce
                </Link>
                <div class="flex">
                    <p class="mb-0 me-2">Admin</p>
                    <Link type="submit">
                        <i class="bi bi-person-circle me-2"></i>
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default AdminNav