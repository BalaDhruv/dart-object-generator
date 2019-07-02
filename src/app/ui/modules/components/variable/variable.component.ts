import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddVariable, UpdateVariable } from 'src/app/store/variable/variable.actions';
import { Variables } from 'src/app/models/variables';

enum TYPES { INT, DOUBLE, STRING, BOOL, DATETIME, LIST, SET, MAPS, OBJECT }

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit {

  @Input() id: number;
  @Output() addId: EventEmitter<number> = new EventEmitter();
  dataType: number = TYPES.INT;
  isMutable: boolean = false;
  name: string = '';

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new AddVariable({ id: this.id, name: '', type: TYPES.INT, isNullable: false }));
  }

  updateName(name: string) {
    // console.log(name);
    this.name = name;
    if (name.length >= 1) {
      this.addId.emit(this.id);
      this.updateVariable();
    }
  }

  updateVariable() {
    this.store.dispatch(new UpdateVariable({ id: this.id, name: this.name, type: this.dataType, isNullable: this.isMutable }));
  }

  changeMutable() {
    this.isMutable = !this.isMutable;
    this.updateVariable();
    // this.store.dispatch(new ChangeClassMutable());
  }

  updateType(data) {
    this.dataType = data.target.value;
    this.updateVariable();
    console.log(TYPES.INT);
    console.log(data.target.value);
  }

}
