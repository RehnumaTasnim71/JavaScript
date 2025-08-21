const drinksDiv = document.getElementById("drinks");
const groupList = document.getElementById("groupList");
const countSpan = document.getElementById("count");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModal");
let group = [];

// Bangladeshi restaurant drinks
const localDrinks = [
  { name: "Coca-Cola", category: "Soft Drink", instructions: "Serve chilled in a glass or bottle", glass: "Glass/Bottle", type: "Non-Alcoholic", price: "120 BDT", size: "250ml", origin: "International" },
  { name: "Mango Lassi", category: "Dairy Drink", instructions: "Blend yogurt, mango pulp, sugar, and ice", glass: "Tall Glass", type: "Non-Alcoholic", price: "180 BDT", size: "300ml", origin: "Local" },
  { name: "Masala Chai", category: "Hot Drink", instructions: "Boil water, milk, tea leaves, and spices", glass: "Cup", type: "Non-Alcoholic", price: "80 BDT", size: "200ml", origin: "Local" },
  { name: "Fresh Lemon Juice", category: "Juice", instructions: "Squeeze fresh lemons and add sugar & ice", glass: "Glass", type: "Non-Alcoholic", price: "100 BDT", size: "250ml", origin: "Local" },
  { name: "Cold Coffee", category: "Coffee", instructions: "Blend coffee, milk, sugar, and ice", glass: "Mug/Tall Glass", type: "Non-Alcoholic", price: "160 BDT", size: "300ml", origin: "International" },
  { name: "Falooda", category: "Dessert Drink", instructions: "Mix vermicelli, milk, rose syrup, ice cream, and basil seeds", glass: "Tall Glass", type: "Non-Alcoholic", price: "220 BDT", size: "350ml", origin: "Local" },
  { name: "Orange Juice", category: "Juice", instructions: "Squeeze fresh oranges and serve with ice", glass: "Glass", type: "Non-Alcoholic", price: "130 BDT", size: "250ml", origin: "Local" },
  { name: "Iced Tea", category: "Cold Tea", instructions: "Brew tea, chill, add lemon and sugar", glass: "Glass", type: "Non-Alcoholic", price: "120 BDT", size: "300ml", origin: "Local" }
];

// Map to API-like fields
const sampleDrinks = localDrinks.map(d => ({
  strDrink: d.name,
  strCategory: d.category,
  strInstructions: d.instructions,
  strGlass: d.glass,
  strAlcoholic: d.type,
  price: d.price,
  size: d.size,
  origin: d.origin
}));

function displayDrinks(drinks) {
  drinksDiv.innerHTML = "";
  if (!drinks.length) {
    drinksDiv.innerHTML = "<p>No drinks found</p>";
    return;
  }
  drinks.forEach(drink => {
    const div = document.createElement("div");
    div.className = "drink-card";
    div.innerHTML = `
      <h3>${drink.strDrink}</h3>
      <p><b>Category:</b> ${drink.strCategory}</p>
      <p>${drink.strInstructions.substring(0, 30)}...</p>
      <button class="btn btn-add">Add to Group</button>
      <button class="btn btn-details">Details</button>
    `;
    div.querySelector(".btn-add").addEventListener("click", () => addToGroup(drink.strDrink));
    div.querySelector(".btn-details").addEventListener("click", () => showDetails(drink));
    drinksDiv.appendChild(div);
  });
}

function addToGroup(name) {
  if (group.length >= 7) {
    alert("You can not add more than 7 drinks!");
    return;
  }
  if (!group.includes(name)) {
    group.push(name);
    renderGroup();
  }
}

function renderGroup() {
  groupList.innerHTML = "";
  group.forEach(item => {
    const div = document.createElement("div");
    div.className = "group-item";
    div.innerText = item;
    groupList.appendChild(div);
  });
  countSpan.innerText = group.length;
}

function showDetails(drink) {
  modalBody.innerHTML = `
    <h2>${drink.strDrink}</h2>
    <p><b>Category:</b> ${drink.strCategory}</p>
    <p><b>Glass:</b> ${drink.strGlass}</p>
    <p><b>Alcoholic:</b> ${drink.strAlcoholic}</p>
    <p><b>Price:</b> ${drink.price || '-'}</p>
    <p><b>Size:</b> ${drink.size || '-'}</p>
    <p><b>Origin:</b> ${drink.origin || '-'}</p>
    <p><b>Instructions:</b> ${drink.strInstructions}</p>
  `;
  modal.style.display = "flex";
}

closeModalBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = sampleDrinks.filter(d => d.strDrink.toLowerCase().includes(query));
  displayDrinks(filtered);
});

// Initial load
displayDrinks(sampleDrinks);
