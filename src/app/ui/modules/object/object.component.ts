import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ObjectState } from 'src/app/store/object/object.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  @Select(ObjectState.className) className$: Observable<string>;

  constructor() { }

  ngOnInit() {
  }

}
