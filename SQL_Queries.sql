-- USE sql_store;

-- Inner Join
 
-- SELECT order_id, o.customer_id, first_name, last_name
-- FROM orders o
-- JOIN customers c
-- ON o.customer_id = c.customer_id

-- SELECT order_id, oi.product_id, quantity, oi.unit_price
-- FROM order_items oi
-- JOIN products p
-- ON oi.product_id = p.product_id

-- Joining Across Databases

-- SELECT *
-- FROM order_items oi
-- JOIN sql_inventory.products p 
-- ON oi.product_id = p.product_id

-- Self Joins
-- USE sql_hr;

-- SELECT 
--  e.employee_id,
--  e.first_name,
--  m.first_name AS manager
-- FROM employees e
-- JOIN employees m
 -- ON e.reports_to = m.employee_id


-- Joining Multiple Tables

-- USE sql_store;

/* SELECT 
o.order_id,
o.order_date,
c.first_name,
c.last_name,
os.name AS status
FROM orders o 
JOIN customers c 
 ON o.customer_id = c.customer_id
 JOIN order_statuses os
  ON o.status = os.order_status_id */
  
--  Excercise

-- USE sql_invoicing;

/* SELECT 
p.date,
p.invoice_id,
p.amount,
c.name,
pm.name

FROM payments p
JOIN clients c 
 ON p.client_id = c.client_id
 JOIN payment_methods pm
 ON p.payment_method = pm.payment_method_id */
 
 -- Compound Join Conditions
 
 -- USE sql_store
 /* SELECT *
 FROM order_items oi
 JOIN order_item_notes oin
 
  ON oi.order_id = oin.order_id
  AND oi.product_id = oin.product_id */
  
  -- Implicit Join Syntax (Do not use useually)
  
 /* SELECT *
  FROM orders o, customers c 
  WHERE o.customer_id = c.customer_id */
  
 -- Outer Join -> In outer join LEFT and RIGHT are used before JOIN but in INNER JOIN does not used
 
 /* SELECT
    c.customer_id,
    c.first_name,
    o.order_id
  FROM customers c
  LEFT JOIN orders o 
    ON c.customer_id = o.customer_id
 ORDER BY c.customer_id */
 
 -- Exercise 
 
 /* SELECT 
 p.product_id,
 p.name,
 oi.quantity
 FROM products p 
 LEFT JOIN order_items oi
   ON p.product_id = oi.product_id */
   
-- Outer JOIN Between Multiple Tables

/* SELECT 
c.customer_id,
c.first_name,
o.order_id,
sh.name AS shipper
FROM customers c 
LEFT JOIN orders o 
  ON c.customer_id = o.customer_id
LEFT JOIN shippers sh
  ON o.shipper_id = sh.shipper_id
ORDER BY c.customer_id */

-- Exercise

/* SELECT 
  o.order_id,
  o.order_date,
  c.first_name AS customer,
  sh.name AS shipper,
  os.name AS status
FROM orders o 
JOIN customers c 
   ON o.customer_id = c.customer_id
LEFT JOIN shippers sh
   ON o.shipper_id = sh.shipper_id
JOIN order_statuses os
    ON o.status = os.order_status_id */
    
    -- Self outer joins
    
-- USE sql_hr;

/* SELECT 
 e.employee_id,
 e.first_name,
 m.first_name AS manager
FROM employees e
LEFT JOIN employees m
  ON e.reports_to = m.employee_id */
  
  -- USING Clause
  
 -- USE sql_store;
  
/* SELECT
   o.order_id,
   c.first_name,
   sh.name AS shipper
FROM orders o
JOIN customers c
   USING (customer_id)
LEFT JOIN shippers sh
   USING (shipper_id) */
   
 /*  SELECT *
   FROM order_items oi
   JOIN order_item_notes oin
      USING (order_id, product_id)*/
      
-- USE sql_invoicing;

/* SELECT
     p.date,
     c.name AS client,
     p.amount,
     pm.name AS payment_method
FROM payments p
JOIN clients c USING (client_id)
JOIN payment_methods pm
  ON p.payment_method = pm.payment_method_id */


-- Natural Joins

-- USE sql_store;

/* SELECT 
   o.order_id,
   c.first_name
FROM orders o 
NATURAL JOIN customers c */

-- CROSS Joins
/* SELECT
   c.first_name AS customer,
   p.name AS product
FROM customers c
CROSS JOIN products p
ORDER BY c.first_name */

-- Do a cross join between shippers and products
-- using the implicit syntax
-- and then using the explicit syntax

/* SELECT
  sh.name AS shipper,
  p.name AS product
FROM shippers sh
CROSS JOIN products p 
ORDER BY sh.name */


-- UNIONS 


    



 
 
 
  
 
 
 
 