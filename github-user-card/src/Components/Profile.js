import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'


class MyProfile extends React.Component{
    constructor(){
        super();
        this.state = {
            myProfile: {}
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/BryantErwin`)
            .then(res => {
                this.setState({
                    myProfile:res.data
                })
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div className='profile-container'>
                <img src={this.state.myProfile.avatar_url} alt={this.state.myProfile.name}/>
                <h1>{this.state.myProfile.name}</h1>
                <h3>{this.state.myProfile.login}</h3>
                <p>{this.state.myProfile.location}</p>
                <p>{this.state.myProfile.bio}</p>
                <p>Following: {this.state.myProfile.following}</p>
                <p>Followers: {this.state.myProfile.followers}</p>
            </div>
        );
    }
}

export default MyProfile;