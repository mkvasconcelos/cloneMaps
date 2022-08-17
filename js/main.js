function addItem() {
    var item = document.getElementById('item').value
    var cont = document.getElementById('divList')
    var ul = document.createElement('ul')
    var li = document.createElement('li')
    var button = document.createElement('button')
    button.innerHTML = "Delete"
    localStorage.getItem()
    li.innerHTML = item
    ul.appendChild(li)
    ul.appendChild(button)
    cont.appendChild(ul)
}



