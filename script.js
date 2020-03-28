const closeMenuImage = document.querySelector('.close-menu');
const openMenuImage = document.querySelector('.open-menu');
const navigation = document.querySelector('.menu');


openMenuImage.addEventListener('click', ()=>{
    navigation.classList.remove('menu-hidden');
    openMenuImage.classList.add('hidden');
    closeMenuImage.classList.remove('hidden');
});

closeMenuImage.addEventListener('click', ()=>{
    navigation.classList.add('menu-hidden');
    openMenuImage.classList.remove('hidden');
    closeMenuImage.classList.add('hidden');
});
