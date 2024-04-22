import React from 'react'
import Cookies from "universal-cookie";
import {useState} from "react";

function Cookie() {
    const cookies = new Cookies();

    const [user, setUser] = useState(null);

    const logout = () =>{
        setUser(null);
        cookies.remove("authorization");
        cookies.set("authorization",null);
        window.location.reload();
    }

    const login = (token) =>{
        const decoded = (token);
    
        setUser(decoded);

        cookies.set("authorization",token)
        window.location.reload();
    }
  return (
    <div>
      {cookies.get("authorization") == null? (
        <div>
        <button onClick={() => login("rajan")}>Login</button>{user}
        </div>
      ) : (
        <div>
            <button onClick={logout}>Logout</button>{user}
            </div>
      )}
    </div>
  )
}

export default Cookie
