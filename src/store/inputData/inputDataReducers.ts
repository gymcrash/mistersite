import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "react";
import { InputDataActions } from "./inputDataActions";

export interface InputDataState {
    rawData: Array<any> | undefined;
    playableDevicesRaw: Array<any> | undefined;
    filteredData: any;
    filters: Array<string>;
}

const initialState: InputDataState = {
    rawData: undefined,
    playableDevicesRaw: undefined,
    filteredData: undefined,
    filters: []
}

export const inputDataReducer: Reducer<any, PayloadAction> = (state: any = initialState, action: PayloadAction) => {
    console.log(action.type);
    let newState: InputDataState = { ...state };
    switch (action.type) {
        case InputDataActions.LOADED_DATA.toString():

            newState = { ...newState, rawData: sortByAverage(action.payload) };
            newState.playableDevicesRaw = filterPlayables(newState.rawData);
            break;
    }
    return newState;
}

const sortByAverage: Function = (data: Array<any>): Array<any> | undefined => {

    let sorted: Array<any> = data;
    if (data) {
        sorted = Array.from(data).filter(x => x["Average Measured Latency (in ms)"]);
        sorted.sort((a, b) => {
            return a["Average Measured Latency (in ms)"] - b["Average Measured Latency (in ms)"];
        });
    }
    return sorted;
};

const filterPlayables: Function = (data: Array<any>): Array<any> | undefined => {
    let playable: Array<any> = data;
    if (data) {
        playable = data.filter(x => ["Controller", "Joystick"].includes(x["Category"]));
    }
    return playable;
}