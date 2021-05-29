function bfs() {
    
    if (s.length != 0) {
        let n = s.pop();
        if (n.value == to.value) {
            solve = true;
            current = n;
            console.log("Done");
            return;
        }
        if (n.visit == false) {
            n.visit = true;
            for (let i = 0; i < n.edges.length; i++) {
                let e = n.edges[i].outNode;
                if (e.visit ==false){
                    e.previous = n;
                    s.push(e);
                    current = e;
                    console.log(n.value,e.value)
                }
            }
        }
    }
}