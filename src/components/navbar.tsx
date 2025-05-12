import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar bg-base-100 shadow-sm'>
            <div className='navbar-start'>
                <h1 className='p-2'>rreglo</h1>
            </div>
            <div className='navbar-end hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link className='transition duration-500' href='/'>Users</Link>
                    </li>
                    <li>
                        <Link className='transition duration-500' href='/ygo'>YGO</Link>
                    </li>
                    <li>
                        <Link className='transition duration-500' href='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar