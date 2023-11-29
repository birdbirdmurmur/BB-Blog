import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header>
                <div className="header">
                    <div className='logo'>
                        <Link to="/">
                            <h1>BirdBirdmurmur</h1>
                        </Link>
                    </div>
                    <div className='menu'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </header>
        </>
    )
}
