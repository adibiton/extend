'use strict';

function containsObjects(arr) {
    return arr.every(function (element) {
        return typeof element === 'object';
    });
}

function clone(exclude, obj) {
    let cloned = {};
    copyProperty(cloned, exclude, obj);
    return cloned;
}

function copyProperty(dest, exclude, src) {
    for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
            if (exclude !== null && exclude.includes(prop)) {
                continue;
            } else if (typeof src[prop] === 'object') {
                dest[prop] = clone(exclude, src[prop]);
            } else {
                dest[prop] = src[prop];
            }

        }
    }
}

module.exports = function (dest, exclude, ...src) {
    if (!containsObjects(src)) {
        throw TypeError('source input(s) must be of type object');
    }
    if (typeof dest !== 'object') {
        throw TypeError('dest input must be of type object');
    }
    if (Array.isArray(src)) {
        src.forEach(function (obj) {
            copyProperty(dest, exclude, obj);
        });
    }
    else {
        copyProperty(dest, exclude, src);
    }
};