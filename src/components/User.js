import React from 'react'
import "../css/user.css"
const User = ({user}) => {
  
    const { avatar_url,login,html_url } = user;
    return (
      <div className="user">
        <div className="image-container">
            <img className='image' src={avatar_url} alt="" />
        </div>
        <div className="user-body">
            <p className="name">{login}</p>
            <a target="_blank" rel="noreferrer" href={html_url} className='profile'>Github Profile</a>
        </div>
      </div>
    )
  
}

export default User