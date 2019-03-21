import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ChangeClassMutable, SetClassName } from './object.actions';


export interface ObjectStateModel {
    className: string;
    isMutable: boolean;
}

@State<ObjectStateModel>({
    name: 'object',
    defaults: {
        className: 'ClassName',
        isMutable: false
    }
})
export class ObjectState {

    @Selector()
    static isMutable(state: ObjectStateModel) {
        return state.isMutable;
    }

    @Selector()
    static className(state: ObjectStateModel) {
        return state.className;
    }

    @Action(SetClassName)
    setClassName(ctx: StateContext<ObjectStateModel>, action: SetClassName) {
        ctx.patchState({ className: action.className });
    }

    @Action(ChangeClassMutable)
    changeMutable(ctx: StateContext<ObjectStateModel>, action: ChangeClassMutable) {
        ctx.patchState({ isMutable: !ctx.getState().isMutable });
    }
}