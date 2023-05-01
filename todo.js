const task = document.querySelector(".task");
const add = document.querySelector(".add");
const list = document.querySelector(".list");
divID = 0;
add.addEventListener('click', () => {
    if(task.value !== '') {
        divID++;
        const newTask = document.createElement('p');
        const newButton = document.createElement('button');
        const newDiv = document.createElement('div')
        newButton.classList.add('done');
        newDiv.classList.add('newDiv');
        newDiv.id = `div-${divID}`;
        newTask.textContent = task.value;
        newButton.textContent = "DONE";
        newDiv.appendChild(newTask);
        newDiv.appendChild(newButton);
        list.appendChild(newDiv);
                task.value = '';
        
        newButton.addEventListener("click", () => {
            newTask.style.textDecoration = "line-through";
            newTask.style.color = "green";
        });
    }
});
