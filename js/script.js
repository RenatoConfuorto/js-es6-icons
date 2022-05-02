const iconContainer = document.querySelector('main > .container');
const filter = document.getElementById('filter');
const options = document.querySelectorAll('#filter > option');

filter.addEventListener('click', function(){
  const selectedArray = findArray(filter.value);
  //svuotare il container
  iconContainer.innerHTML = '';

  printCells(selectedArray);
});

function findArray(value){
  let array = icons;

  if(value === 'animals')array = animalsIcons;
  else if(value === 'vegetables')array = vegetablesIcons;
  else if(value === 'user')array = userIcons;

  // console.log(array);

  return array;
}

//stampare inizialmente tutte le celle

printCells(icons);

function printCells(array){
  //inserire in pagina un elemento per ogni oggetto dell'array
  array.forEach( element => {
    const cell = document.createElement('div');
    cell.classList.add('icon-cell');

    const icon = document.createElement('i');
    icon.classList.add(`${element.family}`, `${element.prefix}${element.name}`, `${element.color}`);
    cell.append(icon);

    const name = document.createElement('h3');
    name.innerText = `${element.name}`;
    cell.append(name);

    iconContainer.appendChild(cell);
  });
}

