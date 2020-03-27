//step-1
var mysql = require('mysql');
//step-2
var connection = mysql.createConnection({																		//connect to the MySQL database;
    host: "localhost",
    user: "root",
    password: "root",
    database: "test_schema"
  });

  connection.connect(function(err) {																				//connect to MySQL database
    if (err) throw err;
    console.log('Connected to database!!')
});
  
//step-3

  var sql =  
  "SELECT categoryName, COUNT(categoryName)  FROM category LEFT JOIN Products ON category.PID = Products.category_id GROUP BY categoryName" ;
//step-4
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

