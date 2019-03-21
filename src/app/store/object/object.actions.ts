
export class SetClassName {
    static readonly type = '[OBJECT] Setting Class Name';
    constructor(public className: string) { }
}

export class ChangeClassMutable {
    static readonly type = '[OBJECT] Setting Class Mutable';
}