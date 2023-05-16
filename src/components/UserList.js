import User from "./User";
import '../css/userlist.css'
import React, { useContext } from 'react'
import { UsersContext } from "../context/userContext";

const UserList =() => {
    const {users} = useContext(UsersContext)
    return (
        <div className="container">
            <div className="user-container">
              {users.length > 0 ?   
                  users.map((user,index) => (
                  <User user={user} key={index} />))
                :
                <div className="alert alert-info" role="alert">
                Arama Yapabilirsiniz
              </div>
              }
                
            </div>
        </div>
      
    )
  
}

export default UserList