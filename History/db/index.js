const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'historical_events'
  });


const GetAll = function(cb){
    connection.query(`SELECT * from history`,(err,result)=>{
err ? cb(err,null) : cb(null,result)
    })
}

const GetByName = function(params,cb){
    connection.query(`SELECT * from history WHERE title=?`,params,(err,result)=>{
        err ? cb(err,null) : cb(null,result)
    })
}

module.exports = {
    GetAll,
    GetByName
}