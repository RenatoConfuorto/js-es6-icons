const iconContainer = document.querySelector('main > .container');


//inserire in pagina un elemento per ogni oggetto dell'array
icons.forEach( element => {
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