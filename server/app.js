const express = require("express");
const app = express();
const {Sequelize} = require("sequelize");
const db = require("./models");
const {User} = require('./models')
const PORT = process.env.PORT || 3308;

app.use(express.json());

app.post('./users', async (req, res) => {
    const {first_name, last_name, email, company_name, university_name} = req.body;

    try {
        const user = await User.create(first_name, last_name, email, company_name, university_name);

        return res.json(user)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
})

app.listen( { port: PORT }, )
const sequelize = new Sequelize("eLearning_local", "root", "root", {
    host: "localhost",
    dialect: "mysql",
})
