import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export class InputDataActions {
    static readonly LOAD_DATA = createAsyncThunk("InputDataActions/LoadData", async (anyvalue, thunkApi) => {
        const response: Response = await fetch("./data/data.json");
        response.json().then((data) => {
            thunkApi.dispatch(InputDataActions.LOADED_DATA(data));
        })
        return Promise.resolve();

    });
    static readonly LOADED_DATA = createAction<any>("InputDataActions/LoadedData");
    static readonly FILTER_DATA = createAction<Array<string>>("InputDataActions/FilterData");
}