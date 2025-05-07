import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <h1 className='p-2'>Richmond Reglo</h1>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Users</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Cards</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar