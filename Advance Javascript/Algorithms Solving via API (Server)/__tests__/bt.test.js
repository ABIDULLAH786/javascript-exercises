const {Node,binaryTree} = require('../BinaryTree.js');

describe('bstNode', () => {

    test('should correctly create a node', () => {
        const node = new Node(36);
        expect(node.data).toEqual(36);
        expect(node.left).toEqual(null);
        expect(node.right).toEqual(null);
    });
});

describe('binaryTree', () => {

    test('should initialize a binary tree with a root of null', () => {
        let bt = new binaryTree();
        expect(bt.root).toEqual(null);
    });

    test('it should create a new root node', () => {
        let bt = new binaryTree();
        let node = new Node(36);

        bt.addRoot(node.data);
        expect(bt.root).toEqual(node);
    });

});