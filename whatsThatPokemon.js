
$(document).ready(function(){

    var url_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";
    for(var x = 1; x <= 50; x++){
        $('#containerLeft').append('<img id="'+x+'" src="'+url_img+''+x+'.png">');
    };

    var url_info = "https://pokeapi.co/api/v2/pokemon/";
    // var url_info = "http://pokeapi.salestock.net/api/v2/pokemon/";

    $('#containerLeft').on('click', 'img', function() {
        var id = $(this).attr('id');
        // console.log(url_info+id);
        $.get(url_info+id, function(pokemon) {
            console.log(pokemon.types);
            var HTMLstring = `
                <div id='groupPhoto'>
                    <img src='${pokemon.sprites.front_default}'>
                    <img src='${pokemon.sprites.front_shiny}'>
                </div>
                <h1>Name: ${pokemon.name}</h1>
                <p>Height: ${pokemon.height}</p>
                <p>Weight: ${pokemon.weight}</p>
                <p>Types:<ul>
            `
            var HTMLtypes = '';
            for (var z = 0; z < pokemon.types.length; z++) {
                HTMLtypes += `<li>${pokemon.types[z].type.name}</li>`
            }
            $('#containerRight').html(HTMLstring+HTMLtypes+'</ul>');
        },'json');
    } )

})