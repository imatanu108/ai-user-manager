'use client';
import { useEffect, useState } from "react"

function useUsersInfo() {
    const [users, setUsers] = useState([])
    const requestUrl = `https://reqres.in/api/users`

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(requestUrl,
                    {method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'reqres-free-v1'
                    }
                })
                const data = await response.json()
                console.log(data)
                if (!data.error) {
                    setUsers(data.data)
                    console.log(data.data)
                } else {
                    console.error("Error:", data.error.message)
                }
            } catch (error) {
                console.error("Error while fetching users data:", error)
            }
        }
        fetchUser()
    }, [])

    return users
}

export default useUsersInfo