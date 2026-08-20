-- Unions
-- USE sql_store;

/* SELECT 
order_id,
order_date,
'Active' AS status
FROM orders
WHERE order_date >= '2019-01-01'
UNION
SELECT 
order_id,
order_date,
'Archived' AS status
FROM orders
WHERE order_date < '2019-01-01' */

/* SELECT first_name
FROM customers
UNION
SELECT name 
FROM shippers */

-- Exercise

/* SELECT 
customer_id,
 first_name,
 points,
 'Bronze' AS type
FROM customers
WHERE points < 2000
UNION
SELECT 
customer_id,
 first_name,
 points,
 'Silver' AS type
FROM customers
WHERE points BETWEEN 2000 AND 3000
UNION
SELECT 
customer_id,
 first_name,
 points,
 'Gold' AS type
FROM customers
WHERE points > 3000
ORDER BY first_name */

-- Column Attributes

-- Inserting a single Row
/* INSERT INTO customers (
first_name,
last_name,
birth_date,
address,
city,
state)
VALUES (
    'ASHISH',
    'PATEL',
    '2000-08-02',
    'address',
    'city',
    'UP') */
    
    -- Inserting Multiple rows
    
/* INSERT INTO shippers (name)
VALUES ('shipper1'),
	    ('shipper2'),
        ('shipper3'),
        ('shipper4') */
        
-- Insert three rows in the products table

/* INSERT INTO products (name, quantity_in_stock, unit_price)
VALUES ('Product1', 10, 1.95),
        ('Product2', 11, 1.95),
        ('Product3', 12, 1.95) */
        

-- Inserting Hierarchical Rows

/* INSERT INTO orders (customer_id, order_date, status)
VALUES (1, '2019-01-02', 1);

INSERT INTO order_items
VALUES 
       (LAST_INSERT_ID(), 1, 1, 2.95),
	   (LAST_INSERT_ID(), 2, 1, 3.95) */
       
-- Creating a copy of a table

/* CREATE TABLE orders_archived AS
SELECT * FROM orders */

/* INSERT INTO orders_archived
SELECT *
FROM orders
WHERE order_date < '2019-01-01' */

-- Exercise

/* USE sql_invoicing;
CREATE TABLE invoices_archived AS
SELECT
       i.invoice_id,
       i.number,
       c.name AS client,
       i.invoice_total,
       i.payment_total,
       i.invoice_date,
       i.payment_date,
       i.due_date
       
FROM invoices i
JOIN clients c
         USING (client_id)
WHERE payment_date IS NOT NULL */

-- Updating a single Row

/* UPDATE invoices
SET 
payment_total = invoice_total*0.5, 
payment_date = due_date
WHERE invoice_id = 3 */

-- Updating Multiple Rows

 /* UPDATE invoices
SET 
payment_total = invoice_total*0.5, 
payment_date = due_date
WHERE client_id = 3 */

-- Write a SQL statement to
-- give any customers born before 1990
-- 50 extra points

/* USE sql_store;

UPDATE customers
SET points = points + 50
WHERE birth_date < '1990-01-01' */

/* USE sql_invoicing;

UPDATE invoices
SET 
payment_total = invoice_total*0.5, 
payment_date = due_date
WHERE client_id IN 
                  (SELECT client_id
                  FROM clients
                  WHERE state IN ('CA', 'NY')) */
                  

-- Exercise

/* USE sql_store;

UPDATE orders
SET comments = 'Gold customer'
WHERE customer_id IN 
                 (SELECT customer_id
                    FROM customers
                   WHERE points > 3000 ) */


-- Deleting Rows
-- USE sql_invoicing;

/* DELETE FROM invoices
WHERE client_id = (
			   SELECT *
               FROM clients
               WHERE name = 'Myworks'
			) */


-- Restoring the databases





                   


























