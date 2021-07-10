import axios from "axios";

export default function createRequest()
    {
        const accessToken = window.localStorage.getItem("access-token")
        const instance =  axios.create()

        if(accessToken)
            {
                instance.defaults.headers.common["Authorization"] = accessToken;
            }

        return instance;
    }