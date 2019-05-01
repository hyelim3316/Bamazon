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
    managerMenu();
});

function managerMenu() {
    inquirer
    .prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View Products for Sale',
                'View Low Inventory',
                'Add to Inventory',
                'Add New Product',
                'exit'
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case 'View Products for Sale':
                viewProducts();
                break;

                case 'View Low Inventory':
                viewInventory();
                break;

                case 'Add to Inventory':
                addInventory();
                break;

                case 'Add New Product':
                addProcuct();
                break;

                case 'exit':
                connection.end();
                break;
            }
        });
    }

function viewProducts() {
    var query = "SELECT * FROM products";
  connection.query(query, function(err, res){
    if (err) throw err;
    console.table(res);
  })
};

function viewInventory() {
    var query = "SELECT * FROM products";
}

function addInventory() {

}

function addProcuct() {

}