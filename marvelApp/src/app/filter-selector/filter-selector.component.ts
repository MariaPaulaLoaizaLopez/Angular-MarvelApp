import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css']
})
export class FilterSelectorComponent implements OnInit {

  @Output() FilterOption: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  OnClickOption(option:string):void{
    this.FilterOption.emit(option);
  }

}
