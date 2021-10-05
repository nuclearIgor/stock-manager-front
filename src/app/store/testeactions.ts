import {createAction} from "@ngrx/store";

export const actionLoad = createAction(
    '[Action Load] Load Products'
);

export const actionOk = createAction(
    '[Action Load] Action ok'
);

export const actionFail = createAction(
    '[Action Load] Action fail'
);