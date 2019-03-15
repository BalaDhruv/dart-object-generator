import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { MethodsState } from 'src/app/store/methods/methods.state';
import { Observable } from 'rxjs';
import { ChangeCopyWithState, ChangeFromJsonState, ChangeToJsonState, ChangeHashCodeState, ChangeEqualsState, ChangeToStringState } from 'src/app/store/methods/methods.actions';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {

  @Select(MethodsState.isCopyWith) isCopyWith$: Observable<boolean>;
  @Select(MethodsState.isFromJson) isFromJson$: Observable<boolean>;
  @Select(MethodsState.isToJson) isToJson$: Observable<boolean>;
  @Select(MethodsState.isHashCode) isHashCode$: Observable<boolean>;
  @Select(MethodsState.isEquals) isEquals$: Observable<boolean>;
  @Select(MethodsState.isToString) isToString$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  changeCopyWith() {
    console.log('changeCopyWith')
    this.store.dispatch(new ChangeCopyWithState());
  }

  changeisFromJson() {
    console.log('changeisFromJson')
    this.store.dispatch(new ChangeFromJsonState());
  }

  changeisToJson() {
    console.log('changeisToJson')
    this.store.dispatch(new ChangeToJsonState());
  }

  changeisHashCode() {
    console.log('changeisHashCode')
    this.store.dispatch(new ChangeHashCodeState());
  }

  changeisEquals() {
    console.log('changeisEquals')
    this.store.dispatch(new ChangeEqualsState());
  }

  changeisToString() {
    console.log('changeisToString')
    this.store.dispatch(new ChangeToStringState());
  }

}
