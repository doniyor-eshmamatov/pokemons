var elList = document.querySelector('.list');

function func() {
    for (i = 0; i < pokemons.length; i++) {
        var elItem = document.createElement('li');
        elItem.setAttribute('class', 'list-item');

        //  CREATE IMG
        var elImg = document.createElement('img');
        elImg.setAttribute('class', 'item-img')
        elImg.setAttribute('src', pokemons[i].img)

        // CREATE NAME
        var elName = document.createElement('h4');
        elName.setAttribute('class', 'item-name')
        elName.textContent = pokemons[i].name;

        // CREATE TYPE
        var elType = document.createElement('p');
        elType.setAttribute('class', 'item-type')
        elType.textContent = pokemons[i].type;

        // CREATE ID 
        var elId = document.createElement('p');
        elId.setAttribute('class', 'item-id')
        elId.textContent = pokemons[i].id;

        // CREATE NUMBER 
        var elNumber = document.createElement('p');
        elNumber.setAttribute('class', 'item-id')
        elNumber.textContent = pokemons[i].num;

        elItem.appendChild(elImg);
        elItem.appendChild(elName);
        elItem.appendChild(elType);
        elItem.appendChild(elId);
        elItem.appendChild(elNumber);
        elList.appendChild(elItem);
    }
}

func();