// Contacts.jsx

import './contacts.scss'
import ContactUserCard from "./ContactUserCard";

const users = [
    {
        id: 1,
        name: 'Nadia',
        role: 'Billionaire'
    }, 
    {
        id: 2,
        name: 'Rizel',
        role: 'Trillionaire'
    }, 
    {
        id: 3,
        name: 'Sadya',
        role: 'Millionaire'
    }, 
    {
        id: 4,
        name: 'Nicole',
        role: 'Trillionaire'
    }, 
    {
        id: 5,
        name: 'Jean',
        role: 'Nepo-Baby'
    }
]

export default function Contacts () {

    const contactCard = users.map(user => {
                return (
                    <ContactUserCard key={user.id} user={user} />
                )
            });

    return (
        <div className='contacts'>
            <h3 className='contacts__header'>Contacts</h3>
            {contactCard}
        </div>
    )
}
