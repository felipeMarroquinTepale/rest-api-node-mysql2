const mysql = require('mysql');

const config = {
    host: '18.207.144.43',
    user: 'felipemarroquin',
    password: 'datamin3',
    database:'schoolfmt',
};

const conn = mysql.createConnection(config);

conn.connect(function(err) {
    if (err) {
        console.log('¡Ups!... parece que algo salio mal :c')
        throw err;
    }else{
        console.log('Conexión a la base de datos exitosa!');

    }
});

module.exports = conn;