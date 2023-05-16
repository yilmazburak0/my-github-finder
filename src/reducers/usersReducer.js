const usersReducer = (state,action) => {
    switch (action.type) {
        case "DİSPLAY_USERS":
            return {
                ...state,
                users:action.users,
                showclrbtn:true
            }
        case "CLEAR_USERS":
            return {
                ...state,
                users:[],
                showclrbtn:false
            }    
        default:
            return state;
    }
};

export default usersReducer;