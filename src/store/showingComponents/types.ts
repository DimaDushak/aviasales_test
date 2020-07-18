export const RESIZE_WINDOW = 'RESIZE_WINDOW';
export const TOGGLE_SHOWING_POPUP = 'TOGGLE_SHOWING_POPUP';

export interface IResizeWindowAction {
    type: typeof RESIZE_WINDOW;
    isMobile: boolean;
}

export interface IToggleShowingPopupAction {
    type: typeof TOGGLE_SHOWING_POPUP;
    isShownPopup: boolean;
}

export type TShowingComponentsActionsTypes = IResizeWindowAction | IToggleShowingPopupAction;
