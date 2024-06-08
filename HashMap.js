class HashMap {
    constructor(initialCapacity = 16) {
        this.buckets = new Array(initialCapacity);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }
        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        for (let pair of this.buckets[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        this.buckets[index].push([key, value]);
        this.size++;

        if (this.size / this.buckets.length > 0.75) {
            this.resize();
        }
    }

    get(key) {
        const index = this.hash(key);
        if (this.buckets[index]) {
            for (let pair of this.buckets[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);
        if (this.buckets[index]) {
            for (let pair of this.buckets[index]) {
                if (pair[0] === key) {
                    return true;
                }
            }
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        if (this.buckets[index]) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i][0] === key) {
                    this.buckets[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.buckets.length);
        this.size = 0;
    }

    keys() {
        const keysArray = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let pair of bucket) {
                    keysArray.push(pair[0]);
                }
            }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let pair of bucket) {
                    valuesArray.push(pair[1]);
                }
            }
        }
        return valuesArray;
    }

    entries() {
        const entriesArray = [];
        for (let bucket of this.buckets) {
            if (bucket) {
                for (let pair of bucket) {
                    entriesArray.push(pair);
                }
            }
        }
        return entriesArray;
    }

    resize() {
        const oldBuckets = this.buckets;
        this.buckets = new Array(this.buckets.length * 2);
        this.size = 0;

        for (let bucket of oldBuckets) {
            if (bucket) {
                for (let pair of bucket) {
                    this.set(pair[0], pair[1]);
                }
            }
        }
    }
}

// Example usage:
const map = new HashMap();
map.set("Carlos", "I am the old value.");
map.set("Carlos", "I am the new value.");
console.log(map.get("Carlos")); // Output: I am the new value.

module.exports = HashMap;
