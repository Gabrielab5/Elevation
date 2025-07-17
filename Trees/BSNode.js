class BSNode {
    constructor(value) {
        this.value = value
        this.leftChild = null
        this.rightChild = null
    }

    insertNode(newVal) {
        if (this.value === undefined) {
            this.value = newVal
            return
        }
        if (newVal <= this.value) {
            if (this.leftChild) {
                this.leftChild.insertNode(newVal);
            } else {
                this.leftChild = new BSNode(newVal);
            }
        } else {
            if (this.rightChild) {
                this.rightChild.insertNode(newVal);
            } else {
                this.rightChild = new BSNode(newVal);
            }
        }
    }

    findNode(val) {
        if (this.value === val)   
            console.log("true")
        
        else if (val < this.value && this.leftChild) 
            return this.leftChild.findNode(val)
        
        else if (val > this.value && this.rightChild) 
            return this.rightChild.findNode(val)

        else 
            console.log("false")
    }

    findCommonParent(nodeA, nodeB){
        
        if(nodeA > nodeB)
        [nodeA, nodeB] = [nodeB,nodeA]

        if (this.value < nodeA && this.value < nodeB) {
           if(this.rightChild) {
                if(this.rightChild.value == nodeA || this.rightChild.value == nodeB) 
                    return this.value
                else
                    return this.rightChild.findCommonParent(nodeA, nodeB) 
           }
        }

        else if (this.value > nodeA && this.value > nodeB) {
            if(this.leftChild) {
                if(this.leftChild.value == nodeA || this.leftChild.value == nodeB) 
                    return this.value
                else
                    return this.leftChild.findCommonParent(nodeA, nodeB) 
           }
        }
        else return this.value
    }
}

//ex1
//const letters = ["H", "E", "S", "G", "L", "Y", "I"];

//ex2
const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]

const bSTree = new BSNode() // Start with an empty root

// Insert all letters
letters.forEach(letter => {
    bSTree.insertNode(letter);
});

//Use the following to test
bSTree.findNode("H") // should print true
bSTree.findNode("G") // should print true
bSTree.findNode("Z") // should print false
bSTree.findNode("F") // should print false
bSTree.findNode("y") // should print false - we didn't make the tree case sensitive!


//ex2

console.log(bSTree.findCommonParent("B", "I")) //should return "H"
console.log(bSTree.findCommonParent("B", "G")) //should return "E"
console.log(bSTree.findCommonParent("B", "L")) //should return "J"
console.log(bSTree.findCommonParent("L", "Y")) //should return "R"
console.log(bSTree.findCommonParent("E", "H")) //should return "J"