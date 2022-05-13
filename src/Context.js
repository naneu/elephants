import React, {useState, useContext, useEffect } from 'react';

const url = 'https://elephant-api.herokuapp.com/elephants'

const AppContext = React.createContext()

function AppProvider({ children }) {
    const [loading, setLoading] = useState(true)
    return <AppContext.Provider value={{loading}}>
        {children}
    </AppContext.Provider>
}

export function useGlobalContext() {
    return useContext(AppContext)
}

export {AppContext,AppProvider}