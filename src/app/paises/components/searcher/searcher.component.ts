import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {


  @Output() onSearch : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = ''

  debouncer: Subject<string> = new Subject;

  search: string = '';

  buscar(){
      this.onSearch.emit(this.search);
  }

  teclaPress(event:any){
     this.debouncer.next(this.search);
  }


  constructor() { }

  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor => {
        this.onDebounce.emit(valor);
    })
  }


}
