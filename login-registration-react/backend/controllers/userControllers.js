
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel');
const generateToken = require('../utils/generateToker');


const registerUser = asyncHandler(async (req, res) => {
    console.log ('est', 8)
    const name = req.body.registrationName;
    const email = req.body.registrationEmail;
    const password = req.body.registrationPassword;
    //const { name, email, password } = req.body;
    console.log (name, email, password)
    const userExists = await User.findOne({ email });

    if (userExists) {
        console.log(14)
        res.status(400)
        throw new Error("User Already Exisits");
    }

    const user = await User.create({
        name: name,
        email: email,
        password: password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
        })
    } else {

        res.status(400);
        throw new Error('Error Occured');
    }

        res.status(200)
});

const authUser = asyncHandler(async (req, res) => {
    console.log ('da', 44);
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
        })

    } else {
        res.status(400);
        throw new Error('Invalid email or password');
    }


});


module.exports = { registerUser, authUser };