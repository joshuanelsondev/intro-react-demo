// ContactUserCard.jsx

import './contacts.scss'
import Profile from "/src/profile.png"

export default function ContactUserCard ({ user }) {

    return (
        <div className='contacts__contact-div'>
            <img className='contacts__image' src={Profile} alt="user image" />
            <h3 className='contacts__name'>{user.name}</h3>
            <p className='contacts__role'>{user.role}</p>
            <p className='contacts__text'>Lorem Ipsum</p>
        </div>
    )
}
