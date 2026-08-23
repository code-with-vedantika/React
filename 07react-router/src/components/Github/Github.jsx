import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/code-with-vedantika")
            .then((res) => res.json()).then((data) => setData(data))

    }, [])
    return (
        <div className='text-center m-4 bg-cyan-950 text-white text-3xl p-2'>Github Follower:{data["followers"]}

            <img className="flex self-start m-4 " src={data["avatar_url"]} alt="get avatar" width={200} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/code-with-vedantika")
}