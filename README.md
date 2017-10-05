

### Set Up

1. Import the "beer-favs.postman_collection" file into your Postman app
2. Install Nodemon globaly by running
```
npm install -g nodemon
```
3. Inside the project folder run
```
npm install
```

4. Start your server by running
```
nodemon app.js
```

This will keep our server reloading automatically whenever you update something in the .js files.

### Fix the broken API

Unfortunately our API to get our favorite beers is currenlty broken

Look over the app.js file to try to fix the API.

Start fixing the API in the following order:
1. Get All Beers (GET Request)
2. Get One Beer by ID (GET Request)
3. Add One Beer (POST Request)
4. Update One Beer by ID (PUT Request)
5. Delete One Beer by ID (DELETE Request)

GOOGLE IS YOUR FRIEND ;)

Use the documentation for Express, Mongoose & MongoDB
- https://expressjs.com/en/guide/routing.html
- http://mongoosejs.com/docs/guide.html

### Test the API

Run the different API calls by clicking the "Send" button in Postman, till you get the proper responses.

Somtimes your node server will crash! Make sure it is running properly, by checking the terminal. The command
```
rs
```
will reload it manually.

