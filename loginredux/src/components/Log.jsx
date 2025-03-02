import React from 'react'
import { useSelector } from 'react-redux';
function Log() {
    const { user, pass } = useSelector((state) => state.login);

  return (
    <div>
        <h1> welocme  {user} and password is {pass}</h1>
    </div>
  )
}

export default Log