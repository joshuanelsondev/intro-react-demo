// App.jsx

import React from "react";
import "./App.scss";
import NavBar from "./Components/navbar/NavBar";
import Posts from "./Components/posts/Posts";
import Contacts from "./Components/contacts/Contacts";
import UserProfile from "./Components/userProfile/UserProfile";

function App() {
    return (
        <div className='app'>
            <NavBar />
            <main>
                <UserProfile />
                <Posts />
                <Contacts />
            </main>
        </div>
    ) 
}

export default App;
