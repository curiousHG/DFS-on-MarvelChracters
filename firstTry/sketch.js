var graph;
let i = 0;
function setup() {
	graph = new Graph;
	// noCanvas();
	createCanvas(1100, 780)
	// print(table.getRowCount());
	// print(edges.getRowCount());
	for (let r = 0; r < nodes.getRowCount(); r++) {
		for (let c = 0; c < 1; c++) {
			// print(nodes.getString(r,c));
			var n = new Node(nodes.getString(r, c))
			graph.addNode(n)
		}
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

function draw() {
	
	background(0)
	stroke(255);
	strokeWeight(1)
	let j =0;
	var chars = graph.characters;
	for (var char in chars) {
		var c = chars[char]
		if(j==i){
			chartodisplay = c;
		}
		j++;
		ellipse(c.x, c.y, 2, 2);
	}
	// for(var char in chars){
	// 	var c = chars[char]
	// 	for(var edge2 in c.edges){
	// 		var n = c.edges[edge2].outNode

	// 		line(c.x, c.y, n.x, n.y)
	// 		// console.log(c.edges[edge2]);

	// 	}
	// 	break;
	// }
	var c = chartodisplay;
	console.log(c.value,c.connections)
	for (var edge2 in c.edges) {
		var n = c.edges[edge2].outNode;

		line(c.x, c.y, n.x, n.y)
		// console.log(c.edges[edge2]);
	}
	frameRate(3);

	i++;

}