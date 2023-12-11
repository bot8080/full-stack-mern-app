import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/AddUser.css';
import { useNavigate } from 'react-router-dom';

function UpdateUserComponent() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [userId, setUserId] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [dob, setDob] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [userNotes, setUserNotes] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/update/${id}`);
                const userData = response.data;
                console.log(userData);
                setUserId(userData.userId);
                setLastName(userData.lastName);
                setFirstName(userData.firstName);
                setDob(userData.dob);
                setAddress1(userData.address1);
                setAddress2(userData.address2);
                setCity(userData.city);
                setPostalCode(userData.postalCode);
                setCountry(userData.country);
                setPhoneNumber(userData.phoneNumber);
                setEmail(userData.email);
                setUserNotes(userData.userNotes);
            } catch (error) {
                console.error('An error occurred while fetching the user data:', error);
            }
        };

        fetchUserData();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3001/update/${id}`, {
                userId,
                lastName,
                firstName,
                dob,
                address1,
                address2,
                city,
                postalCode,
                country,
                phoneNumber,
                email,
                userNotes,
            });

            const data = response.data;
            console.log("____________________", data);
            navigate('/');

            if (data.success) {
                console.log('User updated successfully');
            } else {
                console.error('Failed to update user:', data.message);
            }
        } catch (error) {
            console.error('An error occurred while updating the user:', error);
        }
    };

    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                {/* <div>
                    <label>
                        User ID:
                        <input type="text" name="userId" value={userId} readOnly />
                    </label>
                </div> */}
                <div>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Date of Birth:
                        <input type="date" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Address 1:
                        <input type="text" name="address1" value={address1} onChange={(e) => setAddress1(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Address 2:
                        <input type="text" name="address2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        City:
                        <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Postal Code:
                        <input type="text" name="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Country:
                        <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                        <input type="text" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        User Notes:
                        <textarea name="userNotes" value={userNotes} onChange={(e) => setUserNotes(e.target.value)} />
                    </label>
                </div>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
}

export default UpdateUserComponent;
