import { UPDATE_BOARD_VALUES, UPDATE_UPLOAD_VALUES,UPDATE_SELECTED_TAB } from "../constants/action-types";

export const updateBoardValues = (payload) => ({
    type: UPDATE_BOARD_VALUES,
    payload,
})


export const updateUploadValues = (payload) => ({
    type: UPDATE_UPLOAD_VALUES,
    payload,
})

export const updateSelectedTab = (payload) => ({
    type: UPDATE_SELECTED_TAB,
    payload,
})






