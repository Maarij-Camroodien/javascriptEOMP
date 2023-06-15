let display = document.querySelector(".productsdisp");
let pricesorting = document.querySelector("#pricesortbtn");
let nameSort = document.querySelector("#namesortbtn")
let productslist = [];

let manga = JSON.parse(localStorage.getItem("manga"))
  ? JSON.parse(localStorage.getItem("manga"))
  : localStorage.setItem(
      "manga",
      JSON.stringify([
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
          name: "Naruto Vol.1",
          image: "https://i.postimg.cc/TYjJm34T/naruto-vol-1.jpg",
          detail: "Volume 1 of Naruto",
          price: "R350",
        },
        {
          id: 7,
          name: "One peice Vol.2",
          image: "https://i.postimg.cc/sxTLN01g/one-piece-vol-2.jpg",
          detail: "Volume 2 of One Peice",
          price: "R360",
        },
        {
          id: 8,
          name: "Demon Slayer Vol.2",
          image:
            "https://i.postimg.cc/SR9BJGKS/demon-slayer-kimetsu-no-yaiba-vol-2.jpg",
          detail: "Volume 2 of Demon Slayer",
          price: "R275",
        },
        {
          id: 9,
          name: "Tokyo Ghoul Vol.1",
          image: "https://i.postimg.cc/9Fmfv4g4/tokyo-ghoul-vol-1.jpg",
          detail: "Volume 1 of Tokyo Ghoul",
          price: "R380",
        },
        {
          id: 10,
          name: "Bleach Vol.1",
          image:"https://i.postimg.cc/jqZZc8xF/bleach-vol-1.jpg",
          detail: "Volume 1 of Bleach",
          price: "R290",
        },
        {
          id: 11,
          name: "Beserk Vol.1",
          image:"https://i.postimg.cc/YSP3zJrG/berserk-volume-1.jpg",
          detail: "Volume 1 of Beserk",
          price: "R290",
        },
        {
          id: 12,
          name: "Death Note Vol.6",
          image:"https://i.postimg.cc/XYC7v5rR/death-note-vol-6.jpg",
          detail: "Volume 6 of Death Note",
          price: "R230",
        },
      ])
    );

function loadData() {
  // clear items
  display.innerHTML = "";
  // displaying on html
  manga.forEach((item) => {
    display.innerHTML += `
         <div class="col-xl-3 col-lg-4 col-md-6 justify-content-center colum">
            <div class="card productCard">
                <div class="image">
                    <img src="${item.image}" class="card-img-top" alt="product" loading="lazy">
                </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.detail}</p>
                        <p class="card-price">${item.price}</p>
                        <div class="bttn">
                        <button class="btn text-center" id="addtocart" onclick='checkoutItemBtn(${JSON.stringify(item)})'>Add to Cart</button>
                        </div>
                    </div>
            </div>
        </div>
        `
  });
}
loadData();

pricesorting.addEventListener("click", (event) => {
  event.preventDefault();
  manga = manga.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });
  loadData();
});

function checkoutItemBtn(item) {
      productslist.push(item);
      localStorage.setItem('products', JSON.stringify(productslist));
}
loadData()

nameSort.addEventListener("click", (event) => {
  event.preventDefault();
  manga = manga.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });
  loadData();
});
// console.log(manga);
