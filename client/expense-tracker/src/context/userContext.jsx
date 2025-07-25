import React from "react";
import { useState,createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //Function to update user data
    const updateUser = (userData) => {
        setUser(userData);
    }

    const clearUser = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider 
            value = {{
                user,
                updateUser,
                clearUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;