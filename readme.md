# Fake User Api

It's a API service full of fake and dummy data for playing around with real users and post data.
Feel free to use it in your demo projects, tutorials, or testing tasks.

## Creating Database , User and Grant Previleges

```sql

    CREATE DATABASE fakeuserapi;    #format: CREATE DATABASE <database_name>
    USE fakeuserapi;                 #selecting the db;

    CREATE USER 'fakeapiuser' IDENTIFIED BY 'fakeuserpass';
    USE fakeuserapi;
    GRANT ALL PRIVILEGES ON fakeapiuser.* TO fakerapiuser;
    FLUSH PRIVILEGES;
```

# Anatomy of the project

```terminal

src/
├── controllers             # Connection between db and api
├── db                      # Database connections , seeding , modeling
├── public                  # FrontEnd - html , css ,js
├── routes                  # Application Routes

```

# Business Logic

## Users

1. **create user** : this will creates a new user

   required fields are

   - name
   - age
   - occupation
   - email
   - gender

2. **delete user** : this will delete a new user of given userid

   required fields are

   - user id

3. **update user** : this will update fields of given userid

   required fields are

   - data
   - user id

4. **show users** : this will show all the users

5. **show user by id** : this will show user belongs to that id

   required fields are

   - user id
