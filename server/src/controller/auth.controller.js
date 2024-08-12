import bcrypt from 'bcrypt';
import User from '../model/user.model.js';

// Sign up a new user
export const signUp = async (req, res) => {
    try {
        const { username, password, email, sex, birthdate, weight, height } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, email, sex, birthdate, weight, height });
        // const newUser = new User({ username, password, email, sex, birthdate, weight, height });
        await newUser.save();
        req.session.userId = newUser._id.toString();
        res.status(201).send({ message: 'Signed up successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
};

// Log in a user
export const logIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            // if (!user || !(password === user.password)) {
            res.status(400).send({ message: 'Invalid credentials' });
            return;
        }
        // req.session.userId = user._id;
        req.session.userId = user._id.toString();
        res.status(200).send({ message: 'Logged in successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Log out a user
export const logOut = async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({ message: 'Logged out successfully' });
        }
    });
};

// Recover password
export const recoverPassword = async (req, res) => {
    // Implement your password recovery logic here
    res.status(501).send({ message: 'Password recovery not implemented' });
};
