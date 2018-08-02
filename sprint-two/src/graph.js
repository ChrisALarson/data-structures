

// Instantiate a new graph
var Graph = function() {
  let graph = Object.create(Graph.prototype);
  graph.nodes = {};
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.nodes.hasOwnProperty(node)) {
    this.nodes[node] = { edges: {} };
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes.hasOwnProperty(node)) {
    for (let edge in this.nodes[node].edges) {
      this.removeEdge(edge, node);
    }
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].edges.hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = true;
  this.nodes[toNode].edges[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


