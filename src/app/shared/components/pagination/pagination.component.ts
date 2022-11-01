import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  numberPage: number = 1
  @Output() changePageEmitter = new EventEmitter()

  ngOnInit(): void {
  }

  resta(){
    if(this.numberPage > 1){

      this.numberPage --
      this.changePageEmitter.emit(this.numberPage)
    }
  }
  suma(){
    if(this.numberPage < 40){

      this.numberPage ++
      this.changePageEmitter.emit(this.numberPage)
    }
  }
}
