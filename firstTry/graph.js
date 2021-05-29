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