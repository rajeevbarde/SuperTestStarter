let expect = require('chai').expect;
let mocha = require('mocha');
const maLogger = require('mochawesome/addContext');

//Add the test URL
let TEST_URL = "https://postman-echo.com/";

let request = require('supertest')(TEST_URL);

module.exports = {    
    request,
    expect,
    mocha,
    maLogger,    
}

