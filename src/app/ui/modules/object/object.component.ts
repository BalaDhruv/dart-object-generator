import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ObjectState } from 'src/app/store/object/object.state';
import { Observable } from 'rxjs';
import { MethodsState } from 'src/app/store/methods/methods.state';
import { VariableState } from 'src/app/store/variable/variable.state';
import { Variables } from 'src/app/models/variables';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  @Select(ObjectState.className) className$: Observable<string>;
  @Select(VariableState.variables) variables$: Observable<Variables[]>;
  @Select(MethodsState.isCopyWith) isCopyWith$: Observable<boolean>;

  constructor() { }

  ngOnInit() {
  }

  getType(type: number) {
    console.log(type);
    if (type == 0) {
      return 'int';
    } else if (type == 1) {
      return 'double';
    } else if (type == 2) {
      return 'String';
    } else if (type == 3) {
      return 'bool';
    } else if (type == 4) {
      return 'DateTime';
    } else if (type == 5) {
      return 'List';
    } else if (type == 6) {
      return 'Set';
    } else if (type == 7) {
      return 'Maps';
    } else if (type == 8) {
      return 'Object';
    }
  }

}
