document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonNumber = urlParams.get('number');

    if (pokemonNumber) {
        fetchPokemonDetail(pokemonNumber);
    }
});

function fetchPokemonDetail(pokemonNumber) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        .then(response => response.json())
        .then(pokemon => displayPokemonDetail(pokemon));
}

function displayPokemonDetail(pokemon) {
    const pokemonDetailContainer = document.getElementById('pokemonDetailContainer');
    const types = pokemon.types.map((typeSlot) => typeSlot.type.name);
    const primaryType = types[0];

    
    pokemonDetailContainer.className = 'modelopokemon';

    // Define a cor de fundo com base no tipo principal do Pokémon
    const typeClass = primaryType.toLowerCase();
    pokemonDetailContainer.classList.add(typeClass);

    pokemonDetailContainer.innerHTML = `
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        <p><strong>Number:</strong> #${pokemon.id}</p>
        <p><strong>Types:</strong> ${types.join(', ')}</p>
        <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
    `;
}
