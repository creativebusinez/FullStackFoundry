# Set an Admin User with a Password for a New Database

To set an admin user with a password for a new database in PostgreSQL, you'll need to create both the user and the database, assign privileges, and set the user's password. Here are the steps:

**Step 1: Create a New User**
You can create a new user with the `CREATE USER` command. Replace `<username>` with the desired username.

```sql
CREATE USER <username>;
```

**Step 2: Set the User's Password**
You should set a password for the new user using the `ALTER USER` command. Replace `<username>` with the username you created and `<password>` with the desired password.

```sql
ALTER USER <username> WITH PASSWORD '<password>';
```

**Step 3: Create a New Database**
Now, create a new database using the `CREATE DATABASE` command. Replace `<database_name>` with the desired database name.

```sql
CREATE DATABASE <database_name>;
```

**Step 4: Assign Privileges to the User**
To make the user an administrator (superuser) for the database, grant them the necessary privileges using the `GRANT` command:

```sql
GRANT ALL PRIVILEGES ON DATABASE <database_name> TO <username>;
```

**Step 5: Connect to the Database**
You can now connect to the new database as the admin user you've created by quitting then restarting your PostgreSQL client and connecting to the database using the CLI.

<!-- ```shell
psql -U <username> -d <database_name>
``` -->

Replace `<username>` with the admin user's username and `<database_name>` with the name of the new database.

With these steps, you've created a new user, set their password, created a new database, assigned them superuser privileges for that database, and connected to the database as the admin user.
