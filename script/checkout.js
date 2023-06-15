let productslist = JSON.parse(localStorage.getItem('products'))
let display = document.querySelector('.checktablecontent')

function loadData() {
    // clear items
    display.innerHTML = ""
    // displaying on html
    productslist.forEach((item) => {
        display.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td><img src="${item.image}" style="width:5rem;"></img></td>
            <td>${item.detail}</td>
            <td>${item.price}</td>
            <td><button style=" border: none; background-color: white;" onclick="deletebtn(${item.id})"><i class="bi bi-trash-fill"></i></button></td>
        </tr>
        `
    })
}
loadData()

function deletebtn(id) {
    productslist = productslist.filter(item => {
        return item.id !== id
    })
    // update localStorage
    localStorage.setItem('products', JSON.stringify(productslist))
    // Show items
    loadData(productslist)
}

function clearcart(){
    localStorage.removeItem('products')
    location.reload()
}