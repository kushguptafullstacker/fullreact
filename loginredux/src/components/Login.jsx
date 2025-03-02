import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setPass } from "../Createslice/Slice";

function Login() {
    const dispatch = useDispatch();
    const { user, pass } = useSelector((state) => state.login);
     const button=(e)=>{
      e.preventDefault()
      dispatch(setUser({user}))
      dispatch (setPass({pass}))
      
     }
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={user}
                onChange={(e) => dispatch(setUser(e.target.value))}
                placeholder="Enter username"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => dispatch(setPass(e.target.value))}
                placeholder="Enter password"
            />
          <button onClick={button}>click me now</button>
        </div>
    );
}

export default Login;
