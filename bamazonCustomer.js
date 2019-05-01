var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "tk@dltka3",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    runRead();
});

function runRead() {
    var query = "SELECT * FROM products";
  connection.query(query, function(err, res){
    if (err) throw err;
    console.table(res);
    byId();
  })
}

function byId() {
    inquirer
    .prompt([{
        name: "id",
        type: "input",
        message: "Enter the Id# that you would like to buy"
    },{
        name: "quantity",
        type: "input",
        message: "How many item would you like to buy?"
    }])
    .then(function(answer) {
        //if user input id number, check DB quntity
        // console.log(answer.id, answer.quantity)
        var query = "SELECT * FROM products where ?"
        connection.query(query,{item_id : answer.id}, function(err, res) {
            if (err) throw err;
            if (answer.quantity > res[0].stock_quantity) {
                console.log("Insufficient quantity!");
            } else {
                var order = "UPDATE products SET ? WHERE ?"
                var remainQuantity = res[0].stock_quantity - answer.quantity 
                connection.query(order, [{stock_quantity : remainQuantity},{item_id : answer.id}], function(err, orderRes) {
                    if (err) throw err;
                    console.log("Your order has been placed")
                    console.log("Total Price : $" + answer.quantity * res[0].price);
                })
            }
        })
    })
}