const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function addtask(){
    if(inputBox.value===''){
        alert("you must write something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function() {
            li.remove();
        };
        listContainer.appendChild(li);
        li.appendChild(deleteButton);
    }
    inputBox.value="";
    
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        
    }
},false);


