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

    /* 1.Add new Node into the Tree */
    push(data) {
        if (!data) console.error("Data not defined");

        if (!this.root) {
            this.root = new Node(data);
        }
        let node = this.root;
        function insertNode(node) {
            if (node.data > data) {
                !node.left ? node.left = new Node(data) : insertNode(node.left);
            }
            else if (node.data < data) {
                !node.right ? node.right = new Node(data) : insertNode(node.right);
            }
            else {
                return null;
            }
        }
        insertNode(node);
    }

    /* 2.find the Minimum value present in the Tree */
    findMin(node = this.root) {
        while (node.left) {
            node = node.left;
        }
        return `Minimum value = ${node.data}`
    }

    /* 3.find the Maximum value present in the Tree */
    findMax(node = this.root) {
        while (node.right) {
            node = node.right;
        }
        return `Maximum value = ${node.data}`
    }

    /* 4.Search a value from the Tree */
    search(data) {
        if (!this.root) return null;
        let node = this.root;
        while (node) {
            if (node.data === data) return node;
            if (node.data > data) node = node.left;
            else node = node.right;
        }
        return -1;
    }

    /* 6.find the Parent Node of a particular node */
    findParent(data) {
        if (!data || this.root.data == data || this.search(data) === -1) return null;
        let parentNode;
        let node = this.root;
        while (node.data !== data) {
            parentNode = node;
            if (node.data > data) node = node.left;
            else node = node.right;
        }
        return parentNode.data
    }

    /* 7.find the Children node of a particular node */
    findChildren(data) {
        if (!data || this.search(data) === -1) return null;
        else {
            let node = this.search(data);
            if (node.left && node.right) return `Left ${node.left.data} and Right ${node.right.data}`;
            else if (!node.left) return `Left Null and Right ${node.right.data}`;
            else if (!node.right) return `Left ${node.left.data} and Right Null`;
            else return "Leaf Node";
        }
    }

    /* 8.height of the Tree */
    height(node = this.root) {
        if (!node) return -1;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    /* 9.check balance of binary tree */
    isBalance(node = this.root) {
        return getHeight(node) !== -1;

        function getHeight(node) {
            if (!node) return 0;
            let left = getHeight(node.left);
            let right = getHeight(node.right);
            if (left === -1 || right === -1 || Math.abs(left - right)) return -1;
            return Math.max(left, right) + 1;
        }
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

    /* 13.Level Order traversal or Breath Order traversal*/
    levelOrder() {
        if (!this.root) return [];
        let queue = [];
        let result = [];
        if (this.root) {
            queue.push(this.root);
        }
        while (queue.length > 0) {
            let temp = [];
            let len = queue.length;
            for (let i = 0; i < len; i++) {
                let node = queue.shift();
                temp.push(node.data);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            result.push(temp);
        }
        return result;
    }

    /* 14.Vertical Order Treversal of binary tree */
    verticalOrder() {
        if (!this.root) return null;

        let queue = [this.root];
        let index = 0;
        let cord = [{ x: 0, y: 0, node: this.root }];
        let result = [];

        while (queue.length > 0) {
            let len = queue.length;
            for (let i = 0; i < len; i++) {
                let node = queue.shift();
                if (node.left) {
                    queue.push(node.left);
                    cord.push({
                        x: cord[index].x - 1,
                        y: cord[index].y + 1,
                        node: node.left
                    });
                }
                if (node.right) {
                    queue.push(node.right);
                    cord.push({
                        x: cord[index].x + 1,
                        y: cord[index].y + 1,
                        node: node.right
                    });
                }
                index++;
            }
        }
        cord.sort((a, b) => a.x === b.x ? (a.y === b.y ? a.node.data - b.node.data : a.y - b.y) : a.x - b.x);
        for (let i = 0; i < cord.length; i++) {
            if (i === 0) {
                result.push([cord[i].node.data]);
            } else {
                if (cord[i].x === cord[i - 1].x) {
                    result[result.length - 1].push(cord[i].node.data);
                } else {
                    result.push([cord[i].node.data]);
                }
            }
        }
        return result;
    }

    /* 16.Boundary Traversal */
    boundaryTraversal(node = this.root) {
        if (!this.root) return [];
        let temp = [];
        //get the Root of the Tree
        temp.push(this.root.data);

        //get the Left sub-tree
        function getLeftTree(node) {
            if (node.left) {
                temp.push(node.data);
                getLeftTree(node.left);
            }
            else if (node.right) {
                temp.push(node.data);
                getLeftTree(node.right);
            }
        }
        getLeftTree(this.root.left);

        //get the Leaf Nodes of the Tree
        function getLeafNodes(node) {
            if (!node.left && !node.right) temp.push(node.data);
            if (node.left) getLeafNodes(node.left);
            if (node.right) getLeafNodes(node.right);
        }
        getLeafNodes(this.root)

        //get the Right sub-tree
        function getRightTree(node) {
            if (node.right) {
                getRightTree(node.right);
                temp.push(node.data);
            }
            else if (node.left) {
                getLeafNodes(node.left);
                temp.push(node.data)
            }
        }
        getRightTree(this.root.right);
        return temp;
    }

    /* 17. Zic-Zac traversal */
    ziczacTraversal() {
        if (!this.root) return [];
        let queue = [];
        let result = [];
        if (this.root) queue.push(this.root);
        while (queue.length > 0) {
            let len = queue.length;
            let temp = [];
            for (let i = 0; i < len; i++) {
                let node = queue.shift();
                temp.push(node.data);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            result.push(temp);
        }
        for (let i = 0; i < result.length; i++) {
            if (i % 2 !== 0) {
                result[i].reverse();
            }
        }
        return result;
    }

    /* 18.left view of a binary tree */
    leftView() {
        if (!this.root) return [];
        let queue = [];
        let result = [];
        if (this.root) queue.push(this.root);
        while (queue.length > 0) {
            let temp = []
            let len = queue.length;
            for (let i = 1; i <= len; i++) {
                let node = queue.shift();
                if (i === 1) temp.push(node.data);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            result.push(temp);
        }
        return result;
    }

    /* 19.right view of a binary tree */
    rightView() {
        if (!this.root) return null;
        let queue = [];
        let result = [];
        if (this.root) queue.push(this.root);
        while (queue.length > 0) {
            let temp = [];
            let len = queue.length;
            for (let i = 1; i <= len; i++) {
                let node = queue.shift();
                if (i === len) temp.push(node.data);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            result.push(temp);
        }
        return result;
    }

    /* 20.Top view of binary tree */
    topView() {
        let result = this.verticalOrder();
        let temp = [];
        console.log(result)
        for (let i = 0; i < result.length; i++) {
            temp.push(result[i][0])
        }
        return temp;
    }

    /* 21.Bottom view of binary tree */
    bottomView() {
        let result = this.verticalOrder();
        let temp = [];
        console.log(result)
        for (let i = 0; i < result.length; i++) {
            temp.push(result[i][result[i].length - 1])
        }
        return temp;
    }

    /* 22.Serialize of Binary Tree */
    serialize(node = this.root) {
        let str = '';
        if (!node) {
            str = str + 'null,';
        } else {
            str += node.data + ',';
            str += this.serialize(node.left);
            str += this.serialize(node.right);
        }
        return str;
    }

    /* 23.Deserialize of Binary Tree */
    deserialize() {
        let str = this.serialize();
        let arr = str.split(",");
        console.log(arr);

        function recur(arr) {
            if (arr[0] === 'null') {
                arr.shift();
                return null;
            } else {
                let data = arr.shift();
                let node = new Node(parseInt(data));
                if (node.left) recur(arr);
                if (node.right) recur(arr);
                return node;
            }
        }
        return recur(arr)
    }

    /* 24.check binary tree is BST */
    checkBST() {
        let preorder = this.preOrder();
        let index;
        for (let i = 0; i < preorder.length; i++) {
            if (preorder[0] < preorder[i]) {
                index = i;
                break;
            }
        }
        let newArr = preorder.splice(index);
        for (let i = 1; i < newArr.length; i++) {
            if (newArr[0] > newArr[i]) return false;
        }
        return true;
    }

    /* 25.construct Tree from sorted array or inorder traversal */
    createTree1() {
        let arr = this.inOrder();
        let node = this.root
        let start = 0, end = arr.length;
        while (start > end) {
            let mid = Math.floor((start + end) / 2);
            node = new Node(arr[mid]);
            if (node.left) {
                end = mid - 1;
            }
            if (node.right) {
                start = mid + 1
            }
        }
        return node;
    }

    /* 26.construct Tree from unsorted array or preorder traversal */
    createTree2(node = this.root) {
        let arr = this.preOrder();
        let leftArr = [];
        let rightArr = [];

        function recur(arr) {
            let pivit = arr[0];
            if (arr.length) return node;
            for (let i = 0; i < arr.length; i++) {
                if (pivit > arr[i]) leftArr.push(arr[i]);
                if (pivit < arr[i]) rightArr.push(arr[i]);
            }
            if ((leftArr.length > 0) && (rightArr.length > 0)) {
                return [recur(leftArr), recur(rightArr)]
            }
            else if (leftArr.length > 0) {
                return [recur(leftArr)]
            }
            else if (rightArr.length > 0) {
                return [recur(rightArr)]
            }
        }
        return recur(arr);
    }

    /* 27.Diameter of Binary Tree */
    diameter(node = this.root) {
        function recur(node) {
            if (!node) return [0, 0];
            let [leftDiameter, leftHeight] = recur(node.left);
            let [rightDiameter, rightHeight] = recur(node.right);

            return [
                Math.max(leftDiameter, rightDiameter, leftHeight + rightHeight),
                Math.max(leftHeight + rightHeight) + 1
            ]
        }
        return recur(node)[0];
    }

    /* 28.Invert Binary Tree */
    invertTree(node = this.root) {
        // this is for leafs in the tree
        if (!node) return null;

        //traverse to the left Tree
        this.invertTree(node.left);
        //traverse to the left Tree
        this.invertTree(node.right);

        // for leafs , no need to swap as both the left and right child going to be null, just return the root node to its parent 
        if (!node.left && !node.right) return node;

        // if any of the left/right child has value swap its value with the other child
        if (node.left || node.right) {
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
        }
        return node;
    }

    /* 29. Delete Tree Node */
    deleteNode(data) {
        function remove(node) {
            if (!node) return null;
            else {
                if (node.data === data) {
                    //node has no child..
                    if (!node.left && !node.right) return null;

                    //node has only one child..
                    if (!node.left) return node.right;
                    if (!node.right) return node.left;

                    //node has 2 children..
                    let tempNode = node.right;
                    while (tempNode.left) {
                        tempNode = tempNode.left;
                    }
                    node.data = tempNode.data;
                    node.right = remove(node.right, tempNode.data);
                    return node;
                }
                else if (node.data > data) {
                    node.left = remove(node.left, data);
                    return node;
                }
                else {
                    node.right = remove(node.right, data);
                    return node;
                }
            }
        }
        this.root = remove(this.root, data)
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
    search2(searchData) {
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
        if (!data || this.search2(data) === false) return null;
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

        if (!child || this.search2(child) === false) return null;
        var newRoot = null;
        let node = this.search2(child)

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
        let node = this.search2(data);
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
        let node = this.search2(data);
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
        if (!data || this.search2(data) === false) return null;
        else {
            let node = this.search2(data);
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
        if (!data || this.search2(data) === false) return null;
        else {
            let node = this.search2(data);
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
        let node = this.search2(data);
        if (node)
            node.left = new Node(newNodeData);
    }

    /**
     * This function will add new node to the right of the searched node
     * @param {Number} data 
     * @param {Number} newNodeData 
     */
    addToRight(data, newNodeData) {
        let node = this.search2(data);
        if (node)
            node.right = new Node(newNodeData);
    }
}

const tree = new binaryTree();
// tree.push(50);
// tree.push(18);
// tree.push(10);
// tree.push(21);
// tree.push(7);
// tree.push(13);
// tree.push(3);
// tree.push(11);
// tree.push(12);
// tree.push(62);
// tree.push(77);
// tree.push(67);
// tree.push(87);
// console.log(tree.invertTree())


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
        if (tree.search2(parseInt(nodeData[1]))) {

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