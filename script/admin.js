// const addBtn = document.querySelector('#add-btn');
// const editBtn = document.querySelector('#editBtn');
// const featuredPosts = [];
// let deleteButtons;

let manga = JSON.parse(localStorage.getItem('manga'))
let saveBtn = document.querySelector('#savebtn')
// let editbtn = document.querySelector('#edit-changes')

let display = document.querySelector('.tablecontent')
let id = manga[manga.length-1] ? manga[manga.length-1].id + 1 : 1
// clear array
function loadData() {
    // clear items
    display.innerHTML = ""
    // displaying on html
    manga.forEach((item) => {
        display.innerHTML += `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.name}</td>
            <td><img src="${item.image}" style="width:5rem;"></img></td>
            <td>${item.detail}</td>
            <td>${item.price}</td>
            <td>
            <!-- Button trigger modal -->
            <button style=" border: none;" id="editbtn" onclick="editbtn(${item.id})" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="bi bi-pencil"></i>
            </button>

           <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
           <div class="modal-content">
           <div class="modal-header">
           <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
           <div class="modal-body">
           <h6 class="name">Name</h6>
        <input id="name1" placeholder="Enter product name..." type="text" class="w-100">
        <h6 class="imageurl">ImageUrl</h6>
        <input id="image1" placeholder="Enter product image..." type="text" class="w-100">
        <h6 class="details">Details</h6>
        <input id="detail1" placeholder="Enter product details..." type="text" class="w-100">
        <h6 class="price">Price</h6>
        <input id="price1" placeholder="Enter product price..." type="text" class="w-100">
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="edit-changes">Save changes</button>
      </div>
    </div>
  </div>
</div>
            <td><button style=" border: none; background-color: white;" onclick="deletebtn(${item.id})"><i class="bi bi-trash-fill"></i></button></td>
        </tr>
        `
    })
}

loadData()

// delete function
function deletebtn(id) {
    manga = manga.filter(item => {
        return item.id !== id
    })
    // update localStorage
    localStorage.setItem('manga', JSON.stringify(manga))
    // Show items
    loadData(manga)
}
// edit function
// editbtn.addEventListener('click', editproducts)

function editproducts(item) {
    this.id = item.id;
    this.name = document.querySelector("#name1").value;
    this.image = document.querySelector("#image1").value;
    this.detail = document.querySelector("#detail1").value;
    this.price = document.querySelector("#price1").value;

    let itemsIndex = manga.findIndex((item)=>{
        return item.id === item.id;
    })

    products[itemsIndex] = {
    id: this.id,
    name: this.name, 
    image: this.image,
    detail: this.detail, 
    price: this.price
};
    localStorage.setItem('manga', JSON.stringify(manga));
    loadData();
}


// function editbtn(id) {
//     document.querySelector("#name1").value = manga[id].name;
//     document.querySelector("#image1").value = manga[id].image;
//     document.querySelector("#detail1").value = manga[id].detail;
//     document.querySelector("#price1").value = manga[id].price;
// }
// function editbtn(){
// editButtons = [...document.querySelectorAll('#edit-changes')];
// editButtons.forEach((item)=>{
//     item.addEventListener('click', manga)
// }) 
// }
// function editmangaItem(event){
//     let newName = prompt('Enter new name:');
//     let index = editButtons.indexOf(event.target);
//     manga[index].name = newName;
//     localStorage.setItem('manga', JSON.stringify(manga));
//     renderList();
// }
    // editbtn();
// // sort type dropdown
// function GenreSort(e) {
//     const type = document;
//     if (type === "all") {
//         return loadData(manga)
//     }
    // console.log(type);
    // const filtered = Music.filter((item) => item.genre == type);
    // console.log(filtered);
    // return loadData(filtered);
