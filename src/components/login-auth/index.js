import React from "react";
import { useHistory } from "react-router-dom"

export default function LoginAuth({ children, roles })
    {
        const history = useHistory();
        const isUserLoggedIn = true;
        const userRole = "admin"

        if(isUserLoggedIn && roles.indexOf(userRole) > -1)
            {
                return React.cloneElement(children);
            }
        else
            {
                history.push("/admin/login");
            }
    }