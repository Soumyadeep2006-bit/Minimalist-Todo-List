const input=document.querySelector("#taskinput");
const button=document.querySelector("#add_btn");
const list=document.querySelector("#task_list");

const saveTasks = ()=>{
  const tasks=[];

  document.querySelectorAll("li").forEach(li=>{
  tasks.push({
    text:li.querySelector("span").innerText,
    completed:li.classList.contains('completed')
  });
});
localStorage.setItem("tasks",JSON.stringify(tasks));
}

button.addEventListener("click",()=>{
    if(input.value.trim()==="")return;
    const li=document.createElement("li");
    const span=document.createElement("span");
    
    span.innerText=input.value;
    li.append(span);
    const delete_button=document.createElement("button");
    delete_button.innerText="❌"
    li.append(delete_button);
   // console.dir(li);
    //console.log(input.value);
   // e.preventDefault();
   list.appendChild(li);
   saveTasks();
   input.value=""
   span.addEventListener("click",()=>{
    li.classList.toggle("completed");
    saveTasks();
   });
    delete_button.addEventListener("click",()=>{
        li.remove();
        saveTasks();
    })

})

input.addEventListener("keydown",(e)=>{
if(e.key==="Enter")
    button.click();
})
 
const savedTasks=JSON.parse(localStorage.getItem("tasks"));
if(savedTasks){
    savedTasks.forEach(task=>{
     const li=   document.createElement("li");
     const span=document.createElement("span");
     const delete_button=document.createElement("button");
     delete_button.innerText="❌"
     span.innerText=task.text;
    

    if(task.completed){
        li.classList.add('completed');
    }

    li.append(span);             
    li.append(delete_button);
    list.appendChild(li);        

    span.addEventListener("click",()=>{
        li.classList.toggle("completed");
        saveTasks();
    });

    delete_button.addEventListener("click",()=>{
        li.remove();
        saveTasks();
    });
});
}


