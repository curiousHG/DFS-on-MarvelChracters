var graph;
var solve = false;
var current;
let s = [];
var d;

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
		var weight = edges.getString(r, 2);
		startCharNode.addEdge(new Edge(toCharNode, weight))
	}

	from = graph.characters[nodes.getString(0, 0)];
	to = graph.characters[nodes.getString(9, 0)];

	s.push(from);
	bfs();
}

function draw() {
	// noLoop();
	background(0)
	stroke(255);
	strokeWeight(1)
	fill(255, 255, 255);
	let j = 0;
	var chars = graph.characters;
	for (var char in chars) {
		var c = chars[char]
		if (j == i) {
			chartodisplay = c;
		}
		j++;
		text(c.value,c.x,c.y)
	}

	i++;
	// for(i in graph.characters){
	// 	for (j in graph.characters[i].edges){
	// 		var a = graph.characters[i];
	// 		var b = graph.characters[i].edges[j].outNode;
	// 		line(a.x, a.y, b.x, b.y)
	// 	}
	// }
	
	if(solve==false){
		bfs()
	}
	if(solve==false && s.length==0){
		console.log("No Solution")

	}
	noFill();
	beginShape();
	d = current;
	let arr = [d.value]
	while (d.previous != null) {
		vertex(d.x, d.y);
		d = d.previous;
		arr.push(d.value);
	}
	// console.log(arr)
	vertex(d.x, d.y)
	endShape();
	frameRate(1)
	// noLoop();
}
