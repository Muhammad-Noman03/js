//selectors
const input = document.querySelector('.input');
const profile = document.querySelector("#profile");
const userName = document.querySelector('#name');
const btns = document.querySelectorAll('.btn');
const render = document.querySelector('.render');


// function helloworld() {
//     alert("hello");
// }

// userName.addEventListener('click', () => {
//     profile.style.backgroundColor = "red";
// });

let html = " ";
input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const value = input.value;
        renderText(value);
    }

});

function renderText(value) {
    html += ` <div class="render">
            <p>${value}</p>
            </div>`
        ;

    render.innerHTML = html;

};

btns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        console.log(btn);
        if (btn.textContent === "Contact") {
            userName.textContent = "Sufiyan"
        }
        else {
            userName.textContent = "Noman";
        }
        check();
    })
});


// profile.addEventListener('click', check);

function check() {
    if (userName.textContent === "Noman") {
        document.querySelector(".dp").src = "noman.jpg"
    }
    else {
        document.querySelector(".dp").src = "sufiyan.jpg"
    }
}


