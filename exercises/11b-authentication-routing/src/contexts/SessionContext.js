import React, { createContext, useState } from "react";
import { setSessionCookie, getSessionCookie } from "../utilities/Cookies.util.js";

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
    const [uuid, setUUID] = useState(getSessionCookie());

    const set = newUUID => {
        // storing UUID in session cookie so that it'll be there if user refreshes
        setSessionCookie(newUUID);
        // triggering rerender so UUID is stored in context
        setUUID(newUUID);
    };

    return (
        <CookieContext.Provider value={[uuid, set]} >
            {children}
        </CookieContext.Provider>
    );
};
