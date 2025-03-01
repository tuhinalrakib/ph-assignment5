function createTaskHistoryByBtn(taskId,taskTitle){
    taskId.addEventListener("click",function(e){
        const p = document.createElement("p")
        p.innerText = `You have completed the task ${taskTitle} at ${date.toString().slice(0,15)}`
        p.classList.add("bg-secondary")
        p.classList.add("p-2")
        p.classList.add("rounded-lg")
        taskHistory.appendChild(p)
        console.log(p)
    
        e.target.disabled = true
        e.target.style.backgroundColor = 'rgba(55, 82, 253, .2)'
    })
}

// Background Color change button 
const btnBgChange = getElementById("btn-bg-change")

btnBgChange.addEventListener("click",function(e){
    document.body.style.backgroundColor = changedBGColor()
})

function changedBGColor(){
    const randomColor = '#' + Math.round(Math.random()*16777215)
    return randomColor
}

// dynamic date show
const today = getElementById("day")
const fullDate = getElementById('full-date')

const date = new Date
const days = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursda,y", "Friday,", "Saturday,"]
const day = days[date.getDay()]
today.innerText = `${day}`

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const month = months[date.getMonth()]
const localeDate = date.getDate()
const year = date.getFullYear()
fullDate.innerText = `${month} ${localeDate} ${year}`

// Task Card
const btnTaskCompleted = getElementById("btn-task-completed")
const btnTaskCompleted2 = getElementById("btn-task-completed2")
const btnTaskCompleted3 = getElementById("btn-task-completed3")

const taskTitle = getElementById("task-title").innerText
const taskTitle2 = getElementById("task-title2").innerText

const taskHistory = getElementById("task-history")

createTaskHistoryByBtn(btnTaskCompleted,taskTitle)
createTaskHistoryByBtn(btnTaskCompleted2,taskTitle2)