import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction} from "redux-thunk";
import {IsAllWorks, WorkItem, Works} from "../types/types";
import {worksAPI} from "../api/api";

const WORKS_RECEIVED = 'binary/portfolio/WORKS_RECEIVED';
const IS_FETCHING_WORKS_CHANGED = 'binary/portfolio/IS_FETCHING_WORKS_CHANGED';
const MORE_WORKS_RECEIVED = 'binary/portfolio/MORE_WORKS_RECEIVED';
const CLIENT_PAGE_SIZE_INCREMENTED = 'binary/portfolio/CLIENT_PAGE_SIZE_INCREMENTED';
const IS_ALL_WORKS_CHANGED = 'binary/portfolio/IS_ALL_WORKS_CHANGED';


const defaultPageSize = 4;
const incrementStepClientPageSize = defaultPageSize;

let initialState = {
    web: [] as WorkItem[],
    apps: [] as WorkItem[],
    other: [] as WorkItem[],
    clientPageSize: defaultPageSize,
    isFetchingWorks: true,

    isAllWorks: {
        web: false,
        apps: false,
        other: false,
    } as IsAllWorks,
}

const worksReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case WORKS_RECEIVED:
            return _worksReceived(state, action.newWorks);
        case MORE_WORKS_RECEIVED:
            return _moreWorksReceived(state, action.newWorks);
        case CLIENT_PAGE_SIZE_INCREMENTED:
            return _clientPageSizeIncremented(state);
        case IS_FETCHING_WORKS_CHANGED:
            return _isFetchingWorksChanged(state, action.fetchingVal);
        case IS_ALL_WORKS_CHANGED:
            return _isAllWorksChanged(state, action.isAll);
        default:
            return state;
    }
}

const _isAllWorksChanged = (state: InitialStateType, isAll: IsAllWorks) => {
    return {
        ...state,
        isAllWorks: isAll,
    }
}

const _moreWorksReceived = (state: InitialStateType, newWorks: Works) => {
    return {
        ...state,
        web: [...state.web , ...newWorks.web],
        apps: [...state.apps , ...newWorks.apps],
        other: [...state.other , ...newWorks.other],
    }
}

const _worksReceived = (state: InitialStateType, newWorks: Works) => {
    return {
        ...state,
        web: [...newWorks.web],
        apps: [...newWorks.apps],
        other: [...newWorks.other],
    }
}

const _isFetchingWorksChanged = (state: InitialStateType, fetchingVal: boolean) => {
    return {
        ...state,
        isFetchingWorks: fetchingVal,
    }
}

const _clientPageSizeIncremented = (state: InitialStateType) => {
    return {
        ...state,
        clientPageSize: state.clientPageSize + incrementStepClientPageSize,
    }
}


export const portfolioActions = {
    worksReceived: (newWorks: Works) => ({type: WORKS_RECEIVED, newWorks} as const),
    moreWorksReceived: (newWorks: Works) => ({type: MORE_WORKS_RECEIVED, newWorks} as const),
    clientPageSizeIncremented: () => ({type: CLIENT_PAGE_SIZE_INCREMENTED} as const),
    isFetchingWorksChanged: (fetchingVal: boolean) => ({type: IS_FETCHING_WORKS_CHANGED, fetchingVal} as const),
    isAllWorksChanged: (isAll: IsAllWorks) => ({type: IS_ALL_WORKS_CHANGED, isAll} as const),
}

export const getWorks = (): ThunkType =>
    async (dispatch) => {
        dispatch(portfolioActions.isFetchingWorksChanged(true));

        const payload = worksAPI.getWorks(0, defaultPageSize);
        dispatch(portfolioActions.worksReceived(payload));

        let isAll: IsAllWorks = {
            web: payload.web.length < defaultPageSize ? true : false,
            apps: payload.apps.length < defaultPageSize ? true : false,
            other: payload.other.length < defaultPageSize ? true : false,
        }

        dispatch(portfolioActions.isAllWorksChanged(isAll))

        dispatch(portfolioActions.isFetchingWorksChanged(false));
    }

export const getMoreWorks = (): ThunkType =>
    async (dispatch, getState) => {
        dispatch(portfolioActions.isFetchingWorksChanged(true));

        const payload = worksAPI.getWorks(getState().portfolioSection.clientPageSize, defaultPageSize);
        dispatch(portfolioActions.moreWorksReceived(payload));
        dispatch(portfolioActions.clientPageSizeIncremented());

        let isAll: IsAllWorks = {
            web: payload.web.length < defaultPageSize ? true : false,
            apps: payload.apps.length < defaultPageSize ? true : false,
            other: payload.other.length < defaultPageSize ? true : false,
        }

        dispatch(portfolioActions.isAllWorksChanged(isAll))

        dispatch(portfolioActions.isFetchingWorksChanged(false));
    }

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof portfolioActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export default worksReducer;