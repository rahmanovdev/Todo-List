let $ = document.querySelector.bind(document)
const inputName = $('.input-name')
const inputSurname = $('.input-surname')
const btn = $('.add-btn')
const ul = $('ul')






function view (){
let tasks = JSON.parse(localStorage.getItem('task')) || []
ul.innerHTML = "";
tasks.map(el => {
    ul.innerHTML += `<li class="li list-group-item d-flex
     justify-content-between align-items-center col-6 mx-auto"><h5 class="round">${el.name[0]} ${el.surname[0]}</h5>
     <h6><span>name: </span>${el.name}</h6> <h6><span>surname: </span>${el.surname}</h6>
     <button class="del-btn btn btn-danger">delete</button></li>`
})
deleteTask()    
}
view()

inputName.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        inputSurname.focus()
    }
})
inputSurname.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        btn.focus()
    }
})


function main(){
    let task = JSON.parse(localStorage.getItem('task')) || []
    const newObj = {
        id: task.length ? task[task.length - 1].id + 1 : 1,
        name:inputName.value,
        surname:inputSurname.value,
    }
    task = [...task,newObj]
    localStorage.setItem('task', JSON.stringify(task))
    view()
}

btn.addEventListener('click', () => {
    if(inputName.value !== '' && inputSurname.value !== ''){
       main() 
       inputName.style.border = '2px solid green'
       inputSurname.style.border = '2px solid green'
    }else if(inputName.value === '' && inputSurname.value === ''){
        inputName.style.border = '2px solid red'
        inputSurname.style.border = '2px solid red'
    }
    inputName.value = ''
    inputSurname.value = ''
})

function deleteTask() {
    let task = JSON.parse(localStorage.getItem('task')) || []

    const deleteBtns = document.querySelectorAll('.del-btn')
    deleteBtns.forEach((btn,idx) => {
        btn.addEventListener('click', () => {
           task = task.filter((el,index) => {
                return idx !== index
            })
            localStorage.setItem('task',JSON.stringify(task))
            view()
        })
    })

}

// function isChecked(){
//     let tasks = JSON.parse(localStorage.getItem('task')) || []
//     const checkbox = document.querySelectorAll('.checkbox')
//     checkbox.forEach((check,index)=> {
//         check.addEventListener('click', ()=> {
//            tasks = tasks.map((el, idx)=> {
//                 if(index === idx){
//                     return {...el,isCompleted : !el.isCompleted}
//                 }else {
//                     return el
//                 }
//             })
//             localStorage.setItem('task',JSON.stringify(tasks))
//             view()
//         })
//     })
// }