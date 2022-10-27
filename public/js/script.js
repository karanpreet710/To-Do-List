let btnAdd = $('#btnAdd')
let inpNewTask = $('#inpNewTask')

function toggleInputButton() {
  btnAdd.prop('disabled', inpNewTask.val() == '')
}

function deleteTask(ev){
  const btn = ev.target
  const task= btn.parentElement.previousElementSibling.innerText
  $.post('/to-do-list/remove',{task},(data)=>{
    const ulTasks = $('#ulTasks')
    ulTasks.empty()
    for(let d of data){
      ulTasks.append($(`
        <li class="list-group-item">
            <div class="d-flex justify-content-between">
                <div>
                    ${d}
                </div>
                <div onclick="deleteTask(event)">
                  <i class="bi bi-trash"></i>
                </div>
            </div>
        </li>
      `))
    }
  }) 
}

inpNewTask.on('input', toggleInputButton)