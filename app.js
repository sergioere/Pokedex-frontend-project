

const form = document.getElementById("form");
form.addEventListener("click", (e) => {
    e.preventDefault();
    let img2 = document.getElementById("img");

    let namePoke = document.getElementById("name").value;
    console.log(namePoke);
    let img = document.getElementById("sprite_pokemon");
    let p = document.getElementById("info");

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${namePoke}/`);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datoPokemon = JSON.parse(this.responseText);
            console.log(datoPokemon);
            img.setAttribute("src", datoPokemon.sprites.front_default);
            p.textContent = datoPokemon.name;

          
            img2.setAttribute("src", datoPokemon.sprites.other.dream_world.front_default);
        }
    }


    /*
    let namePoke = document.getElementById("name").value;
    
    let img = document.getElementById("sprite_pokemon");
    let p = document.getElementById("info");
    
    
    
    p.textContent = namePoke;
    
    img.setAttribute("src", './img/pokeapi_256.png');
    
    */


});