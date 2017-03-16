import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

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
    this.searchControl.valueChanges
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(value => {
        console.log(value);
      });
  }
}
