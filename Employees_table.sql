CREATE DATABASE demodb;
USE demodb;
CREATE TABLE employees (
   emp_id INT PRIMARY KEY AUTO_INCREMENT,
   first_name VARCHAR(50),
    last_name VARCHAR(50),
     department VARCHAR(50),
    salary DECIMAL(10,2),
    age INT,
    city VARCHAR(50),
    hire_date DATE
 );



INSERT INTO employees (first_name, last_name, department, salary, age, city, hire_date)
VALUES
('Amit', 'Sharma', 'IT', 55000, 25, 'Delhi', '2023-01-15'),
('Priya', 'Verma', 'HR', 48000, 28, 'Mumbai', '2022-05-20'),
('Rahul', 'Singh', 'Finance', 62000, 30, 'Lucknow', '2021-03-10'),
('Neha', 'Patel', 'IT', 58000, 26, 'Ahmedabad', '2024-02-18'),
('Rohit', 'Kumar', 'Marketing', 45000, 29, 'Patna', '2023-06-25'),
('Sneha', 'Gupta', 'Sales', 50000, 27, 'Jaipur', '2022-09-12'),
('Arjun', 'Yadav', 'IT', 70000, 32, 'Noida', '2020-11-05'),
('Pooja', 'Mishra', 'HR', 47000, 24, 'Kanpur', '2024-04-01'),
('Vikas', 'Joshi', 'Finance', 65000, 31, 'Pune', '2021-12-15'),
('Anjali', 'Roy', 'Marketing', 52000, 26, 'Kolkata', '2023-08-30');


SELECT * FROM employees;