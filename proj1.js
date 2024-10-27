let todoform = document.getElementById("todoform")
let ourfield = document.getElementById("ourfield")
let ourList = document.getElementById("ourList")
todoform.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(ourfield.value)
})
function createItem (x) {
    let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`
ourList.insertAdjacentHTML("beforeend", ourHTML)
ourfield.value = ""
ourfield.focus()
}   

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}