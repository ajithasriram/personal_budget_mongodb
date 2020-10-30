// Budget API
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require("mongoose")
const chartDataModel = require("./personal_budget_schema")
const bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let budget = {}

let url = 'mongodb://localhost:27017/personal-budget'

app.get('/getBudget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                console.log("Connected to the database for fetch")   

                chartDataModel.find({})
                              .then((data) => {
                                  res.send(data)
                                  budget = data
                                  console.log(budget.length)
                                  mongoose.connection.close()
                              })
                              .catch((connectionError) => {
                                  console.log(connectionError)
                              })
            })
            .catch((connectionError) => {
                console.log(connectionError)
                mongoose.connection.close()
            })
        })

app.post('/putBudget', (req, res) => {
    data = {}
    data.title = req.body.title
    data.budgetValue = req.body.budgetValue
    data.color = req.body.color

    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                console.log("Connected to the database for add new document")

                chartDataModel.insertMany(data)
                              .then(function() {
                                message = "Successfully inserted document into collection"
                                console.log(data)
                                console.log(message)
                                res.send(message)
                                mongoose.connection.close()                                  
                              })
                              .catch(function(error) {
                                console.log(data)
                                console.log(error.message)
                                res.send(error.message)
                                mongoose.connection.close()
                              })              
            })
            .catch((connectionError) => {
                console.log(connectionError)
                mongoose.connection.close()
            })
        })

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});