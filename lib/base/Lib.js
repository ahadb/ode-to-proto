
/**
 * Create a new instance of your Library 
 *
 * @param  {} config
 * @param  {newMap(} {this.defaults=configthis.foo={baz}
 */
function Lib(config) {
    this.defaults = config
    this.foo = {
        baz: new Map(),
        bar: new Set()
    }
}

/**
 * Get
 * 
 * @param  {} arg1
 * @param  {} arg1
 */
Lib.prototype.get = function get(arg1, arg1) {
    return this.foo
}

/**
 * @param  {} arg1
 * @param  {} arg2
 */
Lib.prototype.set = function set(arg1, arg2) {
    return this.foo.baz
}

/**
 */
Lib.prototype.hasOwnProperty = function hasOwnProperty() {
    return this
}

/**
 */
Lib.prototype.propetyIsEnumerable = function propetyIsEnumerable() {
    return this
}

/**
 */
Lib.prototype.toString = function toString() {
    return this
}

/**
 */
Lib.prototype.valueOf = function valueOf() {
    return this
}

module.exports = Lib