export const getButton = () => document.querySelector("button");
const $main = document.querySelector(".content")

const render = (data) => {
    const $h2 = document.createElement("h2");
    $main.innerHTML= "";
    $h2.textContent = data;
    $main.appendChild($h2);
    
}

export { render };