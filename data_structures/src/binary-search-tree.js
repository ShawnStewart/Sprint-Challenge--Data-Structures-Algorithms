class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    //=== Recursive appraoch ===
    // cb(this.value);
    // if (this.left) {
    //   this.left.depthFirstForEach(cb);
    // }
    // if (this.right) {
    //   this.right.depthFirstForEach(cb);
    // }

    //=== Iterative approach ===
    let stack = [this];
    let node;
    while (stack.length) {
      console.log(stack);
      node = stack.pop();
      cb(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }

  breadthFirstForEach(cb) {
    let queue = [this];
    let node;
    while (queue.length > 0) {
      node = queue.pop();
      cb(node.value);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;