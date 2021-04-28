const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");

const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");

const listHtml = document.getElementById('list');

let list = [];

function render() {
    // console.log(list);
    let renderList = list.map((item) => 
        `

        <div class="card my-2" style="row">
            <div class="card-header">Content</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${item.content}</li>
            </ul>
            <div class="card-header">Time</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${item.date} ${item.time}</li>
            </ul>
        </div>

        `
    );
    let listContent = '';
    for (let item of renderList) {
        listContent += item;
    }
    
    listHtml.innerHTML = listContent;
}

addBtn.addEventListener("click", () => {
    list.unshift({
        content: content.value,
        date: date.value,
        time: time.value,
    });
    render();
    // console.log(list);
});

deleteBtn.addEventListener("click", () => {
    list.shift();
    render();

    // console.log(list);
});
