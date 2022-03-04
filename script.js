
function prepareNodes(shuffleOrSortAction) {
  var list = document.getElementById("cardsList");
  var nodes = list.children
  nodes = Array.prototype.slice.call(nodes);
  if (shuffleOrSortAction === 'sort') {
    nodes.sort((x, y) => {
      return x.innerHTML - y.innerHTML;
    });
  }
  for (var i = 0; i < nodes.length; i++) {
    shuffleOrSortAction === 'sort' ? list.appendChild(nodes[i])
      : list.appendChild(nodes[Math.floor(Math.random() * nodes.length)]);
  }
}
