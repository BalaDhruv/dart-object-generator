import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ObjectState } from 'src/app/store/object/object.state';
import { Observable } from 'rxjs';
import { ChangeClassMutable, SetClassName } from 'src/app/store/object/object.actions';

@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss']
})
export class ObjectDetailsComponent implements OnInit {

  @Select(ObjectState.isMutable) isMutable$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  setClassName(name: string) {
    if (name.trim() != '')
      this.store.dispatch(new SetClassName(name));
  }

  changeMutable() {
    this.store.dispatch(new ChangeClassMutable());
  }

}
