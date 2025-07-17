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
    
    findMaxNode() {
        if (this.rightChild) 
            return this.rightChild.findMaxNode()
        else 
            return this
    }

    removeNode(value, parent = null) {
        if (value < this.value) {
            if (this.leftChild)  
                this.leftChild.removeNode(value, this)
            return
        } 
        
        if (value > this.value) {
            if (this.rightChild)  
                this.rightChild.removeNode(value, this)
            return
        }

        // node found: 3 scenerios:

        //Node has two children 
        if (this.leftChild && this.rightChild) {
            const predecessor = this.leftChild.findMaxNode();
            this.value = predecessor.value;
            this.leftChild.removeNode(predecessor.value, this);
        } 

        //Node has 0 or 1 child (and is the root)
        else if (parent === null) {
            if (this.leftChild) {
                this.value = this.leftChild.value;
                this.rightChild = this.leftChild.rightChild;
                this.leftChild = this.leftChild.leftChild;
            } else if (this.rightChild) {
                this.value = this.rightChild.value;
                this.leftChild = this.rightChild.leftChild;
                this.rightChild = this.rightChild.rightChild;
            } else {
                //no tree left
            }
        }

        //Node has 0 or 1 child (not the root)
        else if (parent.leftChild === this) {
            parent.leftChild = this.leftChild || this.rightChild;
        } 
        else if (parent.rightChild === this) {
            parent.rightChild = this.leftChild || this.rightChild;
        }
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

//ex3

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
console.log(JSON.stringify(nodeWithOneChild, null, 2));

let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 
console.log(JSON.stringify(nodeWithOneChild, null, 2));