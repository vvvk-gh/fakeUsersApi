# Fake User Api

It's a API service full of fake and dummy data for playing around with real users and post data.
Feel free to use it in your demo projects, tutorials, or testing tasks.

## [Live Demo](https://fakeusersapi.herokuapp.com/)

# Usage :

All users : https://fakeusersapi.herokuapp.com/api/users

Single User : https://fakeusersapi.herokuapp.com/api/users/{id}

## DB: Cloud Mongo Atlas

```

1. Register in mongodb atlas.
2. Configure the setup and make a connection to your application.

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

# Heroku Deployment

heroku login

heroku create <app_name>

git push heroku master
