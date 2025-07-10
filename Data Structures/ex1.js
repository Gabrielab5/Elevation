class UniqueArray{
    constructor() {
        this._arr = [];
        this._set = new Set();
    }

    add(item){
        if (typeof item !== "object" && !this._set.has(item)) {
            this._arr.push(item);
            this._set.add(item);
    }
    }

    exists(item){
        return this._set.has(item)
    }

    showAll(){
       console.log(this._arr.join(", "));
    }

    get(index){
        return  index >= 0 && index < this._arr.length ? this._arr[index] : -1
    }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
