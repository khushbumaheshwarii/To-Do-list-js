const Item = document.getElementById('submit');
const addItem = document.querySelector('.items');
const lis = document.querySelector('li');
Item.addEventListener('click',addItems);
addItem.addEventListener('click', removeItem);

function addItems(e){
     e.preventDefault();
     const newItem = document.getElementById('add-item').value;
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(newItem));
     var deleteBtn = document.createElement('i');
     deleteBtn.appendChild(document.createTextNode(''));
     deleteBtn.className = "fa-solid fa-x";
     addItem.appendChild(li);
     li.appendChild(deleteBtn);
     }


function removeItem(e){
     if(e.target.classList.contains('fa-x')){
          if(confirm('Are you Sure?')){
               var li = e.target.parentElement;
               DataTransferItemList.removeChild(li);
          }
     }
}

