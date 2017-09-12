import {Compteur} from './compteur';

const compteur = new Compteur();
const para = document.querySelector('#para');
let bouton = document.querySelector('#increment');
bouton.addEventListener('click', function(e) {
    e.preventDefault;
    compteur.increment();
    para.textContent = compteur.showCount().toString();
})
