
import { rander } from './ui.js';

 const imageCoctel = () =>{
    const request = new XMLHttpRequest();
    request.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php");
    request.send();

    
    request.addEventListener("load", function() {
        let data = JSON.parse(request.responseText);
        rander(data.drinks[0].strDrinkThumb, data.drinks[0].strDrink);
        console.log(data);
        
    })
}
export {imageCoctel};
