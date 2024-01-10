const list = document.querySelector("ul");
const buttonshowball = document.querySelector('.showball');
let myLi = '';

function showball() {
  myLi = '';
  menuOptions.forEach((product) => {
    myLi += `
      <li>
        <img src="${product.src}" alt="${product.name}">
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
      </li>
    `;
  });
  list.innerHTML = myLi;
}

buttonshowball.addEventListener('click', showball);

