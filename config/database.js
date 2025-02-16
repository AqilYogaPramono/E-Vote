let mysql = require ('mysql');

let connection = mysql.createConnection({
    host: 'DB_HOST',
    user: 'DB_USER',
    password: 'DB_PASS',
    database: 'DB_NAME'
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Connection success');
    }
})

module.exports = connection;