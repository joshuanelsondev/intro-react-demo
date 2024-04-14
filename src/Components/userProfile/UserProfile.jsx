// UserProfile.jsx

import Profile from '/src/profile.png'

export default function UserProfile () {

    return (
        <div className='user-profile'>
            <img className='user-profile__image' src={Profile} alt="user image" />
            <h3 className='user-profile__user'>User</h3>
            <p className='user-profile__role'>React Creator</p>
            <p className='user-profile__text'>Lorem Ipsum</p>
        </div>
    )
}
