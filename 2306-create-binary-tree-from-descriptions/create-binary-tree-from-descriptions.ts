/**
 * Definition for a binary tree node.
 * class TreeNode {
 * val: number
 * left: TreeNode | null
 * right: TreeNode | null
 * constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 * }
 */

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const childMap = new Map<number, [number, number]>();
    const childNodes = new Set<number>();

    for (const [parent, child, isLeft] of descriptions) {
        if (!childMap.has(parent)) {
            childMap.set(parent, [-1, -1]);
        }
        
        if (isLeft === 1) {
            childMap.get(parent)![0] = child;
        } else {
            childMap.get(parent)![1] = child;
        }
        
        childNodes.add(child);
    }

    let headNode: number = -1;
    for (const parent of childMap.keys()) {
        if (!childNodes.has(parent)) {
            headNode = parent;
            break;
        }
    }

    if (headNode === -1) return null;

    const constructTree = (currentNodeVal: number): TreeNode | null => {
        const root = new TreeNode(currentNodeVal);
        
        if (childMap.has(currentNodeVal)) {
            const [leftNode, rightNode] = childMap.get(currentNodeVal)!;

            if (leftNode !== -1) {
                root.left = constructTree(leftNode);
            }
            if (rightNode !== -1) {
                root.right = constructTree(rightNode);
            }
        }
        
        return root;
    };

    return constructTree(headNode);
}