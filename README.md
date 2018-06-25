# Tweet Search
[![Build Status](https://travis-ci.org/yenhsuan/TweetSearch.svg?branch=master)](https://travis-ci.org/yenhsuan/TweetSearch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A tweets search application built by React.js and Node.js
[See Live DEMO](http://yenhsuan.xyz:3333 "Live DEMO")
![](https://i.imgur.com/UbDmGkP.png)
## Getting Started

Get a copy of this project
```
git clone https://github.com/yenhsuan/TweetSearch.git
```

### Prerequisites

[Node.js](https://nodejs.org/en/download/ "Node.js") and [NPM](https://www.npmjs.com/get-npm "NPM") are required.
Inorder to use Twitter API, you must have API token and secret (Get them [here](https://developer.twitter.com/en/apply-for-access "here")).

This project followed by [Standard.js](https://standardjs.com "Standard.js"). I highly recommend this library.
```
npm install standard -g
```

### Installing

##### Client App
Install all necessary libraries
```
cd ./client && npm install
```

You can test client application by launching development web server
```
npm start
```

Bundle and output static files
```
npm run build
```

##### Web Server
Install all necessary libraries
```
cd ./server && npm install
```

Configure server settings
`./config/server-config.js`
```javascript
module.exports = {
  port: YOUR_PORT_NUBER
}
```
Configure Twitter API settings
`./config/twitter-config.js`
```javascript
module.exports = {
  consumer_key: 'YOUR_APP_KEY',
  consumer_secret: 'YOUR_APP_SECRET',
  access_token: 'YOUR_TOKEN',
  access_token_secret: 'YOUR_TOKEN_SECRET',
}
```

Launch Server
```
npm start
```

## Deployment

This project is deployed by [PM2](https://www.npmjs.com/package/pm2 "PM2"), and running on a Ubuntu 16.04 machine.
[See Live DEMO](http://yenhsuan.xyz:3333 "Live DEMO")

## Built With
* [React.js](https://www.npmjs.com/package/react "React.js") - JavaScript web framework
* [React-MobX](https://www.npmjs.com/package/mobx-react "React-MobX") - React state management library
* [Webpack](https://www.npmjs.com/package/webpack "Webpack") - Bundle and pack static files
* [Node-sass](https://www.npmjs.com/package/node-sass "Node-sass") - SCSS preprocessor for Node.js
* [Node.js](https://nodejs.org/en/ "Node.js") - Web server
* [Express.js](https://www.npmjs.com/package/express "Express.js") - Web framework for Node.js
* [Twit](https://www.npmjs.com/package/twit "Twit") - Twitter API Client for Node.js

See `package.json` for details


## Authors
Yen-Hsuan Chen
E-mail: yenhsuan.terry@gmail.com
Website: https://yenhsuan.github.io

