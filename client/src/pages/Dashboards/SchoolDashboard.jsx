import React, { useEffect, useState } from 'react'
import axios from "axios"

const SchoolDashboard = () => {
    const {schholUser, setSchhoolUser} = useState([]);

    useEffect(() => {
        const fetchUsers = async() => {
            const response = await axios.get('/api');
            setUsers(response.data)
        }
    })
  return (
    <div>
        <h1>Admin Dashboard</h1>
        <ul></ul>     
    </div>
  )
}

export default SchoolDashboard
