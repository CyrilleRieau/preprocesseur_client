import * as $ from 'jquery';

export class TodoAjax {
    private urlApi:string = 'http://localhost:3000/todo';
   /*add(data:string):void {
        $.ajax({
            url : 'http://localhost:3000/todo',
            type : 'POST',
            data : 'nouveau=' + data
        });
    };
    delete(item:string):void {
        $.ajax({
            url : 'http://localhost:3000/todo',
            method : 'DELETE', 
            contentType : 'application/json',
            success :  (code_html, status)=>{
                console.log(code_html);
            } 
        });
    };
    list(){
        $.ajax({
            url : 'http://localhost:3000/todo', 
            type : 'GET',
            success :  (code_html, status)=>{
                console.log(code_html);
            }
        });
     };*/
    getAllTodos():Promise<string[]>{
         return $.ajax({
            url:this.urlApi,
        });
    }
    addTodo(item:string):Promise<string[]>{
        return $.ajax({
           url:this.urlApi,
           type : 'POST',
           data : 'nouveau=' + item
       });
    }
    deleteTodo(item:string):Promise<string[]>{
        return $.ajax({
           url:this.urlApi,
           method : 'DELETE', 
           contentType : 'application/json',
           success :  (code_html, status)=>{
               console.log(code_html);}   
       });
    }
    
}