class UniqueArray{
    constructor() {
        this._arr = [];
    }

    add(item){
        if (!this.exists(item))
            this._arr.push(item)
    }

    exists(item){
        return this._arr.includes(item)
    }

    showAll(){
       console.log(this._arr.join(", "));
    }

    get(index){
        return this._arr[index] ? this._arr[index] : -1
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
