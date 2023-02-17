window.addEventListener('load',()=>{
    const form = document.querySelector('.input-form')
    const input = document.querySelector(".input-text")
    const tasks = document.querySelector('.tasks')
    const del_all = document.querySelector('.input-delete')
    const cou = document.querySelector('.count')
    let el3dd = 0
   form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e)
    const coming_task = input.value 
    
   const task = document.createElement('div')
   task.classList.add('task')
   const task_content = document.createElement('div')
   task_content.classList.add('content')
   task.appendChild(task_content)
    const task_input = document.createElement('input')
   task_input.classList.add('task-text')
   task_input.type ='text'
   //task_input.setAttribute('readonly', 'readonly');
   task_input.value=input.value
   task_content.appendChild(task_input)
   const task_options = document.createElement('div')
   task_options.classList.add('options')
   const edit = document.createElement('button')
   const del = document.createElement('button')
   
   edit.classList.add('edit');
    edit.innerText = 'Edit';
    del.classList.add('delete');
    del.innerText = 'Delete';
    
    
    task_options.appendChild(edit)
    task_options.appendChild(del)
    
    task_content.appendChild(task_options)
    tasks.appendChild(task)
    input.value=''
    edit.addEventListener('click', (e) => {
        if (edit.innerText.toLowerCase() == "edit") {
            edit.innerText = "Save";
            
            edit.focus();
            task_input.value=input.value
           // edit.removeAttribute("readonly");
            
        } else {
            edit.innerText = "Edit";
            edit.setAttribute("readonly", "readonly");
        }
    })
    del.addEventListener('click', (e) => {
        tasks.removeChild(task);
    });
   
    
    del_all.addEventListener('click' , (e) => {
        
        while(tasks.lastElementChild){
            
           tasks.lastElementChild.remove()
  }
  
})

    
        





   


   })
   cou.addEventListener('click',(e)=>{

     const num = tasks.childElementCount
     const total = document.createElement('h3')
     total.classList.add('h3')
     total.innerText=`You have ${num-el3dd}  tasks to be finished`
     tasks.appendChild(total)
     el3dd+=1

   })

})