var graph;

let i = 0;
function setup() {
	graph = new Graph;
	createCanvas(970, 600)
	for (let r = 0; r < nodes.getRowCount(); r++) {
		graph.addNode(new Node(nodes.getString(r, 0)))
	}
	for (let r = 0; r < edges.getRowCount(); r++) {
		var startCharNode = graph.characters[edges.getString(r, 0)]
		var toCharNode = graph.characters[edges.getString(r, 1)]
		toCharNode.parent.push(startCharNode);
		var weight = edges.getString(r, 2);
		var newEdge = new Edge(toCharNode, weight);
		startCharNode.addEdge(newEdge)
	}
}
from = "IronMan"
to = "Wanda"
function draw() {

	background(0)
	stroke(255);
	strokeWeight(1)
	let j = 0;
	var chars = graph.characters;
	for (var char in chars) {
		var c = chars[char]
		if (j == i) {
			chartodisplay = c;
		}
		j++;
		ellipse(c.x, c.y, 2, 2);
	}
	console.log(graph.characters)
	// var c = chartodisplay;
	// console.log(c.value, c.connections)
	// for (var edge2 in c.edges) {
	// 	var n = c.edges[edge2].outNode;

	// 	line(c.x, c.y, n.x, n.y)
	// }
	// frameRate(1)
	i++;
	noLoop();
}
function DFS() {
	// Create a Stack and add our initial node in it
	let s = new Stack(this.nodes.length);
	let explored = new Set();
	s.push(node);

	// Mark the first node as explored
	explored.add(node);

	// We'll continue till our Stack gets empty
	while (!s.isEmpty()) {
		let t = s.pop();
		console.log(t);
		this.edges[t].filter(n => !explored.has(n)).forEach(n => {
			explored.add(n);
			s.push(n);
		});
	}
}