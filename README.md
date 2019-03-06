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
//get accounts
sonarClient
  .get('accounts')
  .then(response => {
    console.log('accounts:', response);
  })
  .catch(e => console.log('ERROR:', e));

//create account. https://sonar.software/apidoc/#api-Accounts-PostAccount
sonarClient
  .add('accounts', {
    name: 'John Doe'
    //... other fields
  })
  .then(response => {
    console.log('account created:', response);
  })
  .catch(e => console.log('ERROR:', e));

//update account. https://sonar.software/apidoc/#api-Accounts-PatchAccount
sonarClient
  .update('accounts/1000', {
    name: 'John Smith'
    //... other fields
  })
  .then(response => {
    console.log('account created:', response);
  })
  .catch(e => console.log('ERROR:', e));

//delete account. https://sonar.software/apidoc/#api-Accounts-DeleteAccount
sonarClient
  .delete('accounts/1000')
  .then(response => {
    console.log('delete account response:', response);
  })
  .catch(e => console.log('ERROR:', e));
```

## License

[See License](https://github.com/maddog986/node-sonarsoftware/blob/master/LICENSE)

## Release Notes

[See Changelog](https://github.com/maddog986/node-sonarsoftware/blob/master/CHANGELOG.md)
