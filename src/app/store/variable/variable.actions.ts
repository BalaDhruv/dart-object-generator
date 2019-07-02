import { Variables } from 'src/app/models/variables';

export class AddVariable {
    static readonly type = '[OBJECT] Add Variable';
    constructor(public variable: Variables) { }
}

export class UpdateVariable {
    static readonly type = '[OBJECT] Update Variable';
    constructor(public variable: Variables) { }
}

