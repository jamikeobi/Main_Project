import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  /*Optional 2nd Argument of @ViewChild()
  1. read: Use it to read the different token from the qeuried elements
  2. static: Determines when the query is resolved.

  True is when the view is initialized (before the first change detection) for the first time.
  False if you want it to be resolved after every chnage detection
  */
 

  @ViewChild('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged(){
        this.searchTextChanged.emit(this.searchText);
  }
  updateSearchText(){
    // // this.searchText = event.target.value;
    // console.log(inputEl.value);
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }  
}
