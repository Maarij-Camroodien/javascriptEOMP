let manga = JSON.parse(localStorage.getItem('products'))
let display = document.querySelector('.checktablecontent')

function loadData() {
    // clear items
    display.innerHTML = ""
    // displaying on html
    manga.forEach((item) => {
        display.innerHTML += `
        <tr>
            <th scope="row">${item}</th>
            <td>${item}</td>
            <td><img src="${item}" style="width:5rem;"></img></td>
            <td>${item}</td>
            <td>${item}</td>
            <td>
        `
    })
}
loadData()