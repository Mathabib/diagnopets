const datauser = require('./datauser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');



const connection  = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: "",
    database: "register-app"

}) 
    


const tambahuser = (request, h) => {
    const {id, name, password } = request.payload;
    
    connection.query('INSERT INTO `data_register` (`id`,`name`, `password` ) VALUES (?, ?, ?)', [id, name, password], function (error, results, fields) {
        if (error) throw error;
        console.log(results)
    });

    return h.response({ success: true }).code(200);
}


const lihatData = (request, h) =>{
    connection.query('SELECT * FROM `data_register`', function (error, results, fields) {
        if (error) throw error;
        console.log(results)
      });

      connection.end();
    return h.response({
        success: true,
        message: 'data berhasil ditampilkan'
    }).code(200);
}


const login = (request, res) => {
    
    const { name, password } = request.payload;

    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM data_register WHERE name = ? AND password = ?';
        connection.query(query, [name, password], (error, results) => {
          if (error) {
            console.log( ' : Request POST Login Employee error', error);
            reject(error);
          }
      
          if (results.length > 0) {
            console.log( ' : Request POST Login Employee success code 200');
            resolve({
              status: 'Success',
              code: 200,
              message: 'Login successful',
              
            });
          } else {
            reject('Invalid credentials');
          }
        });
      });

};

  
  


module.exports = {tambahuser, lihatData, login};