class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  //Converts string into integer
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = total + key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

console.log("Set key and value");
table.set("name", "Onkar");
table.set("age", 26);
console.log("\nDisplay all");
table.display();

console.log("\nGet value of key");
console.log(table.get("name"));

console.log("\nRemove key");
table.remove("name");
console.log("\nDisplay all");
table.display();
