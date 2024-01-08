import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/RaviAajugiya')
  //     .then(res => res.json())
  //     .then(res => setData(res)) 
  // }, [])
  // console.log(data)


  return (
    <div className='text-center'>
      <img src={data.avatar_url} alt=""  width={300}/>
      Name: {data.login}
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/RaviAajugiya');
  return response.json();
}