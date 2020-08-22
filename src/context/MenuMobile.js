import React, { useState, createContext } from "react";

export const MenuContext = createContext(null);

const MenuContextProvider = ({children}) => {

    const [open, setOpen] = useState(false);
    const context = {open, setOpen};

    return(
        <MenuContext.Provider value={context}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;