// }
// // textSearch
// const textSearch = (e) => {
//     const text = e.target.value;
//     const filteredItems = manga.filter((item) =>
//         item.name.toLowerCase().includes(text.toLowerCase())
//     );
//     loadData(filteredItems);
// };
// // sort price dropdown
// function priceSort(e) {
//     const type = e.target.value;
//     if (type === "all") {
//         return loadData(manga)
//     }
//     console.log(typeof type);
//     const filtered = manga.filter((item) => item.price == type);
//     return loadData(filtered);
// }
// function genreSort(e) {
//   const type = e.target.value;
//   if (type === type.innerHTML) {
//       return loadData(manga)
//   }
//   console.log(type);
//   const filtered = manga.filter((item) => item.genre == type);
//   return loadData(filtered);
// }

saveBtn.addEventListener('click', add)

function add() {
    let name = document.querySelector("#name").value;
    let image = document.querySelector("#image").value;
    let detail = document.querySelector("#detail").value;
    let price = document.querySelector("#price").value;

    manga.push({
        id: id,
        name: name,
        image: image,
        detail: detail,
        price: price
    })
    id++
    // update localStorage
    localStorage.setItem('manga', JSON.stringify(manga))
    // Show items
    loadData()
    // console.log(manga);
}
// loadData()























// localStorage.setItem('manga', JSON.stringify(manga));
// function loadData() {
//   let manga
//   if(localStorage.getItem('manga') == null) {
//     manga = [];
//   }else {
//     manga = JSON.parse(localStorage.getItem('manga'))
//   }
//   let display = document.getElementById('tablecontent')
//   // clear items
//   display.innerHTML = "";
//   // displaying on html
//   console.log(plants);
//   plants.forEach((item) => {
//       display.innerHTML += `
//       <tr>
//           <td scope="row">${item.id}</td>
//           <td>${item.name}</td>
//           <td><img src="${item.image}"></img></td>
//           <td>${item.detail}</td>
//           <td>${item.price}</td>
//           <td><button class="btn btn-primary" onclick="editItem(${item.id})" data-bs-toggle="modal" data-bs-target="#edit-${item.id}">Edit</button></td>
//           <td><button class="btn btn-primary" id="delete" onclick="deleteItem()">Delete</i></td>
//       </tr>
//       <div class="modal fade" id="edit-${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h1 class="modal-title fs-5" id="exampleModalLabel" style="margin-left:6rem;">Edit ${item.name}
//                   </h1>
//                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
//                   <form id="form">
//                     <div class="mb-3">
//                       <label for="exampleFormControlInput1" class="form-label">ID</label>
//                       <input type="number " class="form-control" id="id-input">
//                     </div>
//                     <div class="mb-3">
//                       <label for="exampleFormControlInput1" class="form-label">Name</label>
//                       <input type="text" class="form-control" id="name-input">
//                     </div>
//                     <div class="mb-3">
//                       <label for="exampleFormControlInput1" class="form-label">Description</label>
//                       <input type="text" class="form-control" id="imageUrl">
//                     </div>
//                     <div class="mb-3">
//                       <label for="exampleFormControlTextarea1" class="form-label">Image</label>
//                       <input class="form-control" type="text" id="description">
//                     </div>
//                     <div class="mb-3">
//                       <label for="exampleFormControlInput1" class="form-label">Amount</label>
//                       <input type="number" class="form-control" id="price">
//                     </div>
//                   </form>
//                 </div>
//                 <div class="modal-footer">
//                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                   <button type="button" class="btn btn-primary" id="add-btn" onclick="editItemPage()">Edit</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//       `
//   })
// }
// document.onload = loadData();
// function addItemPage(){
//     let id = document.querySelector('#id-input').value;
//     let name = document.querySelector('#name-input').value
//     let description = document.querySelector('#description').value
//     let image = document.querySelector('#imgUrl').value
//     let amount = document.querySelector('#price').value
//     let manga
//     if(localStorage.getItem('manga') == null) {
//       manga = [];
//     }else {
//       manga = JSON.parse(localStorage.getItem('manga'))
//     }
//   manga.push({
//       id: id,
//       name: name,
//       description: description,
//       image: image,
//       amount: amount
//       })
//       localStorage.setItem('manga', JSON.stringify(manga));
//       loadData();
//       document.querySelector('#name-input').value = '';
//       document.querySelector('#description').value = '';
//       document.querySelector('#imgUrl').value = '';
//       document.querySelector('#price').value = '';
// }
