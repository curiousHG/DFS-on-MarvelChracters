// var data = $.get('../nodes.csv');
// console.log(data)
// console.log(this.responseText.toString())
// async function getData() {
//     const response = await fetch('../nodes.csv');
//     const data = await response.text()
//     console.log(data)
//   }
// getData()
var nodes;
var edges;
async function preload() {
    nodes = await loadTable('../nodes.csv', 'csv', 'header');
    edges = await loadTable('../edges.csv', 'csv', 'header');
}
