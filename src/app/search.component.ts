import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'search',
  template: `
<input class="form-control" type="search"
[formControl]="searchControl"/>
`
})
export class SearchComponent {
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
}
