// const addBtn = document.querySelector('#add-btn');
// const editBtn = document.querySelector('#editBtn');
// const featuredPosts = [];
// let deleteButtons;

let manga = JSON.parse(localStorage.getItem('manga'))
JSON.parse(localStorage.getItem('manga')) [
    {
        id: 1,
        name: "Jujutsu Kaisen Vol.1",
        image: "https://i.postimg.cc/1tYFmYHT/jujutsu-kaisen-manga1.jpg",
        detail: "Volume 1 of Jujutsu Kaisen",
        price: "R250",
    },
    {
        id: 2,
        name: "Jujutsu Kaisen Vol.4",
        image: "https://i.postimg.cc/FKPHyX3W/jujutsu-kaisen-manga2.png",
        detail: "Volume 4 of Jujutsu Kaisen",
        price: "R350",
    },
    {
        id: 3,
        name: "Chainsaw Man Vol.1",
        image: "https://i.postimg.cc/j2mFGbFS/chainsaw-man-vol-1.jpg",
        detail: "Volume 1 of Chainsaw Man",
        price: "R300",
    },
    {
        id: 4,
        name: "Solo Leveling Vol.1",
        image: "https://i.postimg.cc/XY661fF6/solo-leveling-vol-1-comic.jpg",
        detail: "Volume 1 of Solo Leveling",
        price: "R325",
    },
    {
        id: 5,
        name: "Attack on Titan Vol.10",
        image: "https://i.postimg.cc/T1TdpBj0/attack-on-titan-vol-10.jpg",
        detail: "Volume 10 of Attack on Titan",
        price: "R250",
    },
    {
        id: 6,
        name: "Jujutsu Kaisen Vol.1",
        image: "https://i.postimg.cc/1tYFmYHT/jujutsu-kaisen-manga1.jpg",
        detail: "Volume 1 of Jujutsu Kaisen",
        price: "R250",
    },
    {
        id: 7,
        name: "Jujutsu Kaisen Vol.1",
        image: "https://i.postimg.cc/1tYFmYHT/jujutsu-kaisen-manga1.jpg",
        detail: "Volume 1 of Jujutsu Kaisen",
        price: "R250",
    },
    {
        id: 8,
        name: "Jujutsu Kaisen Vol.1",
        image: "https://i.postimg.cc/1tYFmYHT/jujutsu-kaisen-manga1.jpg",
        detail: "Volume 1 of Jujutsu Kaisen",
        price: "R250",
    },
    {
        id: 9,
        name: "Jujutsu Kaisen Vol.1",
        image: "https://i.postimg.cc/1tYFmYHT/jujutsu-kaisen-manga1.jpg",
        detail: "Volume 1 of Jujutsu Kaisen",
        price: "R250",
    },
    {
        id: 10,
        name: "Jujutsu Kaisen Vol.1",
        image: "https://i.postimg.cc/1tYFmYHT/jujutsu-kaisen-manga1.jpg",
        detail: "Volume 1 of Jujutsu Kaisen",
        price: "R250",
    }
]

let display = document.getElementById('tablecontent')
// clear array
function loadData(manga) {
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
            <td><button onclick="editItem(${item.id})" data-bs-toggle="modal" data-bs-target="#Modal1" style=" border: none; background-color: white;"><i class="fa-solid fa-pen"></i></button></td>
            <td><button style=" border: none; background-color: white;" onclick="delItem(${item.id})"><i class="fa-solid fa-trash-can"></button></i></td>
        </tr>
        `
    })
}
// delete function
function delItem(id) {
    manga = manga.filter(item => {
        return item.id !== id
    })
    // update localStorage
    localStorage.setItem('manga', JSON.stringify(manga))
    // Show items
    loadData(manga)
}
// edit function
function editItem(id) {
    document.getElementById("name").value = manga[id].name;
    document.getElementById("image").value = manga[id].image;
    document.getElementById("detail").value = manga[id].detail;
    document.getElementById("price").value = manga[id].price;
}
function editItem(){
editButtons = [...document.querySelectorAll('.edit-btn')];
editButtons.forEach((item)=>{
    item.addEventListener('click', manga)
})
}
function editmangaItem(){
    let newName = prompt('Enter new name:');
    let index = editButtons.indexOf(event.target);
    manga[index].name = newName;
    localStorage.setItem('manga', JSON.stringify(manga));
    renderList();
}
    editItem();
// sort type dropdown
function GenreSort(e) {
    const type = document;
    if (type === "all") {
        return loadData(manga)
    }
    // console.log(type);
    // const filtered = Music.filter((item) => item.genre == type);
    // console.log(filtered);
    // return loadData(filtered);
}
// textSearch
const textSearch = (e) => {
    const text = e.target.value;
    const filteredItems = manga.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
    );
    loadData(filteredItems);
};
// sort price dropdown
function priceSort(e) {
    const type = e.target.value;
    if (type === "all") {
        return loadData(manga)
    }
    console.log(typeof type);
    const filtered = manga.filter((item) => item.price == type);
    return loadData(filtered);
}
function genreSort(e) {
  const type = e.target.value;
  if (type === type.innerHTML) {
      return loadData(manga)
  }
  console.log(type);
  const filtered = manga.filter((item) => item.genre == type);
  return loadData(filtered);
}
function updateBtn(id) {
    let name = document.getElementById("name").value;
    let image = document.getElementById("image").value;
    let manga = document.getElementById("manga").value;
    let price = document.getElementById("price").value;
    // update localStorage
    localStorage.setItem('manga', JSON.stringify(manga))
    // Show items
    loadData(manga)
}
loadData(manga)























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
