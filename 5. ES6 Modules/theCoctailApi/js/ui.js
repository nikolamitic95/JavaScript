export const getButton = () => document.querySelector("button");
const $content = document.querySelector(".content");

 const rander = (data, data1) => {
    $content.innerHTML="";
    const $img = document.createElement("img");
    const $name = document.createElement("h2");
    $img.setAttribute("src", data);
    $name.textContent = data1;
    $content.appendChild($img);
    $content.appendChild($name);
    
}

export {rander};

