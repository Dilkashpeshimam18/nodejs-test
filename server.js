const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const ordersRoutes = require('./routes/orders')
const sequelize = require('./utils/db')
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use(ordersRoutes)



sequelize.sync().then(() => {
    app.listen(4000, (req, res) => {
        console.log('Server running!!!')
    })
})
    .catch((err) => {
        console.log(err)
    })
