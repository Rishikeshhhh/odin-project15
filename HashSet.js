const HashMap = require('./HashMap');

class HashSet {
    constructor() {
        this.map = new HashMap();
    }

    add(key) {
        this.map.set(key, true);
    }

    has(key) {
        return this.map.has(key);
    }

    remove(key) {
        return this.map.remove(key);
    }

    length() {
        return this.map.length();
    }

    clear() {
        this.map.clear();
    }

    keys() {
        return this.map.keys();
    }
}

// Example usage:
const set = new HashSet();
set.add("Carlos");
console.log(set.has("Carlos")); // Output: true
set.remove("Carlos");
console.log(set.has("Carlos")); // Output: false

module.exports = HashSet;
