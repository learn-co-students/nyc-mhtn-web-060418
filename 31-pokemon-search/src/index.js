document.addEventListener("DOMContentLoaded", function(event) {
    const pokemonHTMLContainer = document.getElementById('pokemon-container')

    const searchPokemon = searchTerm => pokemonData.pokemons.filter(pokemonObj => pokemonObj.name.includes(searchTerm))

    const generatePokemonHTML = pokemonOBj => {
        return `
                <div class="pokemon-container">
                    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
                    <h1 class="center-text">${pokemonOBj.name}</h1>
                    <div style="width:239px;margin:auto">
                    <div style="width:96px;margin:auto">
                        <img data-image-direction="front" data-pokemon-name="${pokemonOBj.name}" src="${pokemonOBj.sprites.front}">
                    </div>
                    </div>
                    <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemonOBj.name}" data-action="flip-image">flip card</p>
                    </div>
                </div>
                `
    }

    const renderPokemon = pokemonOBjs => {
        const pokemonOBjsHTML = pokemonOBjs.map(pokemonOBj => generatePokemonHTML(pokemonOBj)).join('')
        pokemonHTMLContainer.innerHTML = pokemonOBjsHTML
    }

    const searchTermInputField = document.getElementById('pokemon-search-input')
    searchTermInputField.addEventListener('keyup',function(event) {
        if (searchTermInputField.value) {
            const pokemonWhoMatchSearchCriteria = searchPokemon(searchTermInputField.value)
            renderPokemon(pokemonWhoMatchSearchCriteria)
        } else {
            pokemonHTMLContainer.innerHTML = ''
        }
    })

    const findPokemon = pokemonName => pokemonData.pokemons.find(pokemonObj => pokemonObj.name === pokemonName)

    const togglePokemonImageFor = (pokemonObj, pokemonImgElement, nextDirection) => {
        pokemonImgElement.dataset.imageDirection = nextDirection
        pokemonImgElement.src = pokemonObj.sprites[nextDirection]
    }

    const handleTogglePokemonImageFor = pokemonName => {
        const pokemonObj = findPokemon(pokemonName)
        const pokemonObjHTMLElement = document.querySelector(`img[data-pokemon-name="${pokemonObj.name}"]`)
        const nextDirection = pokemonObjHTMLElement.dataset.imageDirection === 'front' ? 'back' : 'front'
        togglePokemonImageFor(pokemonObj, pokemonObjHTMLElement, nextDirection)
    }

    pokemonHTMLContainer.addEventListener('click',function(event) {
        if (event.target.dataset.action === 'flip-image') {
            console.log("I am interested")
            handleTogglePokemonImageFor(event.target.dataset.pokename)
        }
    })
})