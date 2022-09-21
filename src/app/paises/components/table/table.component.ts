import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countrys.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: Country[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
