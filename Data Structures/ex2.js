class UniqueArray{
    constructor() {
        this._arr = [];
        this._map = new Map();
    }

    add(item){
        const key = this._hash(item);
        if (!this._map.has(key)) {
            this._map.set(key, this._arr.length);
            this._arr.push(item);
        }
    }

    _hash(value) {
        if (value === null) return "null";
        if (typeof value !== "object") return `${typeof value}:${value}`;
        const type = Array.isArray(value) ? "array" : "object";
        const keys = Object.keys(value).sort(); 
        let content = "";

        for (let key of keys) {
            const valHash = this._hash(value[key]); 
            content += `${key}:${valHash}|`;
        }
        return `${type}:{${content}}`;
    }

    exists(item) {
        return this._map.has(this._hash(item));
    }
  

    showAll(){
       this._arr.forEach(item => console.log(item))
    }

    get(index){
        return index >= 0 && index < this._arr.length ? this._arr[index] : -1
    }

}

const unique = new UniqueArray();

unique.add("hello");
unique.add({ x: 1, y: 2 });
unique.add({ x: 1, y: 2 }); 
unique.add([1, 2, 3]);
unique.add([1, 2, 3]);      
unique.add([1, 2, 4]);      

unique.showAll();
