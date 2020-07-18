import { RESIZE_WINDOW, TOGGLE_SHOWING_POPUP, IResizeWindowAction, IToggleShowingPopupAction } from './types';

export const resizeWindow = (isMobile: boolean): IResizeWindowAction => ({
    type: RESIZE_WINDOW,
    isMobile
});

export const toggleShowingPopup = (isShownPopup: boolean): IToggleShowingPopupAction => ({
    type: TOGGLE_SHOWING_POPUP,
    isShownPopup
});
