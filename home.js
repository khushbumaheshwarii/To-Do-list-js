const Item = document.getElementById('submit');
const addItem = document.getElementById('items');
Item.addEventListener('click',addItem);

function addItem(e){
     e.preventDefault();

     const newItem = document.getElementById('add-item').value;

     const li = document.createElement('li');

     li.appendChild(document.createTextNode(newItem));

     var deleteBtn = document.createElement('button');

     deleteBtn.className = "fa-solid fa-x";

     deleteBtn.appendChild(document.createTextNode());
     addItem.appendChild(li);
}

// function removeItem(e){
//      if(e.target.classList.contains('delete')){
//           if(confirm('Are you Sure?')){
//                var li = e.target.parentElement;
//                DataTransferItemList.removeChild(li);
//           }
//      }
// }