DROP DATABASE IF EXISTS bamazon;
create database bamazon;

Use bamazon;

create table products(
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(10,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
    );
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("milk", "Food", 1.88, 10),
("banana", "Food", 0.99, 100),
("toilet paper", "Health & Household", 25.55, 8),
("notebooks", "Office Product", 8.99, 10),
("tumbler", "Kitchen & Dining", 18.00, 4),
("sunglasses", "Clothing", 33.99, 5),
("i-phone", "Electronics", 329.99, 10),
("yoga pants", "Clothing", 14.20, 3),
("coffee maker", "Kitchen & Dining", 47.25, 2),
("vitamin B12", "Health & Household", 12.31, 6);

select * FROM products;
