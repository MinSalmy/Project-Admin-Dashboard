//change theme of the page
console.log(document.querySelector("#theme"));
const themeButton = document.querySelector("body > div > header > div.profile > input.theme");
console.log(themeButton);
document.querySelector("#theme").addEventListener('click', () => {
    document.querySelector(".container").classList.toggle("dark");
});