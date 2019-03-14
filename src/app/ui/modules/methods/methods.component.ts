import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { MethodsState } from 'src/app/store/methods/methods.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {

  @Select(MethodsState.isCopyWith) isCopyWith: Observable<boolean>;
  @Select(MethodsState.isFromJson) isFromJson: Observable<boolean>;
  @Select(MethodsState.isToJson) isToJson: Observable<boolean>;
  @Select(MethodsState.isHashCode) isHashCode: Observable<boolean>;
  @Select(MethodsState.isEquals) isEquals: Observable<boolean>;
  @Select(MethodsState.isToString) isToString: Observable<boolean>;

  constructor() { }

  ngOnInit() {
  }

}
