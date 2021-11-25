import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent implements OnInit {
  @Input()
  message:string='';
  unit: string = "kg"
  @Output()
  submit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onUnitChange(event: any) {
    this.unit = event.target.value;
  }
  showEvent(event:any){

  }
  onClick(){
    const weight = `${this.message} ${this.unit}`;
    this.submit.emit(weight)
  }

}
