const categories = {
    Lunch: ["Burger", "Salad", "Sandwich"],
    Dinner: ["Steak", "Pasta", "Grilled Fish"],
    Sushi: ["California Roll", "Salmon Nigiri", "Tuna Sashimi"],
    Drinks: ["Coke", "Orange Juice", "Water"]
};
function loadMenuItems(categoryName) {
    const titleElement = document.getElementById("category-title");
    const itemsElement = document.getElementById("category-items");
    const section = document.getElementById("category-section");

    titleElement.textContent = categoryName;
    itemsElement.innerHTML = "";

    if (categories[categoryName]) {
        categories[categoryName].forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            itemsElement.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No items available";
        itemsElement.appendChild(li);
    }

    section.style.display = "block";
}
function loadRandomCategory() {
    const categoryKeys = Object.keys(categories);
    const randomIndex = Math.floor(Math.random() * categoryKeys.length);
    const randomCategory = categoryKeys[randomIndex];
    loadMenuItems(randomCategory);
}
function loadMap() {
    alert("Map functionality is not implemented yet.");
}
