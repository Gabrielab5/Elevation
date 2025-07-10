class UniqueArray{
    constructor() {
        this._arr = [];
    }

    add(item){
        if (!this.exists(item))
            this._arr.push(item)
    }

    exists(item) {
        return this._arr.some(existing => {
            if (item === existing) return true;
            if (typeof item !== typeof existing || item === null || existing === null) { return false; }
            if (Array.isArray(item) && Array.isArray(existing)) {
                if (item.length !== existing.length) return false;
                for (let i = 0; i < item.length; i++) 
                    if (!this._deepEqual(item[i], existing[i])) return false;
                return true;
          }

            if (typeof item === 'object') {
                const keysA = Object.keys(item);
                const keysB = Object.keys(existing);
                if (keysA.length !== keysB.length) return false;

                for (let key of keysA) {
                if (!existing.hasOwnProperty(key)) return false;
                if (!this._deepEqual(item[key], existing[key])) return false;
                }
                return true;
           }
            return false;
    });
  }

    _deepEqual(a, b) {
        return this.exists(a, [b]);
    }


    showAll(){
       this._arr.forEach(item => console.log(item))
    }

    get(index){
        return this._arr[index] !== undefined ? this._arr[index] : -1
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
