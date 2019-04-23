class CalcController {

   constructor(){

        this._displayCalc = '0';
        this._currentDate;
        this.initialize();
   }

   initialize(){

        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayCalcEl.innerHTML = '1337';
        dateEl.innerHTML = '14/07/1994';
        timeEl.innerHTML = '04:20';
        
   }

   get displayCalc(){

    return this._displayCalc;
   }

   set displayCalc(value){
    this._displayCalc = value;
   }

   get currentDate(){
       return this._currentDate;
   }

   set currentDate(value){
       this._currentDate = value;
   }
}