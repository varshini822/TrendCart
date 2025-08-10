const products = [
  { name: "Men's T-Shirt", price: 19.99, category: "Men", img: "https://via.placeholder.com/200" },
  { name: "Women's Dress", price: 29.99, category: "Women", img: "https://via.placeholder.com/200" },
  { name: "Leather Wallet", price: 14.99, category: "Accessories", img: "https://via.placeholder.com/200" },
  { name: "Men's Jacket", price: 49.99, category: "Men", img: "https://via.placeholder.com/200" },
  { name: "Earrings", price: 9.99, category: "Accessories", img: "https://via.placeholder.com/200" },
  { name: "Women's Top", price: 19.99, category: "Women", img: "https://via.placeholder.com/200" },
];

let cart = [];
let filteredCategory = "All";

function displayProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const filtered = filteredCategory === "All" ? products : products.filter(p => p.category === filteredCategory);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function filterProducts(category) {
  filteredCategory = category;
  displayProducts();
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Initial display
displayProducts();
