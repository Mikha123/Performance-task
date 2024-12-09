const costumer = ["Elaine 1","Althea 2","Angelo 3","Lito 4","Engelbert 5"];
// HashTable Implementation
class HashTable {
    constructor() {
        this.table = new Array(1);
        this.size = 0;
    }
 
    // private function to convert key to index
    // _ shows that the function is private
    _setKey(key) {
        const lastDigit = key % 1;
        return lastDigit;
    }
 
    // insert value in the hashtable
    insert(value) {
        const index = this._setKey(value);
        this.table[index] = value;
        this.size++;
    }
 
    get(key) {
        const target = this._setKey(key);
        return this.table[target];
    }
 
    search(value) {
        const index = this._setKey(value);
        if (this.table[index] == value)
            console.log("The costumer is found at index : ", index);
        else
            console.log("costumer not found");
    }
 
    delete(key) {
        const index = this._setKey(key);
 
        if (this.table[index]) {
            this.table[index] = [];
            this.size--;
            return true;
        } else {
            return false;
        }
    }
}
 
const hashExample = new HashTable();
// insert
hashExample.insert("Elaine 1");
hashExample.insert("Althea 2");
hashExample.insert("Angelo 3");
hashExample.insert("Lito 4");
hashExample.insert("Engelbert 5");
 
console.log(hashExample.table); // -> shows the hash table
 
// showing table after deletion
console.log(hashExample.table);
