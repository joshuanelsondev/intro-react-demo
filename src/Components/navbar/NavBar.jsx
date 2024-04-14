// NavBar.jsx

import './NavBar.scss'

export default function NavBar () {

    return (
        <div className='nav'>
            <button className='nav__about'>What is Pursuit?</button>
            <button className='nav__create'>Create an account</button>
            <button className='nav__signin'>Sign in</button>
        </div>
    )
}
