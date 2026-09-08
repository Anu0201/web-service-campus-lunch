// Sample menu data (classroom exercise only, not a real cafeteria menu)
const menuData = [
  {
    day: "Monday",
    name: "Bibimbap",
    price: 6500,
    vegetarian: true,
    description: "Rice, vegetables, and gochujang."
  },
  {
    day: "Monday",
    name: "Chicken rice",
    price: 7000,
    vegetarian: false,
    description: "Grilled chicken with steamed rice."
  },
  {
    day: "Monday",
    name: "Tofu bowl",
    price: 6000,
    vegetarian: true,
    description: "Tofu, greens, and sesame dressing."
  },
  {
    day: "Tuesday",
    name: "Mushroom pasta",
    price: 7500,
    vegetarian: true,
    description: "Pasta with mushrooms and herbs."
  },
  {
    day: "Tuesday",
    name: "Beef noodles",
    price: 8000,
    vegetarian: false,
    description: "Noodles with beef and vegetables."
  },
  {
    day: "Tuesday",
    name: "Lentil soup",
    price: 5500,
    vegetarian: true,
    description: "Lentils with bread on the side."
  },
  {
    day: "Wednesday",
    name: "Fish rice",
    price: 7500,
    vegetarian: false,
    description: "Fish with rice and seasonal greens."
  },
  {
    day: "Wednesday",
    name: "Pork cutlet",
    price: 8000,
    vegetarian: false,
    description: "Breaded pork with cabbage salad."
  },
  {
    day: "Wednesday",
    name: "Chicken noodles",
    price: 7000,
    vegetarian: false,
    description: "Chicken and noodles in broth."
  }
];

// Format a number of KRW with thousands separators, e.g. 6500 -> "6,500 KRW"
function formatPrice(price) {
  return price.toLocaleString("en-US") + " KRW";
}

// Build a single meal card <li> element from a meal object
function createMealCard(meal) {
  const item = document.createElement("li");
  item.className = "meal-card";

  const name = document.createElement("h2");
  name.className = "meal-name";
  name.textContent = meal.name;

  const description = document.createElement("p");
  description.className = "meal-description";
  description.textContent = meal.description;

  const meta = document.createElement("div");
  meta.className = "meal-meta";

  const price = document.createElement("span");
  price.className = "meal-price";
  price.textContent = formatPrice(meal.price);

  const label = document.createElement("span");
  label.className = "meal-label";
  label.textContent = meal.vegetarian ? "Vegetarian" : "Non-vegetarian";

  meta.appendChild(price);
  meta.appendChild(label);

  item.appendChild(name);
  item.appendChild(description);
  item.appendChild(meta);

  return item;
}

// Render Monday's meals into the meal list
function renderMondayMeals() {
  const list = document.getElementById("meal-list");
  list.innerHTML = "";

  const mondayMeals = menuData.filter((meal) => meal.day === "Monday");

  mondayMeals.forEach((meal) => {
    list.appendChild(createMealCard(meal));
  });
}

renderMondayMeals();
