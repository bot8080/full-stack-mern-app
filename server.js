// Name: Abhinav Khanna
// C0873411

require('dotenv').config();

const express = require('express'); 
const {connectDB, clearEntries} = require('./db'); 
const app = express(); 
const User = require('./models/user'); 
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001; 

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug'); 

app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public')); 
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the actual URL of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Connect to the MongoDB database
connectDB();

// route to display all users
app.get('/users', async (req, res) => {
    const users = await User.find(); 
    //res.render('display', { users });
    res.json(users); 
});

// //route to display the form for adding a new user
// app.get('/add', (req, res) => {
//     res.render('add'); 
// });

// route to process the form submission for adding a new user
app.post('/add', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        console.log("HERE");
        console.log(req.body);
        res.status(201).json({ success: true, message: 'User added successfully' });
    } catch (error) {
        console.error('Error adding user:', error.message);
        res.status(500).json({ success: false, message: 'Error adding user' });
    }
});

// route to display the form for updating a user
app.get('/update/:id', async (req, res) => {
    const user = await User.findById(req.params.id); 
    // console.log("USER", user);
    res.send( user); 
});

// route to update a user
app.post('/update/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating the user', error });
    }
});

// route to delete a user
app.post('/delete/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting the user', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
