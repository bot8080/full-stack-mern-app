// Name: Abhinav Khanna
// C0873411

require('dotenv').config();

const express = require('express'); 
const connectDB = require('./db'); 
const app = express(); 
const User = require('./models/user'); 

const port = process.env.PORT || 3001; 

app.set('view engine', 'pug'); 

app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public')); 

// Connect to the MongoDB database
connectDB();

// route to display all users
app.get('/', async (req, res) => {
    const users = await User.find(); 
    res.render('display', { users }); 
});

// route to display the form for adding a new user
app.get('/add', (req, res) => {
    res.render('add'); 
});

// route to process the form submission for adding a new user
app.post('/add', async (req, res) => {
    const user = new User(req.body); 
    await user.save(); 
    res.redirect('/'); 
});

// route to display the form for updating a user
app.get('/update/:id', async (req, res) => {
    const user = await User.findById(req.params.id); 
    res.render('update', { user }); 
});

// route to process the form submission for updating a user
app.post('/update/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body); 
    res.redirect('/'); 
});

// route to delete a user
app.get('/delete/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id); 
    res.redirect('/'); 
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
