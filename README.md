# Extend like the node-extend way 
- Deep copy from multiple sources to destination object
- Allow passing array of properties **not** to be copied to the 
destination object


# Installation
`npm install extend-except`

# API

`extend(dest, [except], [src])`

**dest**
Type: object
The object to be extended

**except**

Type: Array of strings
A black list of properties **not** to be included in the extended object
(value can be null) - the properties are only on the root level

**src**
Type: object / Array of objects
The source object(s) to be copied


# How to use
`const extend = require('extend-except);
extend({}, null, {firstName: 'Franz'}, {lastName: 'Schubert'})`
# Example



