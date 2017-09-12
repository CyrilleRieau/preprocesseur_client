export class Compteur {
    constructor(private compte:number = 0){
    }
    increment(){
        this.compte++;
    }
    /*decrement(){
        this.compte--;
    }*/
    showCount():number{
        return this.compte;
    }
}