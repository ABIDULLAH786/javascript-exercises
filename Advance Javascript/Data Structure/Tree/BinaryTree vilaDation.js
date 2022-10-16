class Node {
    constructor(data, left = null, right = null) {
        this.left = left;
        this.data = data;
        this.right = right;
    }
}

class binaryTree {
    constructor() {
        this.root = null
    }

    /**
     * This function will take the number and will add the it to binary three as a root.
     * @param {NUMBER} data 
     */
    addRoot(data) {
        if (!data) console.error("Data not defined");
        if (!this.root) this.root = new Node(data);
    }

    /**
     * This function check the the data containing node is exist in tree or not
     * @param {String} searchData 
     * @returns returns Node if found otherwise Flase
     */
    search(searchData) {
        if (!this.root) return null;
        let node = []
        node.push(this.root);
        let temp = null, keyNode = null;
        while (node.length > 0) {
            temp = node[0];
            // console.log(temp.data)

            node.shift();

            if (temp.data == searchData)
                keyNode = temp;

            if (temp.left != null)
                node.push(temp.left);

            if (temp.right != null)
                node.push(temp.right);
        }
        if (keyNode != null) {
            return keyNode;
        } else
            return false
    }

    /**
     * This function check the the data containing node has a parent or not
     * @param {String} data 
     * @returns Either Node or Flase (in case when we are searching for root node)
     */
    hasParent(data) {
        if (!data || this.search(data) === false) return null;
        let parentNode;
        let node = this.root;
        while (node.data !== data) {
            parentNode = node;
            if (node.data > data) node = node.left;
            else node = node.right;
        }
        if (parentNode)
            return parentNode.data

        // in case the parent not found
        return false;
    }

    /**
     * This Functions taks two string one is child and other is parent (x = cild_of_Y, y = parent_of_X)
     * @param {*} child 
     * @param {*} parent 
     * @returns retunrs parent node for the child
     */
    addAsParent(child, parent) {

        if (!child || this.search(child) === false) return null;
        var newRoot = null;
        let node = this.search(child)

        if (node) {
            newRoot = this.root;
            this.root = new Node(parent);
            this.root.left = newRoot;
        }
        return newRoot;
    }

    /**
     * This function will check that the data containing node 
     * has a both left and right child or not.
     * 
     * @param {Number} data 
     * @returns boolean
     */
    hasBothChilds(data) {
        let node = this.search(data);
        if (node.left && node.right)
            return true;

        return false
    }

    /**
     * This function will check that the data containing node 
     * has a no (left and right) child if yes it will return true else false.
     * 
     * @param {Number} data 
     * @returns boolean
     */
    hasNoChilds(data) {
        let node = this.search(data);
        if (!node.left && !node.right)
            return true;

        return false
    }
    /**
     * This function will check that the data containing node has a left child or not
     * @param {Number} data 
     * @returns boolean
     */
    hasLeftChild(data) {
        if (!data || this.search(data) === false) return null;
        else {
            let node = this.search(data);
            if (node.left)
                return true;

            return false
        }
    }

    /**
     * This function will check that the data containing node has a right child or not
     * @param {Number} data 
     * @returns boolean
     */
    hasRightChild(data) {
        if (!data || this.search(data) === false) return null;
        else {
            let node = this.search(data);
            if (node.right)
                return true;

            return false
        }
    }

    /**
     * This function will add new node to the left of the searched node
     * @param {Number} data 
     * @param {Number} newNodeData 
     */
    addToLeft(data, newNodeData) {
        let node = this.search(data);
        if (node)
            node.left = new Node(newNodeData);
    }

    /**
     * This function will add new node to the right of the searched node
     * @param {Number} data 
     * @param {Number} newNodeData 
     */
    addToRight(data, newNodeData) {
        let node = this.search(data);
        if (node)
            node.right = new Node(newNodeData);
    }

    /* 10.Inorder traversal */
    inOrder(node = this.root) {
        if (!this.root) return null;
        let temp = [];
        function recur(node) {
            node.left && recur(node.left);
            temp.push(node.data);
            node.right && recur(node.right);
            return temp;
        }
        return recur(node);
    }

    /* 11.Preorder traversal */
    preOrder(node = this.root) {
        if (!this.root) return null;
        let temp = [];
        function recur(node) {
            temp.push(node.data);
            node.left && recur(node.left);
            node.right && recur(node.right);
            return temp;
        }
        return recur(node);
    }

    /* 12.PostOrder traversal */
    postOrder(node = this.root) {
        if (!this.root) return null;
        let temp = [];
        function recur(node) {
            node.left && recur(node.left);
            node.right && recur(node.right);
            temp.push(node.data);
            return temp;
        }
        return recur(node);
    }

}
// Creating the instance of BinaryTree
var tree = new binaryTree();

/**
 * This function contains the main logic of how the new node will be added.
 * Either as a child (left or right child) or as parent
 * @param {String []} str 
 * @param {Number} si Shows Start Index of Array
 * @param {Number} ei Shows End Index of Array
 */
function treeFromString(str, si, ei) {
    // Base case
    if (si > ei)
        return false;

    console.log("String Array:  " + str)

    for (let i = si; i <= ei; i++) {
        const nodeData = str[i].substring(1, str[i].length - 1).split(",")

        if (!tree.root) {
            tree.addRoot(parseInt(nodeData[1]))
        }

        /**
         * This if check if the value y of order pair (x,y) {which is on parent position}
         * that it exist in a tree or not if not found it will not excute and moves to the else part of if-else chain
         * If the parent found in tree then the it will go inside if block
         * and  will check that it has one child or both or nither  
         */
        if (tree.search(parseInt(nodeData[1]))) {
            
            // THis if will chek that the parent has both leaf or not
            if (tree.hasBothChilds(parseInt(nodeData[1]))) {
                console.log(`for order pair (${nodeData[0]},${nodeData[1]}), The parent ${nodeData[1]} Already has Both children nodes`)
                return false;
            }
            // this will check that the left node of the parent is free or not
            // if it is free then the new child will be store on left, else it will store on right
            else if (!tree.hasLeftChild(parseInt(nodeData[1]))) {

                if (nodeData[0] == 50 && nodeData[1] == 10)
                    console.log(`${nodeData[0]} wnat to becom child of ${nodeData[1]} `)
                tree.addToLeft(parseInt(nodeData[1]), parseInt(nodeData[0]))
            }
            // this will check that the both child/leaf of parent is free or not
            else if (!tree.hasLeftChild(parseInt(nodeData[1]) && !tree.hasRightChild(parseInt(nodeData[1])))) {
                
                tree.addToRight(parseInt(nodeData[1]), parseInt(nodeData[0]))
            }
        }
        /**
         * If the above if is not excute means if the data which want to be parent is not exists in tree.
         * The it will be sotred on the requested place if that places is avilable
         */
        else {
            if (tree.hasParent(parseInt(nodeData[0]))) {
                console.log(`The node ${parseInt(nodeData[0])} already has a parent`)
                return false
            }
            else if (!tree.hasNoChilds(parseInt(nodeData[1]))) {
                console.log(`The node ${parseInt(nodeData[1])} already has two childs, (means its both leaf are filled).`)
                console.log(`And you are adding  ${parseInt(nodeData[0])} as a 3rd leaf`);
                return false
            }
            else {
                tree.addAsParent(parseInt(nodeData[0]), parseInt(nodeData[1]))
            }

        }
    }

    return true;

}
// This is the String that we want to construct binarytree form it
let str = ["(1,2)", "(2,4)", "(7,2)", "(10,4)", "(11,10)", "(20,10)", "(50,20)"];
// let str = ["(1,2)", "(7,2)", "(3,7)","(5,7)"];

// Here we are calling the function where we are implementing all Requirment of question
let isValid = treeFromString(str, 0, str.length - 1);
if (isValid) {
    console.log("The Tree is Valid Binary Tree")
    console.log("==========( Tree Data )=============")
    console.log(tree.inOrder())

    console.log()
    console.log("==========(Structure)=============")
    console.log(tree.root)
} else {
    console.log("The Tree is In Valid Binary Tree")
}


module.exports = {Node, binaryTree}





