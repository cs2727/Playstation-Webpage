const burgerEmojiElement = document.getElementById('menuContainer');
const navigationListElement = document.getElementById('navigationList');
let i = 1;


function toggleNavigation(){
    const oddOrEven = i % 2;
    
    if  (oddOrEven === 1){
    navigationListElement.style.display = 'block';
    } 
    else {
    navigationListElement.style.display = 'none';
    }

    i++;
};




burgerEmojiElement.addEventListener('click', toggleNavigation);