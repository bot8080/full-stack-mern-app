// Import the necessary dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define a functional component named DisplayUser
const DisplayUser = () => {
    // Define state for users using the useState hook
    const [users, setUsers] = useState([]);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            const userData = response.data;
            console.log(response);
            setUsers(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


    // useEffect hook is used for side effects, such as data fetching
    useEffect(() => {
        // Call the fetchUserData function when the component mounts
        fetchUserData();
    }, []); // The empty dependency array ensures this effect runs only once on mount

    return (
        <div>
            {/* Your user table content goes here */}
            <h2>User Table</h2>
            {/* Display user data in a table */}
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
                    </tr>
                </thead>
                <tbody>
                    {/* Map through the users array and render a table row for each user */}
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Export the DisplayUser component
export default DisplayUser;
