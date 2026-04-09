import { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for demonstration purposes
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate a 2-second loading time

        return () => clearTimeout(timer);
    }, []);

    return (
        <AppContext.Provider value={{ loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, ContextProvider};