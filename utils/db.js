const Sequelize=require('sequelize')

const sequelize=new Sequelize('orders','root','dilkashsql786',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;