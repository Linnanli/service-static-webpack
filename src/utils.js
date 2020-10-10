const { underline } = require("chalk")

exports.isFunction = function (value) {
    return typeof value === 'function'
}

exports.isString = function (value) {
    return typeof value === 'string'
}

exports.isObject = function (value) {
    return Object.prototype.toString.call(value) === '[object Object]'
}

exports.isUndefined = function (value) {
    return value === undefined
}

exports.setNodeEnv = function (env) {
    if (!process.env.NODE_ENV) process.env.NODE_ENV = env
}