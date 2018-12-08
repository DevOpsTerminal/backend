[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![NPM version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
[![Slack][slack-image]][slack-url]
[![Codeship Status for lukeautry/tsoa](https://codeship.com/projects/cdce38d0-1f6b-0134-258e-1ed679ae6c9d/status?branch=master)](https://codeship.com/projects/160322)
[![npm version](https://badge.fury.io/js/tsoa.svg)](https://badge.fury.io/js/tsoa)


# DevOpsTerminal backend

DevOpsTermina Swagger UI Spec to existing Node.js/Express.js project

## Requirements

* Node.js v6.11.0
* MongoDB v3.4.6
* Gulp v3.9.1

## Usage

    npm i
    node server.js

Api documentation can be found on: `http://localhost:3000/api-docs`



## APICRA Scripts

    app_init.bat
    app_start.bat
    gulp_init.bat
    gulp_install.bat


## How it works

### Swagger API
![docs swagger](docs/swagger_api.png)


## Getting Started

Clone the repo, change directory, install dependencies, build the code, and run it!

```sh
git clone https://github.com/DevOpsTerminal/backend.git
cd backend
npm install
npm run build
npm run test
npm start
```

Then navigate to http://localhost:3007 and click on the buttons to see some reactive events in action.

## Deployment


<a href="https://www.heroku.com/deploy/?template=https://github.com/DevOpsTerminal/backend"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku" height="25px"></a>

<a href="https://deploy.now.sh/?repo=https://github.com/DevOpsTerminal/backend"><img src="https://deploy.now.sh/static/button.svg" alt="Deploy to Now" height="25px"></a>

Don't forget to set the environment variable `NODE_ENV=production` to avoid the slower, dev version of React. Like so:

```sh
npx now -e NODE_ENV=production DevOpsTerminal/backend
```


## Usage :

### Simple Example

````javascript
#!/usr/bin/env node
const argv = require('devopsterminal').argv

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}
````

```bash
$ ./plunder.js --ships=4 --distance=22
Retreat from the xupptumblers!
```

### Complex Example

```javascript
#!/usr/bin/env node

```

Run the example above with `--help` to see the help for the application.

## Community :

Having problems? want to contribute? join our [community slack](http://devtoolscommunity.herokuapp.com).


## Documentation :

### Table of Contents

* [devopsterminal' API](/docs/api.md)
* [Examples](/docs/examples.md)
* [Parsing Tricks](/docs/tricks.md)
  * [Stop the Parser](/docs/tricks.md#stop)
  * [Negating Boolean Arguments](/docs/tricks.md#negate)
  * [Numbers](/docs/tricks.md#numbers)
  * [Arrays](/docs/tricks.md#arrays)
  * [Objects](/docs/tricks.md#objects)
* [Advanced Topics](/docs/advanced.md)
  * [Composing Your App Using Commands](/docs/advanced.md#commands)
  * [Building Configurable CLI Apps](/docs/advanced.md#configuration)
  * [Customizing devopsterminal' Parser](/docs/advanced.md#customizing)
* [Contributing](/contributing.md)



## License

DevOpsTerminal is released under [MIT License](https://opensource.org/licenses/MIT).



[travis-url]: https://travis-ci.org/devopsterminal/devopsterminal
[travis-image]: https://img.shields.io/travis/devopsterminal/devopsterminal/master.svg
[coveralls-url]: https://coveralls.io/github/devopsterminal/devopsterminal
[coveralls-image]: https://img.shields.io/coveralls/devopsterminal/devopsterminal.svg
[npm-url]: https://www.npmjs.com/package/devopsterminal
[npm-image]: https://img.shields.io/npm/v/devopsterminal.svg
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org/
[slack-image]: http://devtoolscommunity.herokuapp.com/badge.svg
[slack-url]: http://devtoolscommunity.herokuapp.com