import { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [popUpForm, setPopUpForm] = useState(false);
    const [hasInteractedWithPopup, setHasInteractedWithPopup] = useState(false);

    useEffect(() => {
        if (hasInteractedWithPopup) {
            return;
        }

        let repeatPopupTimer;
        let reopenPopupTimer;

        const showPopup = () => {
            setPopUpForm(true);
        };

        const handlePopUpForm = setTimeout(() => {
            showPopup();

            repeatPopupTimer = setInterval(() => {
                setPopUpForm(false);
                reopenPopupTimer = setTimeout(() => {
                    showPopup();
                }, 100);
            }, 20000);
        }, 5000); // Show the pop-up form after 5 seconds, then repeat every 20 seconds

        // Simulate loading for demonstration purposes
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate a 2-second loading time

        return () => {
            clearTimeout(timer);
            clearTimeout(handlePopUpForm);
            clearInterval(repeatPopupTimer);
            clearTimeout(reopenPopupTimer);
        };
    }, [hasInteractedWithPopup]);

    return (
        <AppContext.Provider value={{ loading, setLoading, popUpForm, setPopUpForm, hasInteractedWithPopup, setHasInteractedWithPopup }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, ContextProvider};