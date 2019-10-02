import React from 'react';
import MyProfile from "./Components/Profile";
import Followers from "./Components/Followers";
import './App.css'

function App (){
    return(
        <div>
            <h1 className=''>My Profile</h1>
            <MyProfile/>
            <h2>My Followers</h2>
            <Followers/>
        </div>
    )
}

export default App;
