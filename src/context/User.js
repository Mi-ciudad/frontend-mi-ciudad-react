import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const context = {user, setUser};

    return(
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

