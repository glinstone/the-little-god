function remarkSingleLineParagraphs() {
  return function (tree) {
    traverse(tree, (node) => {
      if (node.type !== 'paragraph') return;

      const lines = [];
      let current = [];

      for (const child of node.children) {
        if (child.type === 'break') {
          if (current.length) {
            lines.push({ type: 'paragraph', children: [...current] });
            current = [];
          }
        } else {
          current.push(child);
        }
      }

      if (current.length) {
        lines.push({ type: 'paragraph', children: [...current] });
      }

      const parent = node.parent;
      if (!parent) return;

      const index = parent.children.indexOf(node);
      if (index !== -1) {
        parent.children.splice(index, 1, ...lines);
      }
    });
  };
}

function traverse(node, callback) {
  callback(node);
  if (node.children) {
    for (const child of node.children) {
      child.parent = node;
      traverse(child, callback);
    }
  }
}

module.exports = remarkSingleLineParagraphs;
