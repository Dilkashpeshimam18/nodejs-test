const Sequelize=require('sequelize')
const sequelize=require('../utils/db')
 
const Orders=sequelize.define('orders',{
    id:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    dish:{
        type:Sequelize.STRING,
        allowNull:false
    },
    table:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Orders