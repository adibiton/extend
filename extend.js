'use strict';

function containsObjects(arr){
    return arr.every(function(element) {
        return typeof element === 'object';
    });
}

function copyProperty(dest, src){
    for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
            dest[prop] = src[prop];
        }
    }
}

module.exports = function (dest, ...src) {
    if (!containsObjects(src)) {
        throw TypeError('source object must be of type object');
    }
    if (typeof dest !== 'object') {
        throw TypeError('dest object must be of type object');
    }
    if (Array.isArray(src)) {
        src.forEach(function (obj) {
            copyProperty(dest, obj);
        });
    }
    else {
        copyProperty(dest, src);
    }
};