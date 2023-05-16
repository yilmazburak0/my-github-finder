import React , { useReducer } from "react";
import usersReducer from "../reducers/usersReducer";


export const UsersContext = React.createContext();

const UsersContextProvider = (props) => {
    const initialState ={ users:[] , showclrbtn:false };
    const [state, dispatch] = useReducer(usersReducer,initialState)

    const clearUsers = () => {
        dispatch({ type:"CLEAR_USERS" });
      };
    
      const displayUsers = (keyword) => {
        
            fetch("https://api.github.com/search/users?q=" + keyword)
            .then(response => response.json())
            .then(data => {
                dispatch({
                type: "DİSPLAY_USERS",
                users: data.items
                });
            });
    }

    return (
        <UsersContext.Provider value={
            { users:state.users,
              showclrbtn:state.showclrbtn,
              displayUsers,
              clearUsers
            }
        }>
            { props.children }
        </UsersContext.Provider>
    )   

};

export default UsersContextProvider;