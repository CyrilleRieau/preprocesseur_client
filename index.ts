import {Compteur} from './compteur';
import {TodoAjax} from './todo-ajax';
import * as $ from 'jquery';

const compteur = new Compteur();
const para = document.querySelector('#para');
let bouton = document.querySelector('#increment');
bouton.addEventListener('click', function(e) {
    e.preventDefault;
    compteur.increment();
    para.textContent = compteur.showCount().toString();
})
const todoAjax = new TodoAjax();
todoAjax.getAllTodos().then(function(response) {
    console.log(response);
    let todo = $('#todo');
    for(let r of response){
    let li = $('<li>'+r+'</li>');
   //let li = $('<li>bloup</li>');
    todo.append(li);
    }
});
