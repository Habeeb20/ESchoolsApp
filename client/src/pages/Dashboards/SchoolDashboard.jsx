import React, { useEffect, useState } from 'react'
import axios from "axios"
import StudentHomePage from '../Student/StudentHomePage';

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
        <StudentHomePage />   
    </div>
  )
}

export default SchoolDashboard
