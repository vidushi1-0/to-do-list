let list = document.querySelector(".my-work");
let list_items = document.querySelectorAll(".list");
let close = document.querySelectorAll(".cut");
let add = document.querySelector(".add");
let input = document.querySelector(".enter");

function addListItemEventListeners(listItem) {
    listItem.addEventListener("click", (e) => {
        listItem.style.backgroundColor = "#C1B2AB";
        listItem.style.textDecoration = "black solid line-through";
        console.log(listItem.innerText, "is done!");
    });
    listItem.addEventListener("dblclick", (e) => {
        listItem.style.backgroundColor = "";
        listItem.style.textDecoration = "none";
    });

    let closeButton = listItem.querySelector(".cut");
    if (closeButton) {
        closeButton.addEventListener("click", (e) => {
            let listItem = closeButton.closest("li");
            listItem.style.display = "none";
        });
    }
}

list_items.forEach((li) => {
    addListItemEventListeners(li);
});

add.addEventListener("click", (e) => {
    if (input.value === '') {
        alert("You must write something!");
    } else {
        let newElement = document.createElement("li");
        newElement.className = "list";  // Ensuring the new list item has the same class
        newElement.innerHTML = `<div class="hide"><i class="fa-solid fa-check h"></i></div>${input.value} <div class="cut-con"><i class="fa-solid fa-xmark cut"></i></div>`;
        
        addListItemEventListeners(newElement);

        list.appendChild(newElement);
        input.value = "";

        console.log("New item added");
    }
});

close.forEach((button) => {
    button.addEventListener("click", (e) => {
        let listItem = button.closest("li");
        listItem.style.display = "none";
    });
});
