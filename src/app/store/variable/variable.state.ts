import { Variables } from 'src/app/models/variables';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddVariable, UpdateVariable } from './variable.actions';
import { Variable } from '@angular/compiler/src/render3/r3_ast';


export interface VariableStateModel {
    variables: Variables[];
}

@State<VariableStateModel>({
    name: 'variable',
    defaults: {
        variables: [],
    }
})
export class VariableState {

    @Selector()
    static variables(state: VariableStateModel) {
        return state.variables;
    }

    @Action(AddVariable)
    addVariable(ctx: StateContext<VariableStateModel>, action: AddVariable) {
        console.log([...ctx.getState().variables, action.variable]);
        ctx.patchState({ variables: [...ctx.getState().variables, action.variable] });
    }

    @Action(UpdateVariable)
    updateVariable(ctx: StateContext<VariableStateModel>, action: UpdateVariable) {
        var data = ctx.getState().variables.map((v) => {
            if (v.id == action.variable.id) {
                return action.variable;
            } else {
                return v;
            }
        });
        ctx.patchState({ variables: data });
    }
}