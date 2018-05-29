#Eve Online Fitting Manager

## What?
Eve Online Fitting Manager is the natural progression of the Osmium fitting site. The end goal for this website is to have a hub for all fittings. Users will be
able to attach their Eve Online account to the website, and store their fittings, be able to create private fittings, and access Alliance/Corporation fittings
without having to go through the Eve Online UI.

## Why?
With PYFA being local, and the Eve Online UI being notoriously shitty, this app hopes to bridge the gap, allowing users to pull in fits from pyfa via importing, from in-game
and from osmium.

## What will it be built with?
The front end of the website will be built using React/Redux and Material-UI. The back end will hopefully be implemented using MongoDB and Socket.io for communications between the two. These details are not final. 

## How to get up and running?
Clone the repository:
```
    git clone https://github.com/drozdowo/eveonlinefittingmanager.git
```
Navigate to the folder:
```
    cd eveonlinefittingmanager
```
Then run:
```
    npm install
```
to install all of the plugins, and finally:
```
    npm run dev
```
to start!
Now you can navigate to localhost:3030 to view the client side, and the API will be running on localhost:8080 with localhost:3030/api redirecting to localhost:8080!

Now the server needs to be set up (pain in the ass)
In our case, we have a local MongoDB Instance running, with a db named 'eofm', with a user named 'eve' and password 'test' with the roles: 'readWrite' on said db 'eofm'.

Go into the src/server/dbInserts to get the inserts for the eofm db to get the app running.