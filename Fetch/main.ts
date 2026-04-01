const fetchData = async (url: string) => {
    const API_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    return data;
}

let button : HTMLButtonElement = document.querySelector("#fetch-btn") as HTMLButtonElement;
let paragraph : HTMLParagraphElement = document.querySelector("#data") as HTMLParagraphElement;

button.addEventListener("click", async () => {
    const data = await fetchData('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
    paragraph.innerHTML = JSON.stringify(data);
});