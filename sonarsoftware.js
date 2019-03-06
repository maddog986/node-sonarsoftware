/**
 * Copyright (C) 2019. Drew Gauderman
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const request = require('request');

//export the sonar class
module.exports = class Sonar {
  //class startup
  constructor(opts) {
    //require host, username, password
    ['host', 'username', 'password'].forEach(name => {
      if (!opts.hasOwnProperty(name)) {
        throw new Error('options.' + name + ' is a required argument.');
      }
    });

    this.opts = opts;
  }

  //request that returns a promise
  modem(opts) {
    let options = {
      uri: `https://${this.opts.host}/api/v1/${opts.endpoint}`,
      method: opts.method || 'GET',
      auth: {
        user: this.opts.username,
        pass: this.opts.password,
        sendImmediately: true
      },
      json: true,
      ...opts
    };

    return new Promise((res, rej) => request(options, (e, r) => (e ? rej(e) : r.body.error ? rej(r.body.error) : res(r.body))));
  }

  //get something
  get(endpoint, opts = {}) {
    return this.modem({ endpoint: endpoint, ...opts });
  }

  //add (post) something
  add(endpoint, opts) {
    return this.modem({ method: 'POST', endpoint: endpoint, ...opts });
  }

  //update (patch) something
  update(endpoint, opts) {
    return this.modem({ method: 'PATCH', endpoint: endpoint, ...opts });
  }

  //delete something
  delete(endpoint, opts) {
    return this.modem({ method: 'DELETE', endpoint: endpoint, ...opts });
  }
};
