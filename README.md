# extend-exclude (node-extend with some salt) 
[![Build Status](https://travis-ci.org/adibiton/extend-exclude.svg?branch=master)](https://travis-ci.org/adibiton/extend-exclude)
- Deep copy from multiple sources to destination object
- Allow passing array of properties **not** to be copied to the 
destination object


# Installation
`npm install @adibiton/extend-exclude`

# API

`extend(dest, [exclude], [src])`

**dest**
Type: object
The object to be extended

**exclude**

Type: Array of strings
A black list of properties **not** to be included in the extended object
(value can be null) - the properties are only on the root level

**src**
Type: object / Array of objects
The source object(s) to be copied


# How to use
`const extend = require('extend-exclude');
extend({}, null, {firstName: 'Franz'}, {lastName: 'Schubert'})`

# Example
`const extend = require('@adibiton/extend-exclude');

let x = {name: {first: 'Franz', last: 'Schubert'}, profession: 'composer'}; 
let y = {age: '55'};  

extend(y, ['profession'], x);  

console.log(y); //{ age: '55', name: { first: 'Franz', last: 'Schubert' } }`




