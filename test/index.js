const Sonar = require('./sonar.js');

if (!process.env.HOST || !process.env.USERNAME || !process.env.PASSWORD) {
  throw new Error('SETUP YOUR ENVIRONMENT VARIABLES');
}

const sonarClient = new Sonar({
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
});

sonarClient
  .get('accounts')
  .then(response => {
    console.log('accounts:', response);
  })
  .catch(e => console.log('ERROR:', e));
