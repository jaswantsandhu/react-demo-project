import React from "react";
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

export default function LoginAuth({ children, roles })
    {
        const history = useHistory();
        const user = useSelector((state) => {
            return {
              user: state.user.info,
            };
          });


        console.log(user, "user.roles");

        const isUserLoggedIn = window.localStorage.getItem("access-token") ? true : false;
        const userRole = user.user.roles

        if(isUserLoggedIn && roles.indexOf(userRole) > -1)
            {
                return React.cloneElement(children);
            }
        else
            {
                history.push("/admin/login");
                return <div>Redirect to login...</div>
            }
    }