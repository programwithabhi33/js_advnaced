let i = 0;
// let deleteIcon = 0;
document.getElementById("noteform").addEventListener('submit', (e) => {
    e.preventDefault();
    let main = document.getElementById('main')
    let obj = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
    }

    let value = JSON.stringify(obj)
    localStorage.setItem('note' + i, value)


    let card = `
            <div class="card col-md-4 my-2 mx-4" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title"data-id="${i}">${obj.title}</h5>
            <p class="card-text">${obj.description}</p>
            <i class="fa-sharp fa-solid fa-pen-to-square "></i>
            <i class="fa-solid fa-trash mx-2 delete"></i>
             </div>
            </div>
            `;
    i++;
    if (main.innerHTML == "No Notes to display") {
        main.innerHTML = ""
    }
    main.innerHTML += card
    document.getElementById('title').value = ""
    document.getElementById('description').value = ""
    deleteIcon();
})

function allStorage() {

    if (localStorage.length > 0) {
        deleteIcon();
        keys = Object.keys(localStorage),
            // i = keys.length;
            // console.log(keys); return false;
            keys.forEach(element => {
                let el = JSON.parse(localStorage.getItem(element))
                let card = `
            <div class="card col-md-4 my-2 mx-4" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title" data-id="${i}">${el.title}</h5>
            <p class="card-text">${el.description}</p>
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash mx-2 delete"></i>
             </div>
            </div>
            `;
                i++;
                if (main.innerHTML == "No Notes to display") {
                    main.innerHTML = ""
                }
                main.innerHTML += card
            });
        // while (i--) {

        // keys = JSON.parse(keys);
        // console.log(keys); return false;

    } else {
        main.innerHTML = "No Notes to display"
    }
}
allStorage();
function deleteIcon() {
    console.log('if condition')

    const boxes = document.querySelectorAll('.delete');
    boxes.forEach(box => {
        box.addEventListener('click', function handleClick(e) {
            let parentParent = e.target.parentNode.parentNode;
            let parent = e.target.parentNode;
            let note = parent.firstElementChild.getAttribute('data-id');
            // console.log(note); return false;
            note = 'note'+note;
            // console.log(note); return false;
            localStorage.removeItem(note)
            // parent.remove();
            allStorage();
        });
    });

}
