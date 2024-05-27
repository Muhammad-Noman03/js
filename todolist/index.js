// selectors

const input = document.querySelector('#input');
const addBtm = document.querySelector('#addBtn');
const DisplayTask = document.querySelector('#displayTask');
const editbtn = document.querySelector('#editBtn');
const deleteBtn = document.querySelector('#deleteBtn');


let todo = [];

input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        addTask();
        Display();

    }

});

addBtm.addEventListener('click', () => {

    addTask();
    Display();
})

function Display() {
    let html = '';



    todo.forEach((value, index) => {
        html += `
                 <div id="Task${index}" class=" flex p-2 rounded-lg border-2 border-black">
                    <input type="text" id="input" class="outline-none grow" placeholder="Enter the Task"
                        autocomplete="off" value="${value}" readonly>
                    <div id="editBtn"
                        class=" flex items-center justify-center mr-2 w-[6rem] p-2 rounded-lg bg-slate-600 text-white cursor-pointer"
                        data-id="task${index}" onClick="edit(event,${index})">
                        Edit Task
                    </div>
                    <div id="deleteBtn"
                        class=" flex items-center p-3 rounded-lg  bg-slate-600 text-white cursor-pointer"
                        data-id="task${index}" onClick="deleteTask(${index})">
                        Delete Task
                    </div>
                </div>
        `;
    });

    DisplayTask.innerHTML = html;
}

function addTask() {
    let value = input.value;
    todo.push(value);

    input.value = '';
}

function edit(e, index) {
    let el = e.target;
    // console.log(e);  


    let input = el.parentNode.children[0];
    // console.log(input);

    if (el.innerText === 'Edit Task') {
        el.innerText = 'Save Task'
        input.removeAttribute('readonly');
    } else if (input.value) {
        el.innerText = 'Edit Task'
        input.setAttribute('readonly', 'readonly');
        todo.splice(index, 1, input.value)
    }

}



function deleteTask(index) {
    todo.splice(index, 1);
    Display();

}
