let elList = document.querySelector('.list');
let elSelect = document.querySelector('.js-select');
let elInput = document.querySelector('.js-input');
let elSort = document.querySelector('sort-select');


function func(array) {
    array.forEach((item) => {
        var elItem = document.createElement('li');
        elItem.setAttribute('class', 'list-item');

        //  CREATE IMG
        var elImg = document.createElement('img');
        elImg.setAttribute('class', 'item-img')
        elImg.setAttribute('src', item.img)

        // CREATE NAME
        var elName = document.createElement('h4');
        elName.setAttribute('class', 'item-name')
        elName.textContent = item.name;

        // CREATE TYPE
        var elType = document.createElement('p');
        elType.setAttribute('class', 'item-type')
        elType.textContent = item.type;

        // CREATE ID
        var elId = document.createElement('p');
        elId.setAttribute('class', 'item-id')
        elId.textContent = item.id;

        // CREATE NUMBER
        var elNumber = document.createElement('p');
        elNumber.setAttribute('class', 'item-id')
        elNumber.textContent = item.num;

        elItem.appendChild(elImg);
        elItem.appendChild(elName);
        elItem.appendChild(elType);
        elItem.appendChild(elId);
        elItem.appendChild(elNumber);
        elList.appendChild(elItem);
    })
}

let newArray = [];
func(pokemons);
elSelect.addEventListener('change', (evt) => {
    newArray = [];
    elList.innerHTML = '';

    if(elSelect.value != 'All') {
        pokemons.forEach((poc) => {
            if (poc.type.includes(elSelect.value)) {
                newArray.push(poc)
            }
        })
        func(newArray)
    }
    else {
        func(pokemons)
    }
})

let searchArr = [];
elInput.addEventListener('input' , (evt) => {
    evt.preventDefault();
    elList.innerHTML = '';

    let elInputVal = elInput.value.toLowerCase();
    
    pokemons.forEach((el) => {
        if (el.name.toLowerCase().includes(elInputVal)) {
            searchArr.push(el);
            // console.log(searchArr);
        }
    })
    func(searchArr);
    searchArr = [];
})














let newArr = [];
let setArray = new Set();

function addNewArr(array) {
    pokemons.forEach((el) => {
        setArray.add(...el.type);
    });
    return setArray;
}

addNewArr(pokemons);

setArray.forEach((el) => {
    let elOption = document.createElement('option');
    elOption.value = el;
    elOption.textContent = el;
    elSelect.appendChild(elOption);
});




