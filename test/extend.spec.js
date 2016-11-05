'use strict';

const should = require('should');
const extend = require('../extend');

describe('Extend input params', () => {
    it(`should throw exception in case the dest param is not object`, () => {
        let dest = '4';

        (function () {
            extend(dest, null, {});
        }).should.throw('dest input must be of type object');
    });

    it(`should throw exception in case the source param is not array or object`, () => {
        let dest = {};

        (function () {
            extend(dest, null, '9');
        }).should.throw('source input(s) must be of type object');
    });
});
describe('Extend functionality', ()=> {
    it(`shouldn't change the object in case the source object doesn't have any properties`, () => {
        let dest = {};

        extend(dest, null, {});

        dest.should.be.eql({});
    });
    it(`should assign all properties of source objects`, () => {
        let dest = {};

        extend(dest, null, {a: '1'}, {b: '1'});

        dest.should.be.eql({a: '1', b: '1'});
    });
    it(`should extend empty object with properties from other object`, () => {
        let dest = {};

        extend(dest, null, {name: 'Franz'});

        dest.should.be.eql({name: 'Franz'});
    });
    it(`should copy properties from source objects in the same order they have been received`, () => {
        let dest = {};

        extend(dest, null, {name: 'Franz'}, {name: 'Robert'});

        dest.should.be.eql({name: 'Robert'});
    });
    it(`should deeply create dest object`, () => {
        let dest = {name: 'Wolfgang'};
        let src = {name: {first: 'Franz', last: 'Schubert'}};
        extend(dest, null, src);
        src.name.first = 'Robert';
        src.name.last = 'Schumann';

        dest.should.be.eql({name: {first: 'Franz', last: 'Schubert'}});
    });
    it(`should ignore coping properties from except array`, () => {
        let dest = {};
        let except = ['name', 'profession'];
        extend(dest, except, {name: 'Franz'}, {profession: 'composer'}, {nationality: 'austrian'});

        dest.should.be.eql({nationality: 'austrian'});
    });

});


