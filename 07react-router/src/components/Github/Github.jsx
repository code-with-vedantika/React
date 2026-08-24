import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router";


function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/code-with-vedantika")
    //         .then((res) => res.json()).then((data) => setData(data))

    // }, [])
    return (
        <div className='text-center m-4 bg-cyan-950 text-white text-3xl p-2'>Github Follower:{data["followers"]}

            <img className="flex self-start m-4 " src={data["avatar_url"]} alt="get avatar" width={200} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/code-with-vedantika")
    return response.json()
}



// Your old approach was:

// Component renders
//       ↓
// useEffect runs
//       ↓
// fetch GitHub API
//       ↓
// setData()
//       ↓
// Component renders again

// With a React Router loader:

// Navigate to /github
//       ↓
// Router runs githubInfoLoader
//       ↓
// fetch GitHub API
//       ↓
// Data is ready
//       ↓
// Github component renders
//       ↓
// useLoaderData() gives the data