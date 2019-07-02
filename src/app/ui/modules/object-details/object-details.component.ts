import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ObjectState } from 'src/app/store/object/object.state';
import { Observable } from 'rxjs';
import { ChangeClassMutable, SetClassName } from 'src/app/store/object/object.actions';
import { AddVariable } from 'src/app/store/variable/variable.actions';

@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss']
})
export class ObjectDetailsComponent implements OnInit {

  @Select(ObjectState.isMutable) isMutable$: Observable<boolean>;
  ids: number[];

  constructor(private store: Store) {
    this.ids = [1];
  }

  ngOnInit() { }

  setClassName(name: string) {
    if (name.trim() != '')
      this.store.dispatch(new SetClassName(name));
  }

  changeMutable() {
    this.store.dispatch(new ChangeClassMutable());
  }

  addNewId(id: number) {
    if (this.ids.length <= id) {
      this.ids.push(this.ids.length + 1);
    }
  }

}
