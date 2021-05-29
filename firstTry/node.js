class Node {
    constructor(val) {
        this.value = val;
        this.visit = false;
        this.previous = null;
        this.edges = [];
        this.connections = 0;
        this.x = random(5,width-5);
        this.y = random(5,height-5);
        
    }
    addEdge(edge){
        this.edges.push(edge)
        this.connections++;
    }
    
}