'use strict';

const should = require('should');
const extend = require('../extend');

describe('Extend input params', () => {
    it(`should throw exception in case the dest param is not object`, () => {
        let dest = '4';

        (function () {
            extend(dest, {});
        }).should.throw('dest object must be of type object');
    });

    it(`should throw exception in case the source param is not array or object`, () => {
        let dest = {};

        (function () {
            extend(dest, '9');
        }).should.throw('source object must be of type object');
    });
});
describe('Extend functionality', ()=> {
    it(`shouldn't change the object in case the source object doesn't have any properties`, () => {
        let dest = {};

        extend(dest, {});

        dest.should.be.eql({});
    });
    it(`should assign all properties of source objects`, () => {
        let dest = {};

        extend(dest, {a: '1'}, {b: '1'});

        dest.should.be.eql({a: '1', b: '1'});
    });
    it(`should extend empty object with properties from other object`, () => {
        let dest = {};

        extend(dest, {name: 'adi'});

        dest.should.be.eql({name: 'adi'});
    });
    it(`should assign properties from source objects in the same order they have been received`, () => {
        let dest = {};

        extend(dest, {name: 'adi'}, {name: 'yossi'});

        dest.should.be.eql({name: 'yossi'});
    });
});


