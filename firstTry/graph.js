class Node {
    constructor(val) {
        this.value = val;
        this.edges = [];
        this.searched = false;
        this.parent = [];
        this.connections = 0;
        this.x = random(5,width-5);
        this.y = random(5,height-5);
    }
    addEdge(edge){
        this.edges.push(edge)
        this.connections++;
    }
}
class Edge{
    constructor(outNode,weight){
        this.outNode = outNode;
        this.weight = weight;
    }
}
class Graph {
    constructor() {
        // this.nodes = [];
        this.characters = {};
    }
    addNode(node){
        // this.nodes.push(node);
        var charName = node.value;
        this.characters[charName] = node;
    }
}