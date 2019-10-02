import React from 'react'
import axios from 'axios';


class Followers extends React.Component{
    constructor(){
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/BryantErwin/followers`)
            .then(res => {
                this.setState({
                    followers:res.data
                })
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    render() {
        return(
            <div className='followers-container'>
                {this.state.followers.map(follower => (
                    <div className='cards' key={follower.id}>
                        <img src={follower.avatar_url} alt='Avatar'/>
                        <h2>{follower.login}</h2>
                        <p>Url: <a href={follower.url}>{follower.html_url}</a></p>
                        <p>Following:</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Followers;