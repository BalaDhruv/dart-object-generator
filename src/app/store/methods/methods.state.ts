import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ChangeCopyWithState, ChangeFromJsonState, ChangeToJsonState, ChangeHashCodeState, ChangeEqualsState, ChangeToStringState } from './methods.actions';

export interface MethodsStateModel {
    copyWith: boolean;
    fromJson: boolean;
    toJson: boolean;
    hashCode: boolean;
    equals: boolean;
    tostring: boolean;
}

@State<MethodsStateModel>({
    name: 'method',
    defaults: {
        fromJson: true,
        toJson: true,
        tostring: true,
        copyWith: false,
        equals: false,
        hashCode: false,
    }
})
export class MethodsState {

    @Selector()
    static isCopyWith(state: MethodsStateModel) {
        return state.copyWith;
    }

    @Selector()
    static isFromJson(state: MethodsStateModel) {
        return state.fromJson;
    }

    @Selector()
    static isToJson(state: MethodsStateModel) {
        return state.toJson;
    }

    @Selector()
    static isHashCode(state: MethodsStateModel) {
        return state.hashCode;
    }

    @Selector()
    static isEquals(state: MethodsStateModel) {
        return state.equals;
    }

    @Selector()
    static isToString(state: MethodsStateModel) {
        return state.tostring;
    }

    @Action(ChangeCopyWithState)
    changeCopyWithState(ctx: StateContext<MethodsStateModel>, actions: ChangeCopyWithState) {
        ctx.patchState({ copyWith: !ctx.getState().copyWith });
    }

    @Action(ChangeFromJsonState)
    changeFromJsonState(ctx: StateContext<MethodsStateModel>, actions: ChangeFromJsonState) {
        ctx.patchState({ fromJson: !ctx.getState().fromJson });
    }

    @Action(ChangeToJsonState)
    changeToJsonState(ctx: StateContext<MethodsStateModel>, actions: ChangeToJsonState) {
        ctx.patchState({ toJson: !ctx.getState().toJson });
    }

    @Action(ChangeHashCodeState)
    changeHashCodeState(ctx: StateContext<MethodsStateModel>, actions: ChangeHashCodeState) {
        ctx.patchState({ hashCode: !ctx.getState().hashCode });
    }

    @Action(ChangeEqualsState)
    changeEqualsState(ctx: StateContext<MethodsStateModel>, actions: ChangeEqualsState) {
        ctx.patchState({ equals: !ctx.getState().equals });
    }

    @Action(ChangeToStringState)
    changeToStringState(ctx: StateContext<MethodsStateModel>, actions: ChangeToStringState) {
        ctx.patchState({ tostring: !ctx.getState().tostring });
    }
}
