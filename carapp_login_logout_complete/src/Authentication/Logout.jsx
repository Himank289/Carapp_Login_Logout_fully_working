import React, { useEffect } from "react";
import { logout } from "../Services/userService"

const Logout = () => {
    useEffect(() => {
        logout();
        window.location = "/";
    }, []);

    return null;
};

export default Logout;