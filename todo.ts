import * as $ from 'jquery';
import {TodoAjax} from './todo-ajax';

let todoAjax = new TodoAjax();

let data = <HTMLInputElement>document.querySelector('#data');
let liste = document.querySelector('#liste');
document.querySelector('#submit').addEventListener('click', function() {
todoAjax.add(data.value);
todoAjax.list();
let li = document.createElement("li");
li.textContent = data.value + " ";
let del = document.createElement("button");
del.textContent="Delete";
del.addEventListener('click', function() {
    todoAjax.delete(li.innerHTML);
    todoAjax.list();
});
li.appendChild(del);
liste.appendChild(li);
});

