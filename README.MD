# Polling App - Using node.js, Pusher Framework, MONGO DB, Vanilla JS, Materialized CSS
- NODE.JS is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. 

- Mongo DB: No-SQL DB
- mlab - Database-as-a-Service: mLab is the largest cloud MongoDB service in the world, hosting over a half million deployments on AWS, Azure, and mlab - Database-as-a-Service Google.

- Pusher framework: Pusher is a simple hosted API for quickly, easily and securely integrating realtime bi-directional functionality via WebSockets to web and mobile apps, or any other Internet connected devices.

- Vanilla JS: Pure JavaScript

## Steps
- Create an app in Pusher. Select "front-end" and "back-end" tech
- Create an app in local and open in editor
    npm init
    npm i express body-parser pusher cors mongoose --save
        express - node js server
        body-parser - For form data processing
        pusher - API interaction
        cors - to support resource sharing across origins
        mongoose - mongo DB interaction
    
    npm i nodemon --save-dev
        nodemon - Live updates of the app without stopping and re-running the app 

- Create/open file - app.js: Create a basic express server. Setup express body-parser cors
- Setup the routes for the app
- Setup the pusher API settings in router
- Create the client-side HTML using Materialized CSS, Canvas JS (for graphs), Vanilla JS
- Post the data to Express Server using "fetch"

# mlab - Database-as-a-Service:
- Instead of creating DB in local, DB will be created as service
- Signup an account in https://mlab.com 
- In MongoDB Deployments section, create "Create New" database
- Check "mongoose" is installed in app | npm i mongoose
- Use reduce() to count the votes


## To run the app: npm run dev
- TODO: De-select the radio button after voting


## References
- Pusher: https://pusher.com/
- node.js: https://nodejs.org
- mlab: https://mlab.com/
- mongodb: https://www.mongodb.com/ 