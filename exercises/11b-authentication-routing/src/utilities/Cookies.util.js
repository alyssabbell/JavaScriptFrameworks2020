import Cookies from "js-cookie";
/* Purpose: to store the UUID in a cookie
            to allow retrieval of the cookie
            to allow removal of the cookie

/* sets UUID from server into a cookie = user is logged in*/
export const setSessionCookie = uuid => {
    Cookies.set("session", uuid, { expires: 1 });
};

/* retrieves the UUID stored in cookie */
export const getSessionCookie = () => {
    const sessionCookie = Cookies.get("session");
    if (sessionCookie === undefined) {
        return undefined;
    } else {
        return sessionCookie;
    }
}

/* deletes the session cookie, which means user is logged out */
export const removeSessionCookie = () => {
    Cookies.remove("session");
}