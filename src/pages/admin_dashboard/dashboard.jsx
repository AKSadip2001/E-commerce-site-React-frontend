import React, {useEffect} from 'react';

import './dashboard.css';
import backgroundImage from "../../assets/logos/backgroundImage.webp";
import Sidebar from '../../components/sidebar';
import AdminNav from '../../components/admin_navbar';
import { Link } from 'react-router-dom';

function Dashboard() {
    useEffect(() => {
        document.getElementById('dashboard').className = "nav-link active";
        return () => {
            document.getElementById('products').className = "nav-link";
            document.getElementById('customer-orders').className = "nav-link";
        }
    }, []);

    return (
        <body className="flex min-h-screen">
            <Sidebar/>
            <div className="w-full flex flex-col justify-between">
                <AdminNav/>
                <div className="container text-center text-xl">
                    <div className="flex-wrap my-10">
                        <button type=" button" className="btn-dashboard bg-green px-4 py-3 mx-5 rounded">
                            <Link className="flex flex-col"><i className="bi bi-menu-down text-white text-3xl"></i></Link>
                            <span className="info">Products: 3</span>
                        </button>
                    
                        <button type="button" className="btn-dashboard bg-blue-500 px-4 py-3 mx-5 rounded">
                            <Link className="flex flex-col"><i className="bi bi-view-list text-white text-3xl"></i></Link>
                            <span className="info">Pending Orders: 2</span>
                        </button>
                    
                        <button type="button" className="btn-dashboard bg-red-500 px-4 py-3 mx-5 rounded">
                            <Link className="flex flex-col"><i className="bi bi-envelope-open text-white text-3xl"></i></Link>
                            <span className="info">Feedbacks: 5</span>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <img src={backgroundImage} className="" alt="background-pic"/>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Dashboard