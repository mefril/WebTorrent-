export const UPLOAD_FILE = "ADD_FILE_UPLOAD_FILE";
export const UPDATE_DESCRIPTION = "ADD_FILE_UPDATE_DECRIPTION";
export const UPDATE_NAME = "ADD_FILE_UPDATE_NAME";

export function uploadFile(file) {
    return {
        type: UPLOAD_FILE,
        file: file
    }
}
export function updateName(value) {
    return {
        type: UPDATE_NAME,
        name: value
    }
}
export function updateDescription(value) {
    return {
        type: UPDATE_DESCRIPTION,
        description: value
    }
}