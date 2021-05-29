class Graph {
    constructor() {
        this.characters = {};
    }
    addNode(node){
        var charName = node.value;
        this.characters[charName] = node;
    }
}