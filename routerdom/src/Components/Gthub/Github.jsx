import React, { useState , useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(apidata){
    
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/kushguptafullstacker')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [apidata])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    

  )
}

export default Github