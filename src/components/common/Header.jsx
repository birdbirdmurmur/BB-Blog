import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    const [responsive, setResponsive] = useState(false)
    return (
        <>
            <header>
                <div className="container">
                    <div className='logo'>
                        <Link to="/">
                            <h1>BirdBirdmurmur</h1>
                        </Link>
                    </div>
                    <div className={responsive ? 'hideMenu' : 'nav'}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <button className='toggle' onClick={() => setResponsive(!responsive)}>
                        =
                    </button>
                </div>
            </header>
        </>
    )
}
