function getElementById(id){
    const element = document.getElementById(id)
    return element
}

let count = 0
function createTaskHistory(btnTaskCompleted,taskTitle,parentDiv){
    btnTaskCompleted.addEventListener("click",function(e){
        count += 1
        alert("Board updated seccessfully")

        const assigned = getElementById("assigned").innerText
        let convertedAssigned = parseInt(assigned)
        convertedAssigned -= 1
        getElementById("assigned").innerText = convertedAssigned

        const totalTasks = getElementById("task-count").innerText
        let convertedTotalTask = parseInt(totalTasks)
        convertedTotalTask += 1
        getElementById("task-count").innerText = convertedTotalTask

        const p = document.createElement("p")
        p.innerText = `You have completed the task ${taskTitle} at ${new Date().toLocaleTimeString()}`
        p.classList.add("bg-secondary")
        p.classList.add("p-2")
        p.classList.add("rounded-lg")
        p.classList.add("mb-3")
        parentDiv.appendChild(p)
        console.log(p)
    
        e.target.disabled = true
        e.target.style.backgroundColor = 'rgba(55, 82, 253, .2)'
        if(count === 6){
            alert("Congrats!!! You have completed all the current task")
        }
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
const btnTaskCompleted4 = getElementById("btn-task-completed4")
const btnTaskCompleted5 = getElementById("btn-task-completed5")
const btnTaskCompleted6 = getElementById("btn-task-completed6")

const taskTitle = getElementById("task-title").innerText
const taskTitle2 = getElementById("task-title2").innerText
const taskTitle3 = getElementById("task-title3").innerText
const taskTitle4 = getElementById("task-title4").innerText
const taskTitle5 = getElementById("task-title5").innerText
const taskTitle6 = getElementById("task-title6").innerText

const taskHistory = getElementById("task-history")


createTaskHistory(btnTaskCompleted,taskTitle,taskHistory)
createTaskHistory(btnTaskCompleted2,taskTitle2,taskHistory)
createTaskHistory(btnTaskCompleted3,taskTitle3,taskHistory)
createTaskHistory(btnTaskCompleted4,taskTitle4,taskHistory)
createTaskHistory(btnTaskCompleted5,taskTitle5,taskHistory)
createTaskHistory(btnTaskCompleted6,taskTitle6,taskHistory)

// Clear History

const resetHistory = getElementById("reset-history")

resetHistory.addEventListener("click",function(e){
    taskHistory.innerHTML = ""
})

// Blog Site
const blogSite = getElementById("blog-site")

blogSite.addEventListener("click",function(e){
    window.location.href = './blog.html'
})