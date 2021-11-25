import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


    weight= '';
    message:string='';
    unit: string = "kg"
    inputValue ="";

     constructor(){

     }
     ngOnInit() {


     }
     onUnitChange(event: any) {
       this.unit = event.target.value;
     }
     showEvent(event:any){
       this.weight=event.target.value;
     }
     onSubmit(value: string){
       this.inputValue = value;
     }
     onClick() {
       this.weight = `${this.message} ${this.unit}`  ;
     }


}
