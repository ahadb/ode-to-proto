const utils = require('./utils')

const defaults = {
    baz: {
        quux: false,
        baam: true
    },
    init: function init() {
        return 'init'
    }
}

function setup() {
    const setupFoo = utils.isEmpty('some setup function')

    return setupFoo
}

module.exports = defaults