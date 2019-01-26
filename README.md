# Real Time Twitter Stream with React

Code 

## Requirements

- node for server
- npm for dependencies

## How to Use

1. Clone the repo: `git clone https://github.com/chouchua/twitterFeed.git`
2. Install dependencies: `npm install`
3. Create local MongoDB database called (configured in `server.js`)
4. Replace credentials for Twitter API (configured in `config.js`)
    -setup twitter application (TBD)
5. Start the app: `node server.js`
    -code change is monitored, make sure to bundle all js sources ([consult development section](#development-environment))
7. View in browser at: `http://localhost:8080`
9. Use Proc file

# Development environment
- watch js changes, run:
    - `npm run watch`
- How to set up mongodb
    - create `data` folder in root of application
    - start mongodb instance:
        - run `npm run mongod`
        
# How to deploy to heroku
TBD

# TODO
- stream google business reviews
