
const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const body = document.querySelector('.body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [
  {
    id: 1,
    name: "Adidas Foam runners-Khakhi Brown",
    image: "foam2.jpg",
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 9499.01
  },
  {
    id: 2,
    name: "Adidas Foam runners-Black",
    image: 'foam1.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 6000.01
  },
  {
    id: 3,
    name: 'Adidas Foam runners-B&B',
    image: 'foam3.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 9799.01
  },
  {
    id: 4,
    name: 'Air Force 1-B&W',
    image: 'AF1B&W.jpg',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 2799.91
  },
  {
    id: 5,
    name: 'Air Force 1-White',
    image: 'AF1White.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3000.13
  },
  {
    id: 6,
    name: 'Air Force 1- Black',
    image: 'AF1Black.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 2700.45
  },
  {
    id: 7,
    name: 'Nike Vapormax-Flyknit-01',
    image: 'vp1.jpg',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3200.02
  },
  {
    id: 8,
    name: 'Nike Vapormax-Flyknit-Black',
    image: 'vp2.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3000.01
  },
  {
    id: 9,
    name: 'Nike Vapormax-Flyknit-c02',
    image: 'vp3.jpg',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3200.66
  },
  {
    id: 10,
    name: 'New Balance-9060G',
    image: 'nb1.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3199.95
  },
  {
    id: 11,
    name: 'New Balance-9060W',
    image: 'nb2.png',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3199.95
  },
  {
    id: 12,
    name: 'New Balance-9060B',
    image: 'nb3.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3199.95
  },
  
  {
    id: 13,
    name: 'Yeezy boost 350-01',
    image: 'zoom1.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 5100.99
  },
  {
    id: 14,
    name: 'Yeezy boost 350-02',
    image: 'zoom2.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 4890.85
  },
  {
    id: 15,
    name: 'Yeezy boost 350-03',
    image: 'zoom3.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 4999.99
  },
  {
    id: 16,
    name: 'Jordan 4-Wb',
    image: 'yeezy1.jpg',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3500.65
  },
  {
    id: 17,
    name: 'Jordan 4-wr',
    image: 'yeezy2.jfif',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3500.78
  },
  {
    id: 18,
    name: 'Jordan 4-wy',
    image: 'yeezy3.jpeg',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 3500.35
  },
  
  {
    id: 19,
    name: 'Air Max 01R',
    image: 'A01R.webp',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 2480.99
  },
  {
    id: 21,
    name: 'Air Max 01G',
    image: 'A01G.webp',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 2370.99
  },
  {
    id: 6,
    name: 'Air Max 01B',
    image: 'A01B.webp',
    size: "size:uk4,uk5,uk6,uk7,uk9,uk10",
    price: 2260.99
  },
];

let listCards = [];

const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="images/${value.image}">
      <div class="title">${value.name}</div>
      <div class="size">${value.size}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add to Card</button>`;

    list.appendChild(newDiv);
  });
};

initApp();

const addToCard = (key) => {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
};

const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="images/${value.image}"></div>
        <div class="cardTitle">${value.name}</div>
        <div class="cardPrice">${value.price.toLocaleString()}</div>
        <div>
          <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
          <div class="count">${count}</div>
          <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
        </div>`;

      listCard.appendChild(newDiv);
    }
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
  });
};

const changeQuantity = (key, quantity) => {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
};






