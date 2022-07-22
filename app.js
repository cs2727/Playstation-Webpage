const burgerEmojiElement = document.getElementById('menuContainer');
const navigationListElement = document.querySelector('ul');
const headerElement = document.querySelector('header');
let i = 1;


console.log(headerElement);

function toggleNavigation(){
    const oddOrEven = i % 2;

    if  (oddOrEven === 1){
    navigationListElement.id = 'navigationList';
    headerElement.style.position = 'static';
    
    } 
    else {
    navigationListElement.removeAttribute('id');
    headerElement.style.position = 'relative';
    }

    i++;
};




burgerEmojiElement.addEventListener('click', toggleNavigation);