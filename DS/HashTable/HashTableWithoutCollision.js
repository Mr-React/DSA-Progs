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

  //Time Complexity is linear => Big-O(n)
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  //Time Complexity is linear => Big-O(n)
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  //Time Complexity is linear => Big-O(n)
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
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
table.set("name", "John");
table.set("age", 26);
table.set("mane", "Doe");
console.log("\nDisplay all");
table.display();

console.log("\nGet value of key 'name'");
console.log(table.get("name"));

console.log("Update value of key 'name'");
table.set("name", "Joee");
table.display();

console.log("\nRemove key 'name'");
table.remove("name");
console.log("\nDisplay all");
table.display();
