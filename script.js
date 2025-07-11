const form = document.getElementById('item')
const itemInput = document.getElementById('input-item')
const filter = document.getElementById('filterinput-id')
const itemList = document.getElementById('unorder-list')
const clear = document.getElementById('clear-button')

function addItem(event){
    event.preventDefault()
    let newItem = itemInput.value
    if(newItem === ""){
        alert("Enter a valid item name!")
        return
    }
    const li = document.createElement('li')
    li.append(newItem)
    const button = createButton('remove-item button-link red-button')
    li.append(button)
    itemList.append(li)
    itemInput.value=""
    Check()
}

function createButton(classes){
    let butt = document.createElement('button')
    butt.classList = classes
    const icon = createIcon('fa-solid fa-xmark')
    butt.append(icon)
    return butt
}

function createIcon(classes){
    let ic = document.createElement('i')
    ic.classList = classes
    return ic
}

form.addEventListener('submit',addItem)

function removeItem(event){
    if(event.target.parentElement.classList.contains('remove-item')){
        event.target.parentElement.parentElement.remove()
    }Check()
}

itemList.addEventListener('click',removeItem)

function removeAllItems(event){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }Check()
}

clear.addEventListener('click', removeAllItems)

function Check(){
    const items = itemList.querySelectorAll('li')
    if (items.length === 0) {
        filter.style.display="none"
        clear.style.display="none"
    } else {
       filter.style.display="block"
        clear.style.display="block"
    }
}

function filterItem(event){
    const items = itemList.querySelectorAll('li')
    let text = event.target.value
    items.forEach(item => {
        let itemName = item.firstChild.textContent.toLowerCase().trim()
        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}

filter.addEventListener('input',filterItem)