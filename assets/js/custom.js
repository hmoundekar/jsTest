const names = ['John', 'Paul', 'George', 'Ringo', 'John', 'Chandan',"Pawan","Pavan",'George', 'Ringo', 'John', 'Chandan',"Pawan","Pavan","Shubham","Harshal"];
var listing=document.getElementById('allItems')
var dupElem=document.getElementById('items')
function removeDups(names) {
  let unique = {};
  var listItem;
  var node;
  names.forEach(function(i) {
    listItem=document.createElement("li");
    // listItem=document.createElement("span");
    node = document.createTextNode(i+", ");
    listItem.appendChild(node);
    listing.appendChild(listItem);
    if(!unique[i]) {
      unique[i] = true;
      listItem=document.createElement("li");
    //   listItem=document.createElement("span");
      node = document.createTextNode(i+", ");
      listItem.appendChild(node);
      dupElem.appendChild(listItem);
    }
  });

  return Object.keys(unique);
}

removeDups(names);