//selectors
const input = document.querySelector('.input');
const checkBtn = document.querySelector('.btn');
const verify = document.querySelector('.verify');


const members = ["Noman", "Faizan", "Sufiyan"];

input.addEventListener('input', () => {

    checking(input);
})



function checking(input) {
    const final = members.includes(input.value);
    if (!final) {
        checkBtn.disabled = final;
        verify.textContent = "";

    }
    else if (final) {
        checkBtn.disabled = !final;
        verify.textContent = "Yes, You are a Member";

    }
}

let count = 0;
checkBtn.addEventListener('click', () => {
    console.log(count);
    count++;

})