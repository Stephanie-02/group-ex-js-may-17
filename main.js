const refreshBtn = document.querySelector("#refreshBtn");
const saveMemoryBtn = document.querySelector("#saveMemory");
const loadMemoryBtn = document.querySelector("#loadMemory");
const container = document.querySelector(".container");

const API_LINK = "https://jsonplaceholder.typicode.com/todos";

 async function loadInitialData() {
    let storedData = localStorage.getItem ("todos");
    if (storedData === null) {
        let data = await getData();
        renderData(data);
    } else {
        let parsed = JSON.parse(storedData);
        renderData(parsed);
    }
}

loadInitialData();

async function getData() {
    const response = await fetch(API_LINK);
    const jsonData = await response.json();
    return jsonData;
}

function renderData(data) {
    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        let divTag = document.createElement("div");
        divTag.className = "list-item";
        let h3Tag = document.createElement("h3");
        h3Tag.innerHTML = element.title;

        let inputTag = document.createElement("input");
        inputTag.className = "completed";
        inputTag.type = "checkbox";
        inputTag.checked = element.completed;
        inputTag.addEventListener("click", () => {
            data[i].completed = inputTag.checked;
            localStorage.setItem("todos", JSON.stringify(data));
        })

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => {
            data.splice(i, 1);
            localStorage.setItem("todos", JSON.stringify(data));
            renderData(data);
        })

        divTag.append(h3Tag);
        divTag.append(inputTag);
        divTag.append(deleteBtn);
        container.append(divTag);

    }
}


refreshBtn.addEventListener("click", async () => {
    let data = await getData();
    renderData(data);
})

saveMemoryBtn.addEventListener("click", async () => {
    let data = await getData();
    localStorage.setItem("todos", JSON.stringify(data));
});

loadMemoryBtn.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    renderData(data);
});
