const btnBgChange = getElementById("btn-bg-change")

btnBgChange.addEventListener("click",function(e){
    document.body.style.backgroundColor = changedBGColor()
})

function changedBGColor(){
    const randomColor = '#' + Math.round(Math.random()*16777215)
    return randomColor
}