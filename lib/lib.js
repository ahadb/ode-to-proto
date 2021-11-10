const Lib = require('./base/Lib')
const defaults = require('./defaults')
const bind = require('./helpers/bind')
const utils = require('./utils')

function createInstance(defaultConfig) {
    const ctx = new Lib(defaultConfig)
    const instance = bind(Lib.prototype, ctx)

    utils.extend(instance, Lib.prototype, ctx)
    utils.extend(instance, ctx)

    // return instance
    return instance
}

// create default instance to be exported
const lib = createInstance(defaults)

// expose others, assuming you want to (...including version)
lib.Explode = require('./helpers/explode')
lib.VERSION = require('./env/version')

console.log(lib)

// export lib
module.exports = lib