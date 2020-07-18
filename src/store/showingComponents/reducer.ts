import { RESIZE_WINDOW, TOGGLE_SHOWING_POPUP, TShowingComponentsActionsTypes } from './types';

export const maxMobileWidth = 795;

interface IState {
    isMobile: boolean;
    isShownPopup: boolean;
}

const initialState: IState = {
    isMobile: window.innerWidth < maxMobileWidth,
    isShownPopup: false
};

export const showingComponents = (state = initialState, action: TShowingComponentsActionsTypes) => {
    switch(action.type) {
        case RESIZE_WINDOW:
            return {
                ...state,
                isMobile: action.isMobile
            };

        case TOGGLE_SHOWING_POPUP:
            return {
                ...state,
                isShownPopup: action.isShownPopup
            };

        default:
            return state;
    }
};
