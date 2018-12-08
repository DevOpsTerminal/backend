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



## Installation

Stable version:
```bash
npm i yargs --save
```

Bleeding edge version with the most recent features:
```bash
npm i yargs@next --save
```

## Usage :

### Simple Example

````javascript
#!/usr/bin/env node
const argv = require('yargs').argv

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

* [Yargs' API](/docs/api.md)
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
  * [Customizing Yargs' Parser](/docs/advanced.md#customizing)
* [Contributing](/contributing.md)



## License

DevOpsTerminal is released under [MIT License](https://opensource.org/licenses/MIT).
