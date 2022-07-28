const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function headingList() {
  const newItems = [];
  for (let i = 0; i < ingredients.length; i += 1) {
    const heading = document.createElement("li");
    heading.textContent = ingredients[i];
    heading.classList.add("item");
    newItems.push(heading);
    console.log(heading);
  }
  return newItems;
}

document.querySelector("#ingredients").append(...headingList());
