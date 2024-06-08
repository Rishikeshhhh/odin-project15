const HashMap = require('./HashMap');
const HashSet = require('./HashSet');

// Testing HashMap
const map = new HashMap();
map.set("Carlos", "I am the old value.");
map.set("Carlos", "I am the new value.");
console.log(map.get("Carlos"));             // Output: I am the new value.
console.log(map.has("Carlos"));             // Output: true
console.log(map.remove("Carlos"));           // Output: true
console.log(map.has("Carlos"));             // Output: false
console.log(map.length());                  // Output: 0

map.set("Carla", "Value 1");
map.set("Carla2", "Value 2");
console.log(map.keys());                    // Output: ["Carla", "Carla2"]
console.log(map.values());                  // Output: ["Value 1", "Value 2"]
console.log(map.entries());                 // Output: [["Carla", "Value 1"], ["Carla2", "Value 2"]]
map.clear();
console.log(map.length());                  // Output: 0

// Testing HashSet
const set = new HashSet();
set.add("Carlos");
console.log(set.has("Carlos")); // Output: true
set.remove("Carlos");
console.log(set.has("Carlos")); // Output: false
set.add("Carlos");
set.add("Carla");
console.log(set.keys()); // Output: ["Carlos", "Carla"]
set.clear();
console.log(set.length()); // Output: 0
