const mongoose = require("mongoose")
const chartDataModel = require("./personal_budget_schema")

let url = 'mongodb://localhost:27017/personal-budget'

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
//         .then(() => {
//             console.log("Connected to the database")
            
//             //insert
//             let newData = ([{title: "Eat Out", budgetValue: 40, color: "#6E80E5"},
//                                              {title: "Rent", budgetValue: 385, color: "#3A4DB8"},
//                                              {title: "Groceries", budgetValue: 60, color: "#949AB6"},
//                                              {title: "College Fee", budgetValue: 2000, color: "#4d5791"},
//                                              {title: "Phone Bill", budgetValue: 30, color: "#B9C4FE"},
//                                              {title: "Coffee", budgetValue: 125, color: "#85868D"},
//                                              {title: "Travel", budgetValue: 200, color: "#363E6B"}])
//             chartDataModel.insertMany(newData)                                             
//                             .then((data) => {
//                                 console.log(data)
//                                 mongoose.connection.close()
//                             })
//                             .catch((connectionError) => {
//                                 console.log(mongoose.connectionError)
//                             })
//         })
//         .catch((connectionError) => {
//             console.log(connectionError)
//         })