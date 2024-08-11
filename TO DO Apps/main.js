const addBtn=document.querySelector(".row button");
const inputBox=document.querySelector("#input-box");
const taskList=document.querySelector("#taskList");



addBtn.addEventListener("click",function(){
  
  let text=inputBox.value;
  if (text==='') {
    alert("You Must Write Something")
  }
  else{
    
    let li=document.createElement("li");
    li.innerHTML=text;
    taskList.appendChild(li);
    
    let span=document.createElement("span");
    span.innerHTML="×"; //\u00d7
    li.appendChild(span);
    
  }
  
inputBox.value="";

saveData();
})


taskList.addEventListener("click",function(e){
  if(e.target.tagName==='LI'){
    
    e.target.classList.toggle('checked');
    
    saveData()
   }
  
  else if (e.target.tagName==='SPAN') {
    e.target.parentElement.remove();
    
    saveData();
  }
  
  
})





function saveData(param) {
  
  localStorage.setItem("data",taskList.innerHTML);
  // Tab to edit
}

function showItem() {
  
  taskList.innerHTML=localStorage.getItem('data')
  // Tab to edit
}


showItem();


