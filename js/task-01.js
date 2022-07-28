const listWithId = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${listWithId}`);

const listAllItem = document.querySelectorAll(".item");
function listAllItemRef() {
  for (let i = 0; i < listAllItem.length; i += 1) {
    const messegeCategory = listAllItem[i].querySelector("h2").textContent;
    const messegeItem = listAllItem[i].querySelectorAll("li").length;
    console.log(`Category: ${messegeCategory}`);
    console.log(`Elements: ${messegeItem}`);
  }
}
listAllItemRef();
