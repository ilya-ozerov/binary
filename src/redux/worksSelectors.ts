import { AppStateType } from "./store";
import {IsAllWorks, WorkItem} from "../types/types";

export const selectIsFetchingWorks = (state: AppStateType): boolean => {
    return state.portfolioSection.isFetchingWorks;
}

export const selectWeb = (state: AppStateType): WorkItem[] => {
    return state.portfolioSection.web;
}

export const selectApps = (state: AppStateType): WorkItem[] => {
    return state.portfolioSection.apps;
}

export const selectOther = (state: AppStateType): WorkItem[] => {
    return state.portfolioSection.other;
}

export const selectIsAllWorks = (state: AppStateType): IsAllWorks => {
    return state.portfolioSection.isAllWorks;
}