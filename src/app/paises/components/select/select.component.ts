import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  region : string = '';

  @Output() onSearch : EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  @Input() regiones: string[] = [];

  form : FormGroup = new FormGroup({
    region: new FormControl(this.regiones[3]),
  });

  constructor() { }

  buscar(){

    this.onSearch.emit(this.form.value.region);
  }

  ngOnInit(): void {
  }

}
