// Import the necessary dependencies
import React, { useState } from 'react';

// Define a functional component named AddUser
const AddUser = () => {

    // Define state for form fields using the useState hook
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        address1: '',
        address2: '',
        city: '',
        country: '',
        phoneNumber: '',
        email: '',
        postalCode: '',
        userNotes: '',
    });

    // Define a function to handle form field changes
    const handleChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
    };

    // Define a function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            console.log("__________________________");
            const responseData = await response.json();
            console.log(responseData);

            if (!response.ok) {
                throw new Error('Error adding user');
            }

            console.log('User added successfully!');
            // Reset the form fields
            setUser({
                firstName: '',
                lastName: '',
                dob: '',
                address1: '',
                address2: '',
                city: '',
                country: '',
                phoneNumber: '',
                email: '',
                postalCode: '',
                userNotes: '',
            });
        } catch (error) {
            // console.log(user);
            console.error('Error adding user:', error.message);
        }
    };

    // Return JSX to render the component
    return (
        <div>
            {/* Your user form content goes here */}
            <h2>User Form</h2>
            {/* Display the form */}
            <form onSubmit={handleSubmit}>
                {/* Input fields for each user property */}
                <div>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Date of Birth:
                        <input type="date" name="dob" value={user.dob} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Address 1:
                        <input type="text" name="address1" value={user.address1} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Address 2:
                        <input type="text" name="address2" value={user.address2} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        City:
                        <input type="text" name="city" value={user.city} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Country:
                        <input type="text" name="country" value={user.country} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                        <input type="tel" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={user.email} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Postal Code:
                        <input type="text" name="postalCode" value={user.postalCode} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        User Notes:
                        <textarea name="userNotes" value={user.userNotes} onChange={handleChange} />
                    </label>
                </div>
                {/* Submit button */}
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

// Export the AddUser component
export default AddUser;
