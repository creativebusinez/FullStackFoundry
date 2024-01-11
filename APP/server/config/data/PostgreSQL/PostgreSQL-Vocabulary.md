# PostgreSQL Vocabulary

1. **Database**: A collection of structured data with a well-defined schema. PostgreSQL allows you to create multiple databases within a single PostgreSQL cluster.
   Example (Creating a Database):

   ```sql
   CREATE DATABASE mydb;
   ```

2. **Table**: A database object that stores data in rows and columns, following a predefined schema.
   Example (Creating a Table):

   ```sql
   CREATE TABLE employees (
       id serial PRIMARY KEY,
       name VARCHAR(255),
       age INT
   );
   ```

3. **Schema**: A logical container that holds database objects such as tables, views, and functions, providing organization and access control.
   Example (Creating a Schema and Table):

   ```sql
   CREATE SCHEMA myschema;
   CREATE TABLE myschema.products (
       id serial PRIMARY KEY,
       name VARCHAR(255),
       price DECIMAL(10, 2)
   );
   ```

4. **Column**: A single data field within a table. Columns have data types that define the kind of data they can store.
   Example (Defining Columns in a Table):

   ```sql
   CREATE TABLE students (
       id serial PRIMARY KEY,
       first_name VARCHAR(50),
       last_name VARCHAR(50),
       age INT
   );
   ```

5. **Primary Key**: A column or set of columns that uniquely identify each row in a table, ensuring data integrity.
   Example (Defining a Primary Key):

   ```sql
   CREATE TABLE books (
       book_id serial PRIMARY KEY,
       title VARCHAR(255),
       author VARCHAR(255)
   );
   ```

6. **Foreign Key**: A column or set of columns that establishes a link between two tables, enforcing referential integrity.
   Example (Defining a Foreign Key):

   ```sql
   CREATE TABLE orders (
       order_id serial PRIMARY KEY,
       customer_id INT,
       order_date DATE,
       FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
   );
   ```

7. **Index**: A database structure that enhances data retrieval speed by providing a quick lookup mechanism.
   Example (Creating an Index):

   ```sql
   CREATE INDEX idx_last_name ON employees (last_name);
   ```

8. **SQL Query**: A command used to retrieve, manipulate, or modify data in a PostgreSQL database.
   Example (Selecting Data):

   ```sql
   SELECT first_name, last_name FROM employees WHERE age > 30;
   ```

9. **CRUD Operations**: Acronym for Create, Read, Update, and Delete, representing the fundamental database operations.
   Example (Inserting Data):

   ```sql
   INSERT INTO employees (name, age) VALUES ('Alice', 35);
   ```

10. **Transaction**: A sequence of one or more SQL statements that are treated as a single unit of work, ensuring data consistency.
    Example (Starting a Transaction):

    ```sql
    BEGIN;
    -- SQL statements here
    COMMIT;
    ```

11. **Normalization**: The process of organizing data in a relational database to eliminate redundancy and improve data integrity.
    Example (Creating Normalized Tables):

    ```sql
    CREATE TABLE authors (
        author_id serial PRIMARY KEY,
        author_name VARCHAR(255)
    );

    CREATE TABLE books (
        book_id serial PRIMARY KEY,
        title VARCHAR(255),
        author_id INT REFERENCES authors(author_id)
    );
    ```

12. **Stored Procedure**: A named and precompiled set of one or more SQL statements that can be executed with a single call.
    Example (Creating a Stored Procedure):

    ```sql
    CREATE OR REPLACE FUNCTION get_employee_name(employee_id INT)
    RETURNS VARCHAR AS $$
    BEGIN
        RETURN (SELECT name FROM employees WHERE id = employee_id);
    END;
    $$ LANGUAGE plpgsql;
    ```

13. **View**: A virtual table that is the result of a SQL query and can be used like a regular table for querying.
    Example (Creating a View):

    ```sql
    CREATE VIEW high_salary_employees AS
    SELECT name, salary FROM employees WHERE salary > 50000;
    ```

14. **Triggers**: Database objects that automatically execute in response to certain database events, such as INSERT, UPDATE, or DELETE operations.
    Example (Creating a Trigger):

    ```sql
    CREATE TRIGGER log_changes
    BEFORE INSERT OR UPDATE ON products
    FOR EACH ROW
    EXECUTE FUNCTION log_product_changes();
    ```

15. **Authentication and Authorization**: Methods for controlling access to the database by specifying who can connect and what they can do.
    Example (Creating a User and Granting Permissions):

    ```sql
    CREATE USER myuser WITH PASSWORD 'mypassword';
    GRANT SELECT ON mytable TO myuser;
    ```

16. **Replication**: The process of copying and maintaining data across multiple PostgreSQL servers for high availability and fault tolerance.
    Example (Setting up Streaming Replication):

    ```sql
    -- On the primary server
    wal_level = replica
    max_wal_senders = 3
    archive_mode = on

    -- On the standby server
    primary_conninfo = 'host=primary_server port=5432 user=repl_user password=repl_password'
    restore_command = 'cp /path/to/archive/%f %p'
    ```
