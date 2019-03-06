# Sonar.Software Node Module

This is an unofficial [Sonar](https://sonar.software/)'s [API](https://sonar.software/apidoc/) Node client.

Test it live at https://codesandbox.io/s/github/maddog986/node-sonarsoftware

## Installation

```
npm install node-sonarsoftware
```

## Usage

First you need to instantiate it.

```javascript
const Sonar = require('node-sonarsoftware');

const sonarClient = new Sonar({
  host: 'yourname.sonar.software',
  username: 'your username',
  password: 'your password'
});
```

Using the created client, call the methods you need, example:

```javascript
sonarClient
  .get('accounts')
  .then(response => {
    console.log('accounts:', response);
  })
  .catch(e => console.log('ERROR:', e));
```

## License

[See License](https://github.com/maddog986/node-repairshopr/blob/master/LICENSE)

## Release Notes

[See Changelog](https://github.com/maddog986/node-repairshopr/blob/master/CHANGELOG.md)
