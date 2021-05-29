
function DFS() {
	explored.add(node);
	while (!s.isEmpty()) {
		let t = s.pop();
		console.log(t);
		this.edges[t].filter(n => !explored.has(n)).forEach(n => {
			explored.add(n);
			s.push(n);
		});
	}
}