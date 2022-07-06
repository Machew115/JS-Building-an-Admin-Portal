async function gettingBooks(){
    let response = await fetch('http://localhost:3001/listBooks')
    let book = await response.json()
    book.forEach(appendContent)
}

function appendContent() {
    let root = document.querySelector('#root')
    let li = document.createElement('li')
    let input = document.createElement('input')
    quantityInput.value = book.quantity
    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'
     saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value,
            })
        })
     })
     li.append(quantityInput, saveButton)
     root.append(li)
}
gettingBooks();