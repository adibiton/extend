'use strict';

function containsObjects(arr) {
    return arr.every(function (element) {
        return typeof element === 'object';
    });
}

function clone(obj) {
    let cloned = {};
    copyProperty(cloned, obj);
    return cloned;
}

function copyProperty(dest, except, src) {
    for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
            if (except !== null && except.includes(prop)) {
                continue;
            } else if (typeof src[prop] === 'object') {
                dest[prop] = clone(src[prop]);
            } else {
                dest[prop] = src[prop];
            }

        }
    }
}

module.exports = function (dest, except, ...src) {
    if (!containsObjects(src)) {
        throw TypeError('source input(s) must be of type object');
    }
    if (typeof dest !== 'object') {
        throw TypeError('dest input must be of type object');
    }
    if (Array.isArray(src)) {
        src.forEach(function (obj) {
            copyProperty(dest, except, obj);
        });
    }
    else {
        copyProperty(dest, except, src);
    }
};