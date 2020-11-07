// ADD NEW ITEM TO END OF LIST


// Get the the parent list node
let parentList = document.getElementById("one").parentNode;

// Create the new node and add text content
let creamNode = document.createElement("li");
creamNode.textContent='Cream';

// Get the last list item and insert the new node as nextSibling to the last list item
let lastListNode = document.getElementById("four");
parentList.insertBefore(creamNode, lastListNode.nextSibling);



// ADD NEW ITEM START OF LIST

// Create the new node  and add text content
let kaleNode = document.createElement("li");
kaleNode.textContent='Kale';
// Get the first node by ID and insert new node before list item
let firstListNode = document.getElementById("one");
parentList.insertBefore(kaleNode, firstListNode);


// ADD A CLASS OF COOL TO ALL LIST ITEMS

//count number of items in list
var count =0;
//get the children in parent node
var children = parentList.children;
//loop to add class cool to each child of parentList and to increment count
for (var i = 0; i < children.length; i++) {
  var listChild = children[i];
  //console.log(children[i]); 
  children[i].classList.add("cool");
  count ++;
  //console.log(count);
}




// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
//create new span node with textContent to be the count
var span = document.createElement("span");
  var textnode = document.createTextNode(count);
  span.appendChild(textnode);
  //add the span node as a child to h2
  document.querySelector("h2").appendChild(span);

