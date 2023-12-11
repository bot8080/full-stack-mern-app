import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/displayuser.css';

// Define the DisplayUser component
const DisplayUser = () => {
    // Use the useNavigate hook from react-router-dom to programmatically navigate to different routes
    const navigate = useNavigate();

    // Define a state variable for the users data, initially set to an empty array
    const [users, setUsers] = useState([]);

    // Define an async function to fetch the users data from the server
    const fetchUserData = async () => {
        // Send a GET request to the server and await the response
        const response = await axios.get('http://localhost:3001/users');

        // Update the users state variable with the data from the response
        setUsers(response.data);
    };

    const handleAction = async (e, id) => {
        if (e.target.value === 'update') {
            navigate(`/update/${id}`);
        } else if (e.target.value === 'delete') {
            if (window.confirm('Are you sure you want to delete this user?')) {
                // If the user confirms, send a POST request to the server to delete the user with the given id
                await axios.post(`http://localhost:3001/delete/${id}`);
                fetchUserData();
            }
        }
    };

    // Use the useEffect hook to fetch the users data when the component mounts
    useEffect(() => {
        fetchUserData();
    }, []);

    const handleAddUser = () => {
        navigate('/add');
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: '0 auto', textAlign: 'center' }}>User Table</h2>
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Postal Code</th>
                        <th>User Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.dob}</td>
                            <td>{user.address1}</td>
                            <td>{user.address2}</td>
                            <td>{user.city}</td>
                            <td>{user.country}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td>{user.postalCode}</td>
                            <td>{user.userNotes}</td>
                            <td>
                                <select onChange={(e) => handleAction(e, user._id)}>
                                    <option value="">Action</option>
                                    <option value="update">Update</option>
                                    <option value="delete">Delete</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayUser;